"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '@/actions/user';

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    role: 'OWNER',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => 
    {
    e.preventDefault();
    try {
        setLoading(true);
        const res= await createUser(formData);
      if (res.message=="Ok") {
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
        if (formData.role === 'OWNER') {
          router.push('/owner');
        } else {
          router.push('/seeker');
        }
      } 
    } catch (error) {
        console.log(error);
        alert(error.message);
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
        <h2 className="text-xl font-bold">Create Profile</h2>

        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" required />

        <select name="role" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="OWNER">Book Owner</option>
          <option value="SEEKER">Book Seeker</option>
        </select>

        <button disabled={loading}
        type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
}
