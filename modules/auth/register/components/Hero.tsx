"use client";
import Breakline from "@/common/components/elements/Breakline";
import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Hero() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showconfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handlePasswordClick = () => setShowPassword(!showPassword);
  const handleConfirmPasswordClick = () =>
    setShowConfirmPassword(!showconfirmPassword);

  return (
    <section className="flex w-full min-h-screen">
      <div
        className="w-1/2 h-screen object-fit md:block hidden"
        style={{
          backgroundImage: "url('/hero-register.png')",
          backgroundPosition: "top, center",
        }}
      ></div>
      <div className="md:w-1/2 w-full h-screen flex items-center justify-center md:px-16 px-5 md:pt-10 pt-20">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2 justify-center items-start">
            <h1 className="font-bold text-3xl">Hi, Get Started Now 👋</h1>
            <p className="text-lg text-neutral-700">
              Enter details to create your Travel Pulse account
            </p>
          </div>
          <Button
            colorScheme="gray"
            variant={"outline"}
            rounded={"full"}
            size={"lg"}
            className="flex gap-2 w-full"
          >
            <FcGoogle />
            Continue With Google
          </Button>
          <div className="flex gap-2 items-center justify-center">
            <Breakline className="border-neutral-400 w-full" />
            <p className="text-lg text-neutral-700 font-medium">or</p>
            <Breakline className="border-neutral-400 w-full" />
          </div>
          <div className="flex flex-col space-y-5 font-semibold">
            <Input variant="flushed" type="text" placeholder="Full Name" />
            <Input variant="flushed" type="email" placeholder="Email Address" />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                variant="flushed"
              />
              <InputRightElement width="4.5rem">
                {showPassword ? (
                  <FaEyeSlash
                    onClick={handlePasswordClick}
                    className="cursor-pointer active:text-neutral-900 text-neutral-500"
                  />
                ) : (
                  <FaEye
                    onClick={handlePasswordClick}
                    className="cursor-pointer active:text-neutral-900 text-neutral-500"
                  />
                )}
              </InputRightElement>
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showconfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                variant="flushed"
              />
              <InputRightElement width="4.5rem">
                {showconfirmPassword ? (
                  <FaEyeSlash
                    onClick={handleConfirmPasswordClick}
                    className="cursor-pointer active:text-neutral-900 text-neutral-500"
                  />
                ) : (
                  <FaEye
                    onClick={handleConfirmPasswordClick}
                    className="cursor-pointer active:text-neutral-900 text-neutral-500"
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </div>
          <div className="flex flex-col space-y-3 pt-5">
            <Button colorScheme="messenger" variant={"solid"} rounded={"full"}>
              Sign Up
            </Button>
            <p className="text-lg font-medium">
              Already have an account?{" "}
              <Button variant={"link"} colorScheme="messenger">
                <Link href={"/login"} aria-label="Log In">
                  Sign in to account
                </Link>
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
