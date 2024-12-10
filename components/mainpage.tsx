"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import Modal from "react-modal";

const mainpage = () => {
  const [username, setUsername] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mapImage, setMapImage] = useState("");
  const router = useRouter();

  const openMapModal = (imageUrl: string) => {
    setMapImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeMapModal = () => {
    setModalIsOpen(false);
    setMapImage("");
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("aria-hidden", "true");
    } else {
      document.body.style.overflow = "";
      document.body.removeAttribute("aria-hidden");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("aria-hidden");
    };
  }, [modalIsOpen]);

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
                sequence={["To AJCE ", 10000]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </h1>
            <p className="text-black text-base sm:text-lg mb-6 lg:text-xl leading-relaxed">
              <b className="size-11"> NC044</b> <br />
              Amal Jyothi College of Engineering: SIH Finale 2024 The Smart
              India Hackathon 2024 Finale is a prestigious event where
              shortlisted teams compete to solve real-world challenges through
              innovation and creativity.
            </p>
          </motion.div>
          <div className="col-span-1 sm:col-span-5 flex justify-center sm:justify-end items-center mt-8 sm:mt-0 bg-transparent">
            <Image
              src="https://envs.sh/1rN.png"
              alt="College Image"
              width={350}
              height={350}
              className="shadow-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
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
      <div className="flex justify-center items-center ">
        <p className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed">
          Host Institute
        </p>
      </div>

      <section className="py-16 overflow-x-auto px-4">
        <div className="flex gap-8 min-w-max">
          <div className="flex flex-col items-center">
            <Image
              src="https://envs.sh/1UZ.jpg"
              alt="Map Image 1"
              width={200}
              height={200}
              className="cursor-pointer shadow-lg hover:scale-105 transition-all"
              onClick={() => openMapModal("https://envs.sh/1UZ.jpg")}
              loading="lazy"
            />
            <span className="text-black mt-2">Map 1</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://envs.sh/1U5.jpg"
              alt="Map Image 2"
              width={200}
              height={200}
              className="cursor-pointer shadow-lg hover:scale-105 transition-all"
              onClick={() => openMapModal("https://envs.sh/1U5.jpg")}
              loading="lazy"
            />
            <span className="text-black mt-2">Map 2</span>
          </div>
        </div>
      </section>

      {modalIsOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-full h-full max-w-full max-h-full overflow-auto flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center">
              <div className="relative w-full h-full max-w-[90%] max-h-[90%]">
                <h2 className="text-center text-2xl font-bold mb-4 absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                  Map
                </h2>
                <Image
                  src={mapImage}
                  alt="Map"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl shadow-lg"
                  loading="lazy" // Add lazy loading here
                />
                <div className="flex justify-center mt-4 z-10 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button
                    onClick={closeMapModal}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                  >
                    Close Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default mainpage;
