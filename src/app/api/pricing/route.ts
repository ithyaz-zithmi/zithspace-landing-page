import { NextResponse } from 'next/server';
import { PriceSetting } from '@/types/pricing';
import pool from '@/lib/db';

// Fetch pricing data from actual database
async function getPricingDataFromDatabase(): Promise<PriceSetting[]> {
  try {
    const query = `
      SELECT id, title, subtitle, amount_type, amount, points, status, created_at, updated_at 
      FROM price_settings 
      WHERE status = 'active' 
      ORDER BY id
    `;
    
    const result = await pool.query(query);
    return result.rows.map(row => ({
      ...row,
      points: row.points || [], // Ensure points is always an array
      amount: parseFloat(row.amount) // Convert DECIMAL to number
    }));
  } catch (error) {
    console.error('Database query error:', error);
    throw new Error('Failed to fetch pricing data from database');
  }
}

export async function GET() {
  try {
    const pricingData = await getPricingDataFromDatabase();
    
    // Return all active pricing records without grouping
    const plans = pricingData.map(plan => ({
      id: plan.id,
      name: plan.title,
      description: plan.subtitle,
      price: plan.amount,
      features: plan.points,
      amount_type: plan.amount_type,
      isPopular: plan.title.toLowerCase().includes('growth') // Mark growth plans as popular
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
