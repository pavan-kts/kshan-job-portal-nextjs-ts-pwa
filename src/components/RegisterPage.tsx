"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [error, setError] = useState<string>('');

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value,
      };
      if(updatedFormData.confirmpassword || !updatedFormData.password){

        if (updatedFormData.password === updatedFormData.confirmpassword) {
          setError('');
        } else {
          setError('Passwords did not match');
        }
      }
      return updatedFormData;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmpassword) {
      return;
    }

    console.log('firstname : ' + formData.firstname);
    console.log('lastname : ' + formData.lastname);
    console.log('Email : ' + formData.email);
    console.log('Password : ' + formData.password);
    console.log('confirmpassword : ' + formData.confirmpassword);
    console.log(`User registered successfully. Thank you ${formData.firstname}`);
    alert(`User registered successfully. Thank you ${formData.firstname}`);
    router.push('/signin');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 dark:text-gray-200 flex flex-col items-center justify-center p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="mb-4 w-full">
          <input
            type="text"
            name="firstname"
            placeholder="Enter your Firstname"
            onChange={handleInputChange}
            value={formData.firstname}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-gray-200"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <input
            type="text"
            name="lastname"
            placeholder="Enter your Lastname"
            onChange={handleInputChange}
            value={formData.lastname}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-gray-200"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            value={formData.email}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-gray-200"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            value={formData.password}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-gray-200"
            required
          />
        </div>
        <div className="mb-6 w-full">
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm your password"
            onChange={handleInputChange}
            value={formData.confirmpassword}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-gray-200"
            required
          />
          {error && <p className="text-red-700 w-full text-left pl-1 font-semibold">{error}</p>}
        </div>
        <button
          type="submit"
          className="py-2 bg-blue-500 text-white px-5 font-semibold rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-800 w-full max-w-sm"
        >
          Sign up
        </button>
        <Link
          href="/signin"
          className="inline-block my-2 text-center rounded-lg text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
        >
          Already registered? Sign in here
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
