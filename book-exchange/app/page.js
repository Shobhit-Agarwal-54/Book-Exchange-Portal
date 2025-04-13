import AddBook from "@/(components)/addBook";
import AlreadyLoggedIn from "@/(components)/alreadyLoggedIn";
import NavBar from "@/(components)/navbar";
import Login from "@/(components)/signin";
import Signup from "@/(components)/signup";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import Link from "next/link";
export default async function Home() {
  return (
    <>
      {/* <NavBar></NavBar> */}
      {/* <AddBook></AddBook> */}
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 text-blue-800">
              Book Exchange Portal
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Connect with others to exchange and rent books in your community
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link
                href="/register"
                className="btn btn-primary text-lg px-8 py-3"
              >
                Sign Up Now
              </Link>
              <Link
                href="/login"
                className="btn btn-secondary text-lg px-8 py-3"
              >
                Log In
              </Link>
            </div>

            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                  For Book Owners
                </h2>
                <p className="text-gray-600 mb-4">
                  Share your books with others by creating listings and
                  connecting with people who are looking for books like yours.
                </p>
                <ul className="text-left text-gray-700 space-y-2 mb-4">
                  <li>✓ List your available books</li>
                  <li>✓ Connect with potential readers</li>
                  <li>✓ Track the status of your books</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                  For Book Seekers
                </h2>
                <p className="text-gray-600 mb-4">
                  Find books you have been looking for by browsing listings and
                  connecting directly with book owners.
                </p>
                <ul className="text-left text-gray-700 space-y-2 mb-4">
                  <li>✓ Discover available books near you</li>
                  <li>✓ Filter by genre or location</li>
                  <li>✓ Contact owners directly</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                  How It Works
                </h2>
                <p className="text-gray-600 mb-4">
                  Our platform makes book exchanges simple and straightforward.
                </p>
                <ol className="text-left text-gray-700 space-y-2 mb-4">
                  <li>1. Create an account as an Owner or Seeker</li>
                  <li>2. Browse listings or create your own</li>
                  <li>3. Connect directly with other users</li>
                  <li>4. Exchange or rent books as agreed</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlreadyLoggedIn></AlreadyLoggedIn>
    </>
  );
}

// const users = await db.user.findMany();
// console.log("USers api called",users);
// return (
//   <div className="bg-red-500 font-bold">
//     <p>Book Exchange Portal</p>
//     <Button variant="secondary">Testing</Button>
//   </div>
// );
