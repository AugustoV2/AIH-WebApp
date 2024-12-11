"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/react";
import Mainpage from "../components/mainpage";
import GoogleMap from "@/components/map";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";
import Image from "next/image";

const MainPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      {/* <Footer /> */}
      <Mainpage />
      <Timeline />
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 py-16 px-6 lg:px-24">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="https://envs.sh/1UZ.jpg"
              alt="Map Image 1"
              width={350}
              height={350}
              className="shadow-lg hover:scale-105 transition-all w-full rounded-2xl"
              loading="lazy"
              quality={100}
            />
            <span className="text-black mt-2 block text-center">
              College Map
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              src="https://envs.sh/1U5.jpg"
              alt="Map Image 2"
              width={350}
              height={350}
              className="shadow-lg hover:scale-105 transition-all w-full rounded-2xl"
              loading="lazy"
              quality={100}
            />
            <span className="text-black mt-2 block text-center">Route Map</span>
          </div>
        </div>
      </section>{" "}
      <GoogleMap />
      <Footer />
      {/* <Contactus /> */}
    </>
  );
};

export default MainPage;
