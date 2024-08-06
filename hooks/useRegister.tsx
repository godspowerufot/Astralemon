// hooks/useRegister.ts
'use client'
import { useState } from "react";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (formData: {
    username: string;
    email: string;
    password: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://52.91.135.209:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.json(); // Read response as text

      if (!response.ok) {
        throw new Error(`Registration failed: ${text}`);
      }

      console.log("Registration successful", text);
      return text;
    } catch (error: any) {
      console.error("Error:", error);
      setError(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};

export default useRegister;
