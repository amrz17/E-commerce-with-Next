"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import { navLink } from "../constant";
import Link from "next/link";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex-row absolute right-0 bg-white h-screen w-3/5 list-none">
      <div className="absolute right-0 mr-4">
        <button>
          <X />
        </button>
      </div>
      <ul className="ml-8 mt-12 text-xl">
        {navLink.map((link) => (
          <li key={link.label} className="py-5">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
