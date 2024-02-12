import Breakline from "@/common/components/elements/Breakline";
import { Button, Checkbox, Input } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Hero() {
  return (
    <section className="flex w-full min-h-screen">
      <div
        className="w-1/2 h-screen bg-center object-fit md:block hidden"
        style={{ backgroundImage: "url('/hero-login.png')" }}
      ></div>
      <div className="md:w-1/2 w-full h-screen flex items-center justify-center md:px-16 px-5 md:pt-10 pt-20">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col space-y-2 justify-center items-start">
            <h1 className="font-bold text-3xl">Welcome Back, Jonathan 👋</h1>
            <p className="text-lg text-neutral-700">
              Continue with Google or Enter Login Details
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
          <div className="flex flex-col space-y-5">
            <Input variant="flushed" type="email" placeholder="Email Address" />
            <Input variant="flushed" type="password" placeholder="Password" />
            <div className="flex justify-between items-center">
              <Checkbox>Remember Me</Checkbox>
              <Button colorScheme="messenger" variant={"link"}>
                Forgot Password?
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Button colorScheme="messenger" variant={"solid"} rounded={"full"}>
              Log In
            </Button>
            <p className="text-lg font-medium">
              Don’t have an account yet?{" "}
              <Button variant={"link"} colorScheme="messenger">
                <Link href={"/sign-up"} aria-label="Sign-Up">
                  Create account
                </Link>
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
