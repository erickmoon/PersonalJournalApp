// Import necessary modules from npm packages and local files
import express from 'express';      // Import Express framework for building web applications
import bodyParser from 'body-parser'; // Import bodyParser middleware for parsing incoming request bodies
import cors from 'cors';            // Import CORS middleware for enabling Cross-Origin Resource Sharing
import authRoutes from './routes/auth';   // Import authentication routes
import journalRoutes from './routes/journal'; // Import journal routes

// Initialize Express application
const app = express();
// Define the port number from environment variable or default to 5002
const PORT = process.env.PORT || 5002;

// Middleware to enable CORS for all routes
app.use(cors());
// Middleware to parse JSON bodies of incoming requests
app.use(bodyParser.json());

// Mount authentication routes under /api/auth path
app.use('/api/auth', authRoutes);
// Mount journal routes under /api/journal path
app.use('/api/journal', journalRoutes);

// Start the Express server and listen on defined port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log a message indicating server startup and port
});
