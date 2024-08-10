import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="bg-orange-400 text-white p-4 flex justify-center">
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">NextBasic App</h1>
            <ul className="inline-flex">
              <li className="px-3">
                <Link href="/">Overview</Link>
              </li>
              <li className="px-3">
                <Link href="/about">About</Link>
              </li>
              <li className="px-3">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}
