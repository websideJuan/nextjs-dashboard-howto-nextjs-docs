"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function NavbarDashboard() {
  const [showDropdow, setShowDropdown] = useState(false);
  const handleDropdow = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdow);
  };
  return (
    <div className="flex items-center justify-between h-17.5 px-5">
      <Link href={"/dashboard"}>Dashboard</Link>
      <ul>
        <li className="relative">
          <a href="#" onClick={handleDropdow}>
            <Image
              src={"/defaultUserConected.png"}
              width={30}
              height={30}
              alt="user defult images"
            />
          </a>
          {showDropdow && (
            <ul className="absolute right-0 shadow">
              <li className="border-b border-gray-300 py-2 px-6 bg-white">  
                <Link href={'/user/profile'}>profile</Link>
              </li>
              <li className="border-b border-gray-300 py-2 px-6 bg-white">  
                <Link href={'/user/settings'}>settings</Link>
              </li>
              <li className="border-b border-gray-300 py-2 px-6 bg-white">  
                <Link href={'/Logout'}>Logout</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
