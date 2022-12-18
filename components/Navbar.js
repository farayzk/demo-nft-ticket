import React from "react";
import Link from "next/link";
import { useMetamask, useAddress, useDisconnect, useContract, useClaimNFT} from "@thirdweb-dev/react";
export default function Navbar() {


  return (
    <header className="h-20 py-12 flex items-center justify-between pr-20 pl-5 bg-[#0e1111]">
      <div className="logo items-center flex ml-5">
        <div className="grid-cols-2">
          <h2 className="ml-3 font-bold text-white ">TicketNFT</h2>
          <p className="ml-3 text-white text-[10px]">Powered By CherryLabs</p>
        </div>
      </div>
      <nav>
        <ul className="text-white flex items-center space-x-6 ">
          <li>
            <Link
              href={{
                pathname: "/",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/explore",
              }}
            >
              Ticket
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/about",
              }}
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
