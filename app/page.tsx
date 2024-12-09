"use client"
import React, { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import Mainpage from "../components/mainpage";
import Login from "./login/page";
import GoogleMap from "@/components/map";
import { Navbar } from "@nextui-org/react";
import Timeline from "@/components/timeline";
import Contactus from "./contactus/page";


const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the 'email' exists in localStorage
    const email = localStorage.getItem("sihmail");

    if (!email) {
     
      router.push("/login");
    }
    

  }, []);

  return (
    <>
      {/* <Login /> */}
   
      <Mainpage />
      <Timeline/>
      <GoogleMap />
      {/* <Contactus/> */}
    </>
  );
};

export default MainPage;
