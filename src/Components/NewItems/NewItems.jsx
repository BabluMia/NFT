import React, { useState } from "react";
import "./NewItem.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillPauseFill } from "react-icons/bs";

import music1 from "../../assets/item image/music-1.jpg";
import music2 from "../../assets/item image/music-2.jpg";
import music3 from "../../assets/item image/music-3.jpg";
import music4 from "../../assets/item image/music-4.jpg";
import music5 from "../../assets/item image/music-5.jpg";
import music6 from "../../assets/item image/music-6.jpg";
import music7 from "../../assets/item image/music-7.jpg";
import music8 from "../../assets/item image/music-8.jpg";

const NewItems = () => {
  const [icon, setIcon] = useState(false);
  const iconChsnge = () => {
    setIcon(!icon);
  };
  const [heart, setHeart] = useState(false);
  const heartChsnge = () => {
    setHeart(!heart);
  };
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="flex flex-col relative items-center">
        <h1 className="text-white text-4xl">
          Ne
          <span className="border-b-2  border-[#fff305] pb-3">
            <p className="inline text-white">w It</p>
          </span>
          em
        </h1>
      </div>

      {/* item container */}
      <div className="my-10 grid xl:grid-cols-4 mx-6">
        <div class="card max-w-xl rounded-none shadow-xl border border-gray-800 px-6  item-cont">
          <figure className="mt-6 relative">
            <img
              src={music1}
              className="new-item h-64 mx-3 mt-3 ring-4 ring-[#fff305]"
              alt="Shoes"
            />
            <div
              onClick={iconChsnge}
              style={{ transform: "translate(-8%,-45%)" }}
              className="absolute top-1/2 left1/2 p-[12px] rounded-full  bg-[#fff305]"
            >
              {icon ? (
                <BsFillPauseFill size={30} />
              ) : (
                <FaPlay className="p-1 ml-0.5" size={30} />
              )}
            </div>
          </figure>
          <div className="my-2">
            <div className="flex justify-between mb-3 mt-5">
              <h2 class="text-md text-white">Cig Swaag</h2>
              <span>
                <BiDotsHorizontalRounded color="white" fontSize={22} />
              </span>
            </div>

            <div className="flex space-x-2 font-bold my-2">
              <h5>0.08 ETH</h5>
              <h5 className="text-white">1/20</h5>
            </div>
            <div className="flex justify-between mb-4">
              <h5 className="text-[#fff305]">Place a bid</h5>
              <div className="flex justify-center items-center space-x-0.5">
                <div onClick={heartChsnge}>
                    {
                        !heart ? <AiOutlineHeart size={18} />  : <AiFillHeart size={18} />
                    }
                   
                </div>
                
                <p className="font-bold text-white mb-0.5">81</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItems;
