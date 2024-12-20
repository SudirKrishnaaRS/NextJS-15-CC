"use client";
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

// Data fetching in Client Components (Same old convention)
// Just don't forget to add "use client"
const UsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users" + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li
          className="p-4 bg-white shadow-sm rounded-lg text-gray-700"
          key={user.id}
        >
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UsersClient;
