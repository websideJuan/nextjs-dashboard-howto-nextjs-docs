"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

export function NavbarItems({ listLink }) {
  const pathName = usePathname();

  const listObjectIcons = {
    customers: faUsers,
    invoices: faFileLines
  };

  return listLink.map((link) => (
    <li key={link.name}>
      <Link
        href={link.url}
        className={`flex gap-2 flex-col items-center ${pathName === link.url ? "text-white" : "text-gray-700"}`}
      >
        <FontAwesomeIcon
          icon={listObjectIcons[link.name]}
          className="text-[24px]"
        />
        <span className="hidden md:block">{link.name}</span>
      </Link>
    </li>
  ));
}
