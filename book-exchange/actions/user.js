"use server";
import {db} from "@/lib/prisma";
export async function createUser(data)
{
    const { name, mobile, email, password, role } = data;
    try {
        const existingUser = await db.user.findUnique({ where: { email } });

        if(existingUser)
        throw new Error("User with the given email already exists");

        const newUser = await db.user.create({
        data: { name, mobile, email, password, role },
        });
        return {user:newUser,message:"Ok"};

    } catch (error) 
    {
        console.log(error);
        throw error;    
    }
}

export async function checkUser(data)
{
    const { email, password } = data;
    try {
        const existingUser = await db.user.findUnique({ where: { email } });
        if(!existingUser)
        throw new Error("User does not exist");
        else if(existingUser.password==password)
        {
            return {user:existingUser,message:"Ok"};
        }
        else
        {
            throw {error:"Wrong Password"};
        }    

    } catch (error) 
    {
        throw error;    
    }
}