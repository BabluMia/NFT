import React from "react";
import './JoinComunity.css'
import { BsTwitter,BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { GrReddit } from "react-icons/gr";
import { HiDocumentText} from "react-icons/hi";
import { SiFortran} from "react-icons/si";

const JoinCommunity = () => {
    
  return (
    <div className="pb-8 pt-12 max-w-7xl mx-auto">
      <div className="flex flex-col relative items-center">
        <h1 className="text-white text-4xl">
          Join C<p className="border-b-2 border-[#fff305] pb-3 inline text-white">omm</p>
          unity
        </h1>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   my-12 mx-5 ">
        <div >
          <div className="com grid my-3 hover:text-white place-items-center border border-white  py-4 mx-3 px-2 cursor-pointer">
            <BsTwitter className="icon" size={45}   />
            <h5 className="text-white my-2">Twiter</h5>
          </div>
        </div>

        <div>
          <div className="com border my-3 grid place-items-center border-white  py-4 mx-3 px-2 cursor-pointer">
            <HiMail size={45} className="icon" />
            <h5 className="text-white my-2">Mailing List</h5>
          </div>
        </div>

        <div>
          <div className="border com my-3 grid place-items-center border-white  py-4 mx-3 px-2 cursor-pointer">
            <SiFortran size={45} className="icon" />
            <h5 className="text-white my-2">Forum</h5>
          </div>
        </div>
        <div>
          <div className="border com my-3 grid place-items-center border-white  py-4 mx-3 px-2 cursor-pointer">
            <BsGithub size={45} className="icon" />
            <h5 className="text-white my-2">GitHub</h5>
          </div>
        </div>
        <div>
          <div className="border com my-3 mx-3 px-2 grid place-items-center border-white  py-4  cursor-pointer">
            <GrReddit size={45} className="icon" />
            <h5 className="text-white my-2">Reddit</h5>
          </div>
        </div>
        <div>
          <div className="border com my-3 grid mx-3 px-2 place-items-center border-white  py-4  cursor-pointer">
            <HiDocumentText size={45} className="icon"  />
            <h5 className="text-white my-2">Documentation</h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JoinCommunity;
