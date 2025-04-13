"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkUser } from '@/actions/user';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await checkUser(formData);
      const user=res.user;
  
      if (res.message=="Ok") {
        const newuser={
          email:user.email,
          id:user.id,
          mobile:user.mobile,
          name:user.name,
          password:user.password,
          role:user.role
        };
        console.log(newuser);
        localStorage.setItem('user',JSON.stringify(
          {
            email:user.email,
            id:user.id,
            mobile:user.mobile,
            name:user.name,
            password:user.password,
            role:user.role
          })
        );

        if (user.role === 'OWNER') {
          router.push('/owner');
        } else {
          router.push('/seeker');
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <button disabled={loading}
         type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  );
}
