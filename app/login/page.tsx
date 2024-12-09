'use client';
import React from "react";
import { Form, Input, Button, Card } from "@nextui-org/react";
import axios from "axios";

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
    const formData = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement));

    try {
      const response = await axios.post("/api/login", formData);

      if (response.status === 200) {
        setAction("login-success");
        localStorage.setItem("sihmail", formData.email as string);
      } else if (response.status === 404) {
        const data = response.data as { error?: string };
        setErrorMessage(data.error || "Login failed");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
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
      <div
        className="absolute top-0 left-0 w-full h-1/3 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://envs.sh/1rN.png')",
          backgroundSize: "100%", 
        }}
      >
        
        <div
          className="lg:bg-[40%]"
          style={{
            backgroundSize: "100%", 
          }}
        />
      </div>

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

            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 justify-center ">
              <Button type="submit" className="w-full sm:w-auto bg-black text-white">Submit</Button>
              <Button type="reset" variant="flat" className="w-full sm:w-auto  bg-black text-white">Reset</Button>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  );
}
