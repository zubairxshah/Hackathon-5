"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Hamburger Menu Button */}
      <div
        className={`fixed top-4 right-4 flex flex-col gap-2 lg:hidden justify-center items-end ${
          isOpen ? `z-50` : `z-40`
        } cursor-pointer`}
        onClick={() => setOpen(!isOpen)}
      >
        <div
          className={`h-[3px] w-6 bg-black rounded-3xl ${
            isOpen ? `rotate-45 translate-y-[5px]` : `block`
          } transition-all duration-300`}
        ></div>
        <div
          className={`h-[3px] w-6 bg-black rounded-3xl ${
            isOpen ? `-rotate-45 -translate-y-[6px]` : `block`
          } transition-all duration-300`}
        ></div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed top-0 left-0 bg-[#FBEBB5] w-full h-full flex flex-col items-center justify-center lg:hidden ${
          isOpen ? `block` : `hidden`
        } transition-all duration-300`}
      >
        <div className="flex flex-col gap-16 items-center justify-center py-16">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/shop" onClick={() => setOpen(false)}>
            Shop
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
        <div className="flex gap-16 items-center justify-center">
          <Link href="/account" onClick={() => setOpen(false)}>
            <Image
              src="/icons/account.svg"
              width={28}
              height={28}
              alt="Account icon"
            />
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/icons/search.svg"
              width={28}
              height={28}
              alt="Search icon"
            />
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/icons/like.svg"
              width={28}
              height={28}
              alt="Like icon"
            />
          </Link>
          <Link href="/cart" onClick={() => setOpen(false)}>
            <Image
              src="/icons/cart.svg"
              width={28}
              height={28}
              alt="Cart icon"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
