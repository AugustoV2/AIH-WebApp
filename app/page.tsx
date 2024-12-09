"use client"
import React, { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import Mainpage from "../components/mainpage";
import Login from "./login/page";
import { Navbar } from "@nextui-org/react";


const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
   
    const email = localStorage.getItem("email");

    if (!email) {
     
      router.push("/login");
    }
  }, []);

  return (
    <>
      {/* <Login /> */}
   
      <Mainpage />
      
    </>
  );
};

export default MainPage;
