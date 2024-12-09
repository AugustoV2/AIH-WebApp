"use client";
import React from "react";
import { Form, Input, Button, Card } from "@nextui-org/react";
import axios from "axios";

export default function App() {
  const [action, setAction] = React.useState<string | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Check if it's the first visit by checking localStorage for the 'visited' flag
    const isFirstVisit = localStorage.getItem("visited") === null;

    if (isFirstVisit) {
      // Clear the localStorage for first-time visitors
      localStorage.clear();
      // Set a flag in localStorage indicating that the user has visited
      localStorage.setItem("visited", "true");
    }

    if (action === "login-success") {
      window.location.href = "/"; // Redirect to dashboard on success
    }
  }, [action]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement));

    try {
      // POST request to login API
      const response = await axios.post("/api/login", formData);

      if (response.status === 200) {
        setAction("login-success");
        localStorage.setItem("email", formData.email as string);
      } else if (response.status === 404) {
        const data = response.data as { error?: string };
        setErrorMessage(data.error || "Login failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    
    <div
      className="relative flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: "url('https://envs.sh/1k8.png')", // Main background image
        
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlapping image */}
      <div
        className="absolute top-0 left-0 w-full h-1/3"
        style={{
          backgroundImage: "url('https://envs.sh/1ky.png')", // Replace with the overlapping image URL
          backgroundSize: "50%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Login card */}
      <Card
        className="w-full max-w-md p-6 shadow-lg"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "12px",
          zIndex: 10,
           marginTop: "250px",
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl font-bold text-black ">Login</h1>
            <Form
            className="flex flex-col gap-4 w-full "
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
              className="text-black"
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
            />

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <div className="flex gap-3 justify-center">
              <Button type="submit">Submit</Button>
              <Button type="reset" variant="flat">
              Reset
              </Button>
            </div>
            </Form>
        </div>
      </Card>
    </div>
  );
}
