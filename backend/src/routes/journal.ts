// Import Router from express to create route handlers
import { Router } from 'express';
// Import register and login controller functions from ../controllers/auth
import { register, login } from '../controllers/auth';

// Create a new Router instance
const router = Router();

// Define routes for user registration and login
router.post('/register', register); // POST request to /register triggers the register function from ../controllers/auth
router.post('/login', login);       // POST request to /login triggers the login function from ../controllers/auth

// Export the router to be used by the application
export default router;
