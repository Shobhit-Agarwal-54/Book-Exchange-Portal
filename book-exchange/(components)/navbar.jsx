'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function NavBar() {
//   const { data: session } = useSession();
  const [user,setUser]=useState({});
    useEffect(()=>{
      const userString= localStorage.getItem("user");
      setUser(JSON.parse(userString));
    },[]);

  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut =  () => {
    if (typeof window !== 'undefined') {
    localStorage.removeItem("user");
   router.push('/');
    }
  };

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href={user.role === 'OWNER' ?"/owner":"/seeker"}
          className="text-xl font-bold">
            Book Exchange
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">

            {
             user.role=== 'OWNER'
             &&
              (
              <Link href="/addbook" className="px-3 py-2 rounded hover:bg-blue-700">
                Add Book
              </Link>
            )}
            <button
              onClick={handleSignOut}
              className="px-3 py-2 rounded hover:bg-blue-700"
            >
              Sign Out
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}