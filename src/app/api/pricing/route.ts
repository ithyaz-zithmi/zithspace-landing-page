import { NextResponse } from 'next/server';
import { PriceSetting } from '@/types/pricing';
import pool from '@/lib/db';

// Fetch pricing data from actual database
async function getPricingDataFromDatabase(): Promise<PriceSetting[]> {
  try {
    const query = `
      SELECT id, type, title, subtitle, amount_type, monthly_amount, yearly_amount, points, button_text, status, created_at, updated_at 
      FROM price_settings 
      WHERE status = 'active' 
      ORDER BY id
    `;
    
    const result = await pool.query(query);
    return result.rows.map(row => ({
      ...row,
      points: row.points || [], // Ensure points is always an array
      monthly_amount: parseFloat(row.monthly_amount), // Convert DECIMAL to number
      yearly_amount: parseFloat(row.yearly_amount) // Convert DECIMAL to number
    }));
  } catch (error) {
    console.error('Database query error:', error);
    throw new Error('Failed to fetch pricing data from database');
  }
}

export async function GET() {
  try {
    const pricingData = await getPricingDataFromDatabase();
    
    // Return all active pricing records with new schema fields
    const plans = pricingData.map(plan => ({
      id: plan.id,
      type: plan.type,
      name: plan.title,
      description: plan.subtitle,
      monthly_amount: plan.monthly_amount,
      yearly_amount: plan.yearly_amount,
      features: plan.points,
      buttonText: plan.button_text || 'Coming Soon....',
      isPopular: plan.title.toLowerCase().includes('growth') || plan.type === 'Business'
    }));

    return NextResponse.json(plans);
  } catch (error) {
    console.error('Error fetching pricing data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pricing data' },
      { status: 500 }
    );
  }
}
