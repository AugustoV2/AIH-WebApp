"use client"
import React, { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import Mainpage from "../components/mainpage";
import Login from "./login/page";
import GoogleMap from "@/components/map";


const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the 'email' exists in localStorage
    const email = localStorage.getItem("sihmail");

    if (!email) {
      // If 'email' is not found in localStorage, redirect to login page
      router.push("/login");
    }
    

  }, []);

  return (
    <>
      <Mainpage />
      <GoogleMap />
      {/*   */}
    </>
  );
};

export default MainPage;
