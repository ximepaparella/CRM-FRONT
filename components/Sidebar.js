import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <aside className="bg-gray-800 sm:w-1/3 xl:w-1/6 sm:min-h-screen p-5">
        <div>
          <p className="text-white text-2xl font-light"> Dashboard CRM</p>
        </div>
        <nav className="mt-5 list-none">
          <li
            className={
              router.pathname === "/" ? "bg-gray-700 p-2 rounded-md" : "p-2"
            }
          >
            <Link href="/">
              <a className="text-white block">Clients</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/orders"
                ? "bg-gray-700 p-2 rounded-md"
                : "p-2"
            }
          >
            <Link href="/orders">
              <a className="text-white block">Orders</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/products"
                ? "bg-gray-700 p-2 rounded-md"
                : "p-2"
            }
          >
            <Link href="/products">
              <a className="text-white block">Products</a>
            </Link>
          </li>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
