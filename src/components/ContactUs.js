"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Map from "./Map";
import Link from "next/link";
import Sidebar from "./Sidebar";
const ContactUs = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="flex flex-col justify-center items-center  font-Oswald text-xl">
      <h1 id="Contact" className="text-navy">
        Contact us here!
      </h1>
      <div className="flex md:flex-row flex-col px-4 justify-center gap-10 items-center">
        <Sidebar />
        {/* CONTACT FORM */}
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/wael.business@outlook.com"
          method="POST"
        >
          <div className="flex md:flex-row flex-col justify-center items-center  gap-2 ">
            <div className="w-full flex flex-col gap-5">
              <input
                className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
                type="text"
                placeholder="Name."
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className=" text-lavender font-semibold ">
                  {errors.name.type === "required" &&
                    "**This field is required."}
                  {errors.name.type === "maxLength" &&
                    "**Max length is 100 characters."}
                </p>
              )}
            </div>

            <div className="w-full flex flex-col gap-5">
              <input
                className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
                type="text"
                placeholder="Phone Number."
                {...register("phone", {
                  required: true,
                  pattern: /^(0|\+61)[0-9]{9}$/,
                })}
              />
              {errors.email && (
                <p className=" text-lavender font-semibold ">
                  {errors.phone.type === "required" &&
                    "**This field is required."}
                  {errors.phone.type === "pattern" &&
                    "**Invalid email address."}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 mt-5">
            <input
              className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
              type="text"
              placeholder="Email."
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className=" text-lavender font-semibold ">
                {errors.email.type === "required" &&
                  "**This field is required."}
                {errors.email.type === "pattern" && "**Invalid email address."}
              </p>
            )}
          </div>

          <div className="mt-5 gap-5 flex flex-col">
            <textarea
              className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
              type="text"
              placeholder="Enter your message."
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
              })}
            />
            {errors.message && (
              <p className=" text-lavender font-semibold ">
                {errors.message.type === "required" &&
                  "**This field is required."}
              </p>
            )}
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-navy py-2 px-7 rounded-lg mt-2 "
            >
              <p>Submit</p>
            </button>
          </div>
        </form>
      </div>
      <Map />
    </section>
  );
};

export default ContactUs;
