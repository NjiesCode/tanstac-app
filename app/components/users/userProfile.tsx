// components/UserProfile.tsx
import React from 'react';
import { useQuery } from "@tanstack/react-query";

const UserProfile: React.FC = () => {
  const { data: user } = useQuery(['user'],() => {
    // Fetch user data here (e.g., from your API)
    return fetch('/api/user').then((response) => response.json());
  });

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Add more user data fields */}
    </div>
  );
};

export default UserProfile;
