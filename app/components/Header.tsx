import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 grid grid-cols-3 h-[100px] w-[1440px] bg-black z-50">
     
      <div className="h-full flex justify-center items-center">
        
          <ul className="flex gap-16 justify-center items-center font-medium text-base">
            
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/shop"}>Shop</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
          </ul>
       
      </div>
      <div className="h-full flex justify-center items-center">
        
          <ul className="flex gap-10 justify-center items-center text-white">
            <Link href={"/"}>
              <Image
                src={"/icons/account.svg"}
                width={28}
                height={28}
                alt="icon"
              ></Image>
            </Link>
            <Link href={"/"}>
              <Image
                src={"/icons/search.svg"}
                width={28}
                height={28}
                alt="icon"
              ></Image>
            </Link>
            <Link href={"/"}>
              <Image
                src={"/icons/like.svg"}
                width={28}
                height={28}
                alt="icon"
              ></Image>
            </Link>
            <Link href={"/"}>
              <Image
                src={"/icons/cart.svg"}
                width={28}
                height={28}
                alt="icon"
              ></Image>
            </Link>
          </ul>
        
      </div>
    </header>
  );
};

export default Header;
