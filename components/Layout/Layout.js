/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title> CRM Admin Panel</title>
      </Head>

      {router.pathname === "/login" || router.pathname === "/register" ? (
        <div className="flex flex-col justify-center min-h-screen bg-gray-800 align-center">
          <div> {children}</div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-200">
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="p-5 sm:w-2/3 xl:w-5/6 sm:min-h-screen">
              <Header />
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
