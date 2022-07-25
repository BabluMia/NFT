import React from "react";
import nwesa1 from "../../assets/news/news-a1.jpg";
import nwesa2 from "../../assets/news/news-a2.jpg";
import nwesa3 from "../../assets/news/news-a3.jpg";
import Button from "../Shared/Button";

const LetestNews = () => {
  return (
    <div className="pb-16 pt-6 max-w-7xl mx-auto">
      <div className="flex flex-col relative items-center">
        <h1 className="text-white text-4xl">
          Late<span className="border-b-2 border-[#fff305] pb-3">st N</span>
          ews
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 mx-auto gap-6 place-items-center my-16">

        <div class="rounded-none my-3 mx-2 relative card w-96 bg-base-100 shadow-xl bg-transparent text-white">
          <figure>
            <img src={nwesa1} alt="Shoes" />
          </figure>
          <p className="bg-black px-2 py-1 font-bold absolute top-3 left-3 text-xs">TIPS & TRICKS</p>
            <p style={{letterSpacing:'2px'}} className="text-[12px] mt-3 text-[#a2a29d] space-x-0.5">OCTOBER 28, 2020</p>
            <h2 class="card-title text-start my-3">How to create music NFT</h2>
            <p className="mb-4 text-[#a2a29d]">Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
            <button className="bg-[#fff305] px-10 text-black font-semibold py-1 w-44">Read More</button>
        </div>

        <div class="rounded-none my-3 mx-2 relative card w-96 bg-base-100 shadow-xl bg-transparent text-white">
          <figure>
            <img src={nwesa2} alt="Shoes" />
          </figure>
          <p className="bg-black px-2 py-1 font-bold absolute top-3 left-3 text-xs">TIPS & TRICKS</p>
            <p style={{letterSpacing:'2px'}} className="text-[12px] mt-3 text-[#a2a29d] space-x-0.5">OCTOBER 28, 2020</p>
            <h2 class="card-title text-start my-3">How to sell music NFT</h2>
            <p className="mb-4 text-[#a2a29d]">Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
            <button className="bg-[#fff305] px-10 text-black font-semibold py-1 w-44">Read More</button>
        </div>

        <div class="rounded-none my-3 mx-2 relative card w-96 bg-base-100 shadow-xl bg-transparent text-white">
          <figure>
            <img src={nwesa3} alt="Shoes" />
          </figure>
          <p className="bg-black px-2 py-1 font-bold absolute top-3 left-3 text-xs">TIPS & TRICKS</p>
            <p style={{letterSpacing:'2px'}} className="text-[12px] mt-3 text-[#a2a29d] space-x-0.5">OCTOBER 28, 2020</p>
            <h2 class="card-title text-start my-3">Where to sell music NFT</h2>
            <p className="mb-4 text-[#a2a29d]">Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
            <button className="bg-[#fff305] px-10 text-black font-semibold py-1 w-44">Read More</button>
        </div>



      </div>
    </div>
  );
};

export default LetestNews;
