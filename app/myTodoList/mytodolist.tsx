"use client";

import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Mytodolist() {
  const { isLoading, error, data, refetch } = useQuery<any, Error>({
    queryKey: ["todoData"],
    queryFn: async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/1");
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    },
  });

  if (isLoading) {
    // Return a loading indicator, e.g., a spinner or a message
    return <div>Loading...</div>;
  }

  if (error) {
    // Return an error message and a retry button
    return (
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p>An error has occurred: {error.message}</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }
  // Check if data is an object before mapping and displaying
  if (typeof data === "object" && data !== null) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Fetch Data With Tanstack and Axios</h1>
        <ul  className="text-2xl font-bold mb-4">
          {Object.entries(data).map(([key, value]) => (
            <li className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"
              key={key}
              
            >
              <span>
                
                <strong className="text-blue-500">{key}:</strong> {String(value)}
              </span>

              <h2  >{`Name: ${data.title}`}</h2>
              <h3>{`Title: ${data.brand}`}</h3>
              <p>{`Product: ${data.price}`}</p>
            </li>
          ))}
        </ul>
        <br></br>
        <div className="mt-4">
        <button   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"   onClick={() => refetch()  }>Retry</button>
        </div>
      </div>
    );
  }

  return null;
}

export default Mytodolist;
