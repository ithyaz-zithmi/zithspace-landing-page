import pool from './src/lib/db';

async function test() {
  try {
    const res = await pool.query('SELECT 1');
    console.log('DB Connection OK');
    const tableCheck = await pool.query("SELECT to_regclass('public.demo_requests')");
    console.log('Table Result:', tableCheck.rows[0]);
  } catch (err) {
    console.error('DB Connection Failed:', err);
  } finally {
    process.exit();
  }
}

test();
