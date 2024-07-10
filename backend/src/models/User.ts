// Import the database pool instance for executing SQL queries
import pool from '../utils/db';
// Import bcrypt for hashing passwords
import bcrypt from 'bcryptjs';

// Define the structure of a User using an interface
interface User {
  id: string;        // Unique identifier for the user
  username: string;  // User's username
  email: string;     // User's email address
  password: string;  // Hashed password for user authentication
}

// Function to create a new user in the database
export const createUser = async (username: string, email: string, password: string) => {
  // Hash the password using bcrypt with a salt round of 10
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Execute an SQL INSERT query to add a new user to the 'users' table
  const result = await pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [username, email, hashedPassword]
  );
  
  // Return the newly created user from the query result
  return result.rows[0];
};

// Function to find a user by their email address
export const findUserByEmail = async (email: string) => {
  // Execute an SQL SELECT query to fetch a user from 'users' table based on email
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
  // Return the user found from the query result
  return result.rows[0];
};

// Function to find a user by their unique ID
export const findUserById = async (id: string) => {
  // Execute an SQL SELECT query to fetch a user from 'users' table based on id
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  
  // Return the user found from the query result
  return result.rows[0];
};
