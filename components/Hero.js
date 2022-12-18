import { 
  useContract,
  useAddress,
  useMetamask,
} from "@thirdweb-dev/react";
import React from "react";
export default function Hero() {
  // Account
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  // Contract
  const { contract } = useContract("0x892680727B771AB244cBC3A1CdaaBa54f50348a9", "nft-drop");
  console.log({ contract });
  const mint = async () => {
    const tx = await contract?.claimTo(address, 0, 1);
      console.log(tx);
  }
  return (
    <div className="h-50 m  y-20">
      <div className="grid-cols-2 items-center">
        <div className="hero">
          <h1 className="text-white text-6xl font-bold ml-16">
            DECENTRALIZED<br></br>TICKETING<br></br>
          </h1>
          <p className="text-white text-lg ml-16 py-  6">
            Buy music tickets easily<br></br>
            and quickly for you
          </p>
        </div>
      </div>
      { address ? 
      <button className='bg-white' onClick={mint}>Mint NFT</button> 
      : 
      <button className='bg-white' onClick={connectWithMetamask}>Connect Wallet</button>
      }

    </div>
  );
    }