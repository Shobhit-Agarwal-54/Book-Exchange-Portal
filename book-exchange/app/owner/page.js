// import BookList from "@/(components)/bookList"
import AlreadyLoggedIn from "@/(components)/alreadyLoggedIn";
import ListAllBookDetails from "@/(components)/listBookDisplay"
import NavBar from "@/(components)/navbar"
import { getAllBooks } from "@/actions/books";

async function Owner() {

  return (
    <div>
      <AlreadyLoggedIn></AlreadyLoggedIn>
      <NavBar></NavBar>
      <div className="min-h-screen flex justify-center items-center">
      <ListAllBookDetails></ListAllBookDetails>
      </div>
    </div>
  )
}

export default Owner