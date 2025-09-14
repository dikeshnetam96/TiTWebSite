'use client';

import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', { name, email });
      console.log('User created:', response.data);
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Create User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            placeholder="Enter Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)} // ✅ was incorrectly setting name
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            placeholder="Enter Email"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 cursor-pointer text-sm md:text-base w-full md:w-auto min-w-[140px] whitespace-nowrap hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
