// Import necessary modules and functions from external libraries and local files
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Middleware function to authenticate JWT token
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  // Extract JWT token from Authorization header
  const token = req.header('Authorization')?.split(' ')[1];

  // Check if token exists
  if (!token) {
    // Return 401 Unauthorized if token is missing
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(token, 'jwtsecret0298176533789301') as { id: string };
    
    // Attach decoded user information to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Return 401 Unauthorized if token is invalid or expired
    res.status(401).json({ message: 'Token is not valid' });
  }
};
