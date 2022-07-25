import React from "react";
import Button from "../Shared/Button";
import wall1 from "../../assets/wallet/1.png";
import wall2 from "../../assets/wallet/2.png";
import wall3 from "../../assets/wallet/3.png";
import wall4 from "../../assets/wallet/4.png";
import wall5 from "../../assets/wallet/5.png";
import wall6 from "../../assets/wallet/6.png";
import wall7 from "../../assets/wallet/7.png";
import wall8 from "../../assets/wallet/8.png";

const Banner = () => {
  const walletImmgs = [
    {
      _id: 1,
      img: wall1,
    },
    {
      _id: 2,
      img: wall2,
    },
    {
      _id: 3,
      img: wall3,
    },

    {
      _id: 4,
      img: wall4,
    },
    {
      _id: 5,
      img: wall5,
    },
    {
      _id: 6,
      img: wall6,
    },
    {
      _id: 7,
      img: wall7,
    },
    {
      _id: 8,
      img: wall8,
    },
  ];
  return (
    <div className="bg-black">
      <div className="flex  justify-center w-full h-screen">
        <div className="w-full lg:w-2/5 pt-20 lg:pt-36 px-2">
          <h3 className="text-[#fff305] text-xl uppercase text-center mb-6">
            GIGALAND MARKET
          </h3>
          <h1 className="text-white text-[30px] md:text-[50px] text-center mb-[20px] line-h">
            NFT Marketplace For Musical Arts
          </h1>
          <p className="text-[#a2a2a2] text-center text-[18px] mb-[20px]">
            Unit of data stored on a digital ledger, called a blockchain, that
            certifies a digital asset to be unique and therefore not
            interchangeable
          </p>
          <Button />
          <div className="grid grid-cols-8 my-12 space-x-4">
            {walletImmgs.map((wallet) => (
              <div key={wallet._id} className='cursor-pointer border border-[#333333] '>
                <img className="w-16 p-3  mx-auto" src={wallet.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
