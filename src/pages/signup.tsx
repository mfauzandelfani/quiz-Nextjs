/* eslint-disable @next/next/no-html-link-for-pages */
import { UserSignupRequest } from "./redux-saga/action/userAction";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      start: "",
      udate: "",
    },
    onSubmit: async (values) => {
      let payload = {
        username: values.username,
        password: values.password,
        start: values.start,
        udate: values.udate,
      };
      dispatch(UserSignupRequest(payload));
    
      router.push("/signin");
     
    },
  });
  return (
    <div>
      <div className="bg-white sm:bg-gray-200 min-h-screen w-screen flex flex-col justify-center items-center text-black">
        <div className="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8">
          <div className="text-center w-full font-bold text-3xl p-4">
            SIGN-UP
          </div>
          <div className="w-full bg-gray-200 my-3 style=height: 1px"></div>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-4 px-0 py-4">
              <div>
                <label className="text-gray-700">Username</label>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  placeholder="username"
                  name="username"
                  id="username"
                  type="text"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label className="text-gray-700">Password</label>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  placeholder="Password"
                  name="password"
                  id="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>

              <div>
                <label className="text-gray-700">Createat</label>

                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  placeholder="Createat"
                  type="date"
                  id="start"
                  name="start"
                  value={formik.values.start}
                  onChange={formik.handleChange}
                />
              </div>

              <div>
                <label className="text-gray-700">Updateat</label>

                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  placeholder="Updateat"
                  type="date"
                  id="udate"
                  name="udate"
                  value={formik.values.udate}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full flex flex-row gap-2">
                <button className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-0 flex flex-row justify-center items-center gap-1">
                  <a href="/signin">Login</a>
                </button>

                <button
                  className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-2 flex flex-row justify-center items-center gap-1"
                  type="submit"
                >
                  Sign-up
                </button>
              </div>
              <div className="my-2 flex flex-row justify-center">
                <span className="absolute bg-white px-4">or</span>
                <div className="w-full bg-gray-200 mt-3 style=height: 1px"></div>
              </div>

              <div className="w-full flex flex-row justify-end">
                <a href="#">Forgot password</a>
              </div>
            </div>
          </form>
        </div>
        <div className="p-4 text-black">© Code Academy</div>
      </div>
    </div>
  );
}
