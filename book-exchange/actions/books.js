"use server";
import {db} from "@/lib/prisma";
export async function createbook(data)
{
    const {title,author,genre,location,contact,ownerId}=data;4
    try {
        const newbook= await db.book.create({
             data:{title,author,genre,location,contact,ownerId}
         });
         return {message:"Success",book:newbook}
    } catch (error) {
        console.log(error);
    throw error;
    }
}

export async function getAllBooks()
{
    try {
        const books=await db.book.findMany();
        return books;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch books from database");
    }
}