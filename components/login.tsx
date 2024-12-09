'use client';
import React from "react";
import { Form, Input, Button, Card } from "@nextui-org/react";
import axios from "axios";

export default function App() {
  const [action, setAction] = React.useState<string | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  
  React.useEffect(() => {
    if (action) {
      if (action === 'login-success') {
       
        window.location.href = "/dashboard";  
      }
    }
  }, [action]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement));

    try {
      const response = await axios.post('../app/api/login', data);
      const responseData: { message?: string } = response.data as { message?: string };
      
      if (response.status === 200) {
      
        setAction('login-success');
      } else {
        
        setErrorMessage(responseData.message || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };


  const disableSideBarIfFormIsNotFilled = async () => {
    try {
      interface UserData {
        isFormFilled: boolean;
      }

      const res = await axios.get<UserData>('/api/data/user', {
        params: { email: localStorage.getItem("email") }
      });

      if (res.data && res.data.isFormFilled === false) {
        
        console.log("Form not filled. Disabling sidebar.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  React.useEffect(() => {
    disableSideBarIfFormIsNotFilled();
  }, []); 
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl font-bold">Login</h1>
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
            />

            <Input
              isRequired
              errorMessage="Please enter a valid password"
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your password"
              type="password"
            />

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <div className="flex gap-3 justify-center">
              <Button color="primary" type="submit">
                Submit
              </Button>
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
