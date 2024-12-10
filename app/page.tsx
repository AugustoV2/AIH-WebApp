"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Spinner } from "@nextui-org/react"; // Import Spinner
import Mainpage from "../components/mainpage";
import GoogleMap from "@/components/map";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";

const MainPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if 'sihmail' exists in localStorage
    const email = localStorage.getItem("sihmail");

    if (!email) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Spinner
            size="lg"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: "url(https://envs.sh/1Hi.webp)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <Mainpage />
      <Timeline />
      <GoogleMap />
      {/* <Contactus /> */}
      <Footer />
    </>
  );
};

export default MainPage;
