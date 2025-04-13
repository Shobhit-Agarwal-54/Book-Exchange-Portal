'use client'

import { useEffect} from 'react';
import Link from 'next/link';
import {  useRouter } from 'next/navigation';
import { esES } from '@mui/material/locale';

export default function AlreadyLoggedIn() 
{
  const router=useRouter();
  useEffect(()=>{
   const res= localStorage.getItem("user");
   if(res)
   {
    const data=JSON.parse(res);
    if(data.role=="OWNER")
    router.push("/owner");
    else
    router.push("/seeker");
   }
   else
   router.push("/");
  },[]);  
}