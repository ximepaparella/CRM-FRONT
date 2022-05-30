/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title> CRM Admin Panel</title>
      </Head>

      {router.pathname === "/login" || router.pathname === "/register" ? (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center align-center">
          <div> {children}</div>
        </div>
      ) : (
        <div className="bg-gray-200 min-h-screen">
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="sm:w-2/3 xl:w-5/6 sm:min-h-screen p-5">
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
