import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
export default function Home() {
  const address = useAddress();
  const ConnectwithMetamask = useMetamask();
  return (
      <div className="bg-black min-h-screen">
        <Navbar/>
        <Hero/>
      </div>
  )
}
