// Import Pool from pg to manage database connections
import { Pool } from 'pg';

// Create a new Pool instance to manage PostgreSQL database connections
const pool = new Pool({
  user: 'admin',         // Database user name
  host: 'localhost',     // Database host (localhost in this case)
  database: 'dbjournalapp', // Database name
  password: 'pass',      // Password for database user
  port: 5432,            // Port on which PostgreSQL is running (default: 5432)
});

// Export the pool instance to be used for executing database queries
export default pool;
