import React from "react";
import { navLink } from "../constant";
import Link from "next/link";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full absolute p-4 md:p-4 border border-black">
      <nav className="flex gap-6 bg-white p-4 w-full justify-center md:gap-14 items-center">
        <div className="flex gap-4 md:gap-6">
          <button className="lg:hidden">
            <Menu size={35} />
          </button>
          <Link href="/" className="text-3xl md:text-4xl font-extrabold">
            SHOP.CO
          </Link>{" "}
        </div>
        <div className="hidden lg:flex">
          <ul className="flex flex-row gap-8">
            {navLink.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex rounded-full items-center lg:w-[35rem]
          bg-none md:bg-gray-200 "
        >
          <button type="submit" className="p-2 hidden md:flex">
            <Search className="text-black md:text-gray-600" />
          </button>
          <input
            type="text"
            placeholder="Search for products..."
            className="hidden md:flex bg-gray-200 p-3 w-full rounded-r-full"
          />
        </div>
        <div className="flex lg:gap-6">
          <div className="flex items-center md:hidden">
            <button type="button" className="p-2">
              <Search size={25} />
            </button>
          </div>
          <div className="flex items-center">
            <button type="button" className="p-2">
              <ShoppingCart size={25} />
            </button>
          </div>
          <div className="flex items-center">
            <button type="button" className="p-2">
              <CircleUserRound size={25} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
