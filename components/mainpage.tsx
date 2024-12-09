import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import router from 'next/router';
import axios from 'axios';

    

const mainpage = () => {
    const[username, setUsername] = useState("");


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
    <Navbar/>
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-1 sm:col-span-7 place-self-center text-center sm:text-left justify-self-start px-6 sm:px-12"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-red-600">
              Welcome, <br />
              {username}
            </span>
            <br />
            <TypeAnimation
              className="text-black font-semibold"
              sequence={[
                "To Amal Jyothi College ",
                10000,
                "Where Innovation Meets Excellence",
                10000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </h1>
          <p className="text-black text-base sm:text-lg mb-6 lg:text-xl leading-relaxed">
            Welcome to Amal Jyothi College of Engineering, Kerala’s one and only NAAC A++ grade engineering college. 
            Our college is a hub of innovation, education, and excellence. Join us to explore your potential and 
            make a difference in the world.
          </p>
          
        </motion.div>
        <div className="col-span-1 sm:col-span-5 flex justify-center sm:justify-end items-center mt-8 sm:mt-0 bg-transparent">
          <motion.div
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://envs.sh/1r2.png"
              alt="College Image"
              width={350}
              height={350}
              className="rounded-full shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}

export default mainpage;
