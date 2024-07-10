// Importing necessary modules and functions from external libraries and local files.
import { Request, Response } from 'express';
import { createUser, findUserByEmail } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register function to handle user registration
export const register = async (req: Request, res: Response) => {
  // Destructuring the request body to get username, email, and password
  const { username, email, password } = req.body;
  try {
    // Check if a user with the given email already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      // If user exists, return a 400 status with an appropriate message
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user with the provided username, email, and password
    const user = await createUser(username, email, password);

    // Generate a JWT token for the newly created user, valid for 1 hour
    const token = jwt.sign({ id: user.id }, 'jwtsecret0298176533789301', { expiresIn: '1h' });

    // Return a 201 status with the token and user information
    res.status(201).json({ token, user });
  } catch (error: any) {
    // If an error occurs, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};

// Login function to handle user login
export const login = async (req: Request, res: Response) => {
  // Destructuring the request body to get email and password
  const { email, password } = req.body;
  try {
    // Find a user with the given email
    const user = await findUserByEmail(email);
    if (!user) {
      // If no user is found, return a 400 status with an appropriate message
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // If passwords do not match, return a 400 status with an appropriate message
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token for the authenticated user, valid for 1 hour
    const token = jwt.sign({ id: user.id }, 'jwtsecret0298176533789301', { expiresIn: '1h' });

    // Return a 200 status with the token and user information
    res.status(200).json({ token, user });
  } catch (error: any) {
    // If an error occurs, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};
