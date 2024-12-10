"use client";
import React from "react";
import { Form, Input, Button, Card } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image"; // Updated import for image optimization

export default function App() {
  const [action, setAction] = React.useState<string | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const isFirstVisit = localStorage.getItem("visited") === null;

    if (isFirstVisit) {
      localStorage.clear();
      localStorage.setItem("visited", "true");
    }

    if (action === "login-success") {
      window.location.href = "/";
    }
  }, [action]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget as HTMLFormElement),
    );

    try {
      const response = await axios.post("/api/login", formData);

      if (response.status === 200) {
        setAction("login-success");
        localStorage.setItem("sihmail", formData.email as string);
        setErrorMessage(null); // Clear any previous error
      }
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status other than 2xx
        if (error.response.status === 404) {
          setErrorMessage(
            "User not found. Please check your email and try again.",
          );
        } else if (error.response.status === 401) {
          setErrorMessage("Invalid password. Please try again.");
        } else {
          setErrorMessage("Login failed. Please try again later.");
        }
      } else if (error.request) {
        // Request was made, but no response received
        setErrorMessage(
          "Unable to connect to the server. Please check your internet connection.",
        );
      } else {
        // Other errors
        setErrorMessage("An unexpected error occurred. Please try again.");
      }

      console.error("Login error:", error);
    }
  };

  return (
    <div
      className="relative flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: "url('https://envs.sh/1k8.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Banner for Mobile */}
      <div
        className="absolute top-0 left-0 w-full h-1/3 bg-center bg-no-repeat sm:hidden"
        style={{
          backgroundImage: "url('https://envs.sh/1rN.png')",
          backgroundSize: "50%",
        }}
      >
        {/* Mobile Text Overlay */}
        <div className="absolute inset-x-0 top-full -mt-20 flex flex-col justify-center items-center">
          <h1
            className="text-black text-lg sm:text-xl font-bold text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            11 - 15 December 2024,
            <br /> Amal Jyothi College of Engineering
          </h1>
        </div>
      </div>

      {/* Desktop Banner */}
      <div className="hidden sm:flex flex-col items-center absolute top-0 left-0 w-full h-auto p-6">
        <Image
          src="https://envs.sh/1rN.png"
          alt="Event Logo"
          className="h-20 w-auto mb-4"
          width={320} // Added width and height for optimization
          height={80}
        />
        <h1
          className="text-black text-xl md:text-2xl lg:text-3xl font-bold text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          11 - 15 December 2024
          <br /> Amal Jyothi College of Engineering
        </h1>
      </div>

      {/* Login Form */}
      <Card
        className="w-full max-w-md p-6 shadow-lg"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "12px",
          zIndex: 10,
          marginTop: "100px",
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl font-bold text-black">Login</h1>
          <Form
            className="flex flex-col gap-4 w-full"
            validationBehavior="native"
            onReset={() => setAction("reset")}
            onSubmit={handleSubmit}
          >
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              className="text-xl font-bold"
              style={{
                color: "black",
                backgroundColor: "white",
              }}
            />

            <Input
              isRequired
              errorMessage="Please enter a valid password"
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your password"
              type="password"
              className="text-black"
              style={{
                color: "black",
                backgroundColor: "white",
              }}
            />

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 justify-center ">
              <Button
                type="submit"
                className="w-full sm:w-auto bg-black text-white"
              >
                Submit
              </Button>
              <Button
                type="reset"
                variant="flat"
                className="w-full sm:w-auto bg-black text-white"
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  );
}
