import LoginPage from "@/modules/auth/login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login - Travel Pulse",
  description: "Generated by create next app",
};

export default function Login() {
  return <LoginPage />;
}
