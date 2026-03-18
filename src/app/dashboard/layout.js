import { ContentDashboard } from "@/components/dashboardComponents/ContentDashboard";
import { NavbarItems } from "@/components/navbar/NavbarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dashboard user data",
  description: "the content is user data",
};

export default function RootLayout({ children }) {
  const listItemsForNavbar = [
    {
      url: "/dashboard/invoices",
      name: "invoices",
    },
    {
      url: "/dashboard/customers",
      name: "customers",
    },
  ];
  return (
    <main className="grid grid-cols-12">
      <div className="col-span-2 flex flex-col justify-between py-5 bg-[#1db78c]">
        <Link href={"/dashboard"}>
          <Image
            src={"/GestFactVarientColor-removeBg.png"}
            width={130}
            height={130}
            alt="Logo GestFacts"
          />
        </Link>
        <ul className="flex flex-col justify-center gap-8 py-5 mb-32">
          <NavbarItems listLink={listItemsForNavbar} />
        </ul>
        <ul className="text-center">
          <li>
            <Link href={"/dashboard/logout"}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </Link>
          </li>
        </ul>
      </div>
      <ContentDashboard>{children}</ContentDashboard>
    </main>
  );
}
