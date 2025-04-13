// app/books/new/page.jsx
'use client'

import { useState } from 'react';
// import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import NavBar from "./navbar";
import { createbook } from '@/actions/books';

export default function AddBook() { 
//   const { data: session, status } = useSession();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    location: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if not authenticated or not an owner
//   if (status === 'loading') {
//     return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
//   }

//   if (status === 'unauthenticated') {
//     router.push('/login');
//     return null;
//   }

//   if (session?.user?.userType !== 'OWNER') {
//     router.push('/dashboard');
//     return null;
//   }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.author || !formData.location) {
      setError('Title, author, and location are required');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const userString= localStorage.getItem("user");
      const user=JSON.parse(userString);
      const response = await createbook({...formData,
        contact:user.email,
        ownerId:user.id
      });

      if (response.error) {
        throw new Error('Failed to add book',response.error);
      }

      // Redirect to dashboard on success
      router.push('/owner');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Add a New Book</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
              <span>{error}</span>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <form
             onSubmit={handleSubmit}
             >
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Book Title*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="input"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="author" className="block text-gray-700 font-medium mb-2">Author*</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="input"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="genre" className="block text-gray-700 font-medium mb-2">Genre</label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  className="input"
                  value={formData.genre}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location*</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="input"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="City, Area"
                />
              </div>
              
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => router.back()}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Adding Book...' : 'Add Book'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}