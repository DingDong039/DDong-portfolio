import Link from "next/link";
import React from "react";
import { FaGithub,FaLinkedin  } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="bg-orange-400 text-white p-4">
        <div className="container mx-auto">
          <ul className="font-normal text-sm">
            <li>
              <Link href="/">Overview</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
              <a href="https://github.com/DingDong039" target="_blank"><FaGithub className="hover:bg-slate-300"/></a>
              <a href="https://www.linkedin.com/in/watchara-tongyodpun-803866313" target="_blank"><FaLinkedin className="hover:bg-slate-300"/></a>
            </li>
          </ul>
          <p className="text-xs flex justify-center">Copyright &copy; {new Date().getFullYear()}  All rights reserved. By Watchara Tongyodpun</p>
        </div>
      </footer>
    </>
  );
}
