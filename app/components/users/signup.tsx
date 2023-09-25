"use client"
// components/Signup.tsx
import { ErrorResponse, registerUser } from '../../api/auth';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Signup: React.FC = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const mutation = useMutation<void, ErrorResponse, { username: string; password: string }>(
    registerUser, // Create a registerUser function similar to loginUser
    {
      onMutate: () => {
        // Clear any previous error messages
        queryClient.setQueryData(['user'], null);
      },
      onSuccess: () => {
        // Handle successful registration, e.g., redirect to login page
        // You can add your own logic here
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24"> 
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </div>
  );
};

export default Signup;
