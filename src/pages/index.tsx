import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import React from "react";
import { Fragment, useEffect } from "react";
import { UserSignoutRequest } from "@/pages/redux-saga/action/userAction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const { UserProfile } = useSelector((state: any) => state.userState);
  const router = useRouter();
  const logout = () => {
    dispatch(UserSignoutRequest());
    router.reload();
  };
  return (
    <div>
      <Layout>
        <div className="flex flex-col items-center justify-center px-6 py-8">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <center>Welcome In The Dashboard</center>
              </h1>

              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
