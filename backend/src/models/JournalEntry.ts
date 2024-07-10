// Import the database pool instance for executing SQL queries
import pool from '../utils/db';

// Define the structure of a Journal Entry using an interface
interface JournalEntry {
  id: string;       // Unique identifier for the entry
  title: string;    // Title of the journal entry
  content: string;  // Content or body of the journal entry
  category: string; // Category or classification of the entry (e.g., Personal, Work, Travel)
  date: string;     // Date of the journal entry
  userId: string;   // User ID associated with the entry
}

// Function to create a new journal entry in the database
export const createEntry = async (title: string, content: string, category: string, date: string, userId: string) => {
  // Execute an SQL INSERT query to add a new entry to the 'journal_entries' table
  const result = await pool.query(
    'INSERT INTO journal_entries (title, content, category, date, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [title, content, category, date, userId]
  );
  // Return the newly created entry from the query result
  return result.rows[0];
};

// Function to retrieve all journal entries associated with a specific user
export const getEntriesByUser = async (userId: string) => {
  // Execute an SQL SELECT query to fetch entries from 'journal_entries' table based on user_id
  const result = await pool.query('SELECT * FROM journal_entries WHERE user_id = $1', [userId]);
  // Return the array of entries fetched from the query result
  return result.rows;
};

// Function to update an existing journal entry in the database
export const updateEntry = async (id: string, title: string, content: string, category: string, date: string) => {
  // Execute an SQL UPDATE query to modify an entry in 'journal_entries' table based on its id
  const result = await pool.query(
    'UPDATE journal_entries SET title = $1, content = $2, category = $3, date = $4 WHERE id = $5 RETURNING *',
    [title, content, category, date, id]
  );
  // Return the updated entry from the query result
  return result.rows[0];
};

// Function to delete a journal entry from the database
export const deleteEntry = async (id: string) => {
  // Execute an SQL DELETE query to remove an entry from 'journal_entries' table based on its id
  const result = await pool.query('DELETE FROM journal_entries WHERE id = $1 RETURNING *', [id]);
  // Return the deleted entry from the query result
  return result.rows[0];
};
