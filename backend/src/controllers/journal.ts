// Import necessary modules and functions from external libraries and local files
import { Request, Response } from 'express';
import { createEntry, getEntriesByUser, updateEntry, deleteEntry } from '../models/JournalEntry';

// Extend Request type definition to include user property
declare module 'express-serve-static-core' {
  interface Request {
    user?: { id: string }; // Define the structure of your user object here
  }
}

// Controller function to add a new journal entry
export const addEntry = async (req: Request, res: Response) => {
  // Destructure the request body to get title, content, category, and date
  const { title, content, category, date } = req.body;
  // Extract userId from request object
  const userId: string | undefined = req.user?.id; // Assign type explicitly
  try {
    // Check if userId is available
    if (!userId) {
      throw new Error('User ID not found');
    }
    // Create a new journal entry using the provided parameters and userId
    const entry = await createEntry(title, content, category, date, userId);
    // Return a 201 status with the newly created entry object
    res.status(201).json(entry);
  } catch (error: any) {
    // If an error occurs, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};

// Controller function to fetch all journal entries for a specific user
export const getEntries = async (req: Request, res: Response) => {
  // Extract userId from request object
  const userId: string | undefined = req.user?.id; // Assign type explicitly
  try {
    // Check if userId is available
    if (!userId) {
      throw new Error('User ID not found');
    }
    // Retrieve all journal entries associated with the userId
    const entries = await getEntriesByUser(userId);
    // Return a 200 status with the array of entries
    res.status(200).json(entries);
  } catch (error: any) {
    // If an error occurs, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};

// Controller function to edit an existing journal entry
export const editEntry = async (req: Request, res: Response) => {
  // Destructure the request body to get id, title, content, category, and date
  const { id, title, content, category, date } = req.body;
  try {
    // Update the journal entry with the provided id and new details
    const updatedEntry = await updateEntry(id, title, content, category, date);
    // Return a 200 status with the updated entry object
    res.status(200).json(updatedEntry);
  } catch (error: any) {
    // If an error occurs, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete an existing journal entry
export const removeEntry = async (req: Request, res: Response) => {
  // Destructure the request body to get id
  const { id } = req.body;
  try {
    // Delete the journal entry with the provided id
    const deletedEntry = await deleteEntry(id);
    // Return a 200 status with the deleted entry object
    res.status(200).json(deletedEntry);
  } catch (error: any) {
    // If an error occurs, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};
