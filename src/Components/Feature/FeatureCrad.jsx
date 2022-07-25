import React from "react";
import { AiFillTags } from "react-icons/ai";
import { FaMusic, FaWallet } from "react-icons/fa";

const FeatureCrad = () => {
  
  return (
    <section className="bg-black max-w-7xl mx-auto pt-6 pb-20 px-4">
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3   ">
      <div className="p-18 mx-3 my-3 md:p-10 border hover:text-white transition ease-in-out duration-500">
          <div className="p-4 inline-block bg-[#fff305]"><FaWallet color="black" size={26}  /></div>
          <h3 className="text-white my-3 text-[20px]">Connect your wallet</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
        </div>
        <div className="p-18 mx-3 my-3 md:p-10 border hover:text-white transition ease-in-out duration-500">
          <div className="p-4 inline-block bg-[#fff305]"><FaWallet color="black" size={26}  /></div>
          <h3 className="text-white my-3 text-[20px]">Connect your wallet</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
        </div>
        <div className="p-18 mx-3 my-3 md:p-10 border hover:text-white transition ease-in-out duration-500">
          <div className="p-4 inline-block bg-[#fff305]"><FaWallet color="black" size={26}  /></div>
          <h3 className="text-white my-3 text-[20px]">Connect your wallet</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCrad;
