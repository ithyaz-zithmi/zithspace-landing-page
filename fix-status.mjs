import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

async function fixStatusConfigs() {
  try {
    console.log('Fixing status_configs table...');
    
    // First, let's see what's currently in the status_configs table
    const currentStatuses = await pool.query('SELECT * FROM status_configs');
    console.log('Current statuses:', currentStatuses.rows);
    
    // Remove invalid status "New User" if it exists
    await pool.query("DELETE FROM status_configs WHERE name = 'New User'");
    console.log('Removed invalid "New User" status');
    
    // Insert valid statuses with proper constraint values
    const insertQuery = `
      INSERT INTO status_configs (name, is_default) VALUES 
        ('pending', true),
        ('contacted', false),
        ('scheduled', false),
        ('completed', false),
        ('cancelled', false)
      ON CONFLICT (name) DO UPDATE SET
        is_default = EXCLUDED.is_default
    `;
    
    await pool.query(insertQuery);
    console.log('Inserted valid status values');
    
    // Verify the fix
    const updatedStatuses = await pool.query('SELECT * FROM status_configs');
    console.log('Updated statuses:', updatedStatuses.rows);
    
    console.log('Status configs fixed successfully!');
    
  } catch (error) {
    console.error('Error fixing status configs:', error);
  } finally {
    await pool.end();
    process.exit();
  }
}

fixStatusConfigs();
