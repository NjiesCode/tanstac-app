// api/auth.ts
import axios, { AxiosError, AxiosResponse } from 'axios';

// Define the ErrorResponse type
export interface ErrorResponse {
  message: string;
  // You can add other error properties as needed
}

// Define the login function
export const loginUser = async (
  credentials: { username: string; password: string }
): Promise<void> => {
  try {
    // Make an API request to log in the user
    // You can replace this with your actual login logic
    const response: AxiosResponse<any> = await axios.post('/api/login', credentials);

    // Handle the successful login response
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;

    if (axiosError.response) {
      const errorResponse: ErrorResponse = {
        message: axiosError.response.data.message || 'An error occurred',
      };
      throw errorResponse;
    } else {
      // Handle network errors, timeouts, etc.
      const networkError: ErrorResponse = {
        message: 'Network error',
      };
      throw networkError;
    }
  }
};

// Define the registration function (you already have this defined)
export const registerUser = async (
  userData: { username: string; password: string }
): Promise<void> => {
  try {
    // Make an API request to register the user
    // You can replace this with your actual registration logic
    const response: AxiosResponse<any> = await axios.post('/api/register', userData);

    // Handle the successful registration response
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;

    if (axiosError.response) {
      const errorResponse: ErrorResponse = {
        message: axiosError.response.data.message || 'An error occurred',
      };
      throw errorResponse;
    } else {
      // Handle network errors, timeouts, etc.
      const networkError: ErrorResponse = {
        message: 'Network error',
      };
      throw networkError;
    }
  }
};

