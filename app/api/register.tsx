// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Simulate user registration logic
    const { username, email, password } = req.body;

    // Check if the username or email is already taken (replace this with your own logic)
    const userExists = await checkIfUserExists(username, email);

    if (userExists) {
      return res.status(400).json({ message: 'Username or email is already taken.' });
    }

    // If the username and email are not taken, you can create a user account here
    // For this example, we'll return a success message
    return res.status(200).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ message: 'An error occurred during registration.' });
  }
}

// Simulated function to check if a user with the same username or email already exists
async function checkIfUserExists(username: string, email: string) {
  // Replace this with your actual user lookup logic (e.g., querying a database)
  // For this example, we'll assume no user with the same username or email exists
  return false;
}
