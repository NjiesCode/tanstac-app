import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const registrationMutation = useMutation<any, unknown, FormData>(
    async (newUser) => {
      const response = await axios.post("/api/register", newUser);
      return response.data;
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    registrationMutation.mutate(formData);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          disabled={registrationMutation.isLoading}
        >
          {registrationMutation.isLoading ? "Registering..." : "Register"}
        </button>
      </form>
      {registrationMutation.isError && (
        <p className="text-red-500 mt-2">
          {registrationMutation.error instanceof Error
            ? registrationMutation.error.message
            : "An error occurred"}
        </p>
      )}
      {registrationMutation.isSuccess && (
        <p className="text-green-500 mt-2">Registration successful!</p>
      )}
    </div>
  );
};

export default RegistrationForm;
