"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";
import axios from "axios";

const MainPage = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("sihmail");

    if (!email) {
      router.push("/login");
    }

    const fetchUserDetails = async () => {
      const response = await axios.get(`/api/login?email=${email}`);
      setUsername((response.data as { name: string }).name);
    };
    fetchUserDetails();
  }, []);

  return (
    <>
      <Navbar />
      <section className="flex flex-col gap-6 lg:py-16">
        <div className="col-span-1 sm:col-span-5 flex justify-center items-center mt-8 sm:mt-0 bg-transparent">
          <Image
            src="https://envs.sh/1rN.png"
            alt="College Image"
            width={350}
            height={350}
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-span-1 sm:col-span-7 place-self-center text-justify sm:text-left justify-self-start px-6 sm:px-12"
          >
            <h1 className="text-white mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-red-500">
                Welcome, <br />
                {username}
              </span>
              <br />
              <TypeAnimation
                className="text-black font-semibold"
                sequence={["To Amal Jyothi ", 3000, "Hack for India", 3000]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </h1>
            <p className="text-black text-base sm:text-lg mb-6 lg:text-xl leading-relaxed">
              Amal Jyothi College of Engineering is proud to host the Smart
              India Hackathon 2024 Hardware Edition. This prestigious event
              brings together the brightest minds from across the country to
              solve real-world hardware challenges through innovation and
              creativity. Participants will have the opportunity to work on
              cutting-edge technologies and present their solutions to industry
              experts.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="https://envs.sh/1r2.png"
            alt="End Image"
            width={250}
            height={250}
            className="rounded-full shadow-2xl object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>
      <div className="flex flex-col justify-center items-center text-center ">
        <p className="text-black text-2xl font-bold leading-relaxed">
          Host Institute
        </p>
        <span className="text-gray-400 text-base text-center">
          Amal Jyothi College Of Engineering, kanjirappally
        </span>
      </div>
    </>
  );
};

export default MainPage;
