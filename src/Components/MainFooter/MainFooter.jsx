import React from "react";
import './MainFooter.css'
import {AiOutlineArrowRight} from'react-icons/ai'

const MainFooter = () => {
  return (
    <div className="border-[1px] pl-12 border-gray-500">
      <footer class="max-w-7xl mx-auto footer p-10  bg-black  text-base-content">
        <div>
          <span class="footer-title ">Marketplace</span>
          <a class="link link-hover">All NFTs</a>
          <a class="link link-hover">Arts</a>
          <a class="link link-hover">Music</a>
          <a class="link link-hover">Domain Names</a>
          <a class="link link-hover">Virtual World</a>
          <a class="link link-hover">Collectibles</a>
        </div>
        <div>
          <span class="footer-title">Resources</span>
          <a class="link link-hover">Help Center</a>
          <a class="link link-hover">Partners</a>
          <a class="link link-hover">Suggestions</a>
          <a class="link link-hover">Newsletter</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Docs</a>
        </div>
        <div>
          <span class="footer-title">Community</span>
          <a class="link link-hover">Community</a>
          <a class="link link-hover">Documentation</a>
          <a class="link link-hover">Brand Assets</a>
          <a class="link link-hover">Blog</a>
          <a class="link link-hover">Forum</a>
          <a class="link link-hover">Mailing List</a>
        </div>
        <div>
          <span class="footer-title">Newsletter</span>
          <div class="form-control w-80">
            <label class="label">
              <span class="label-text">Signup for our newsletter to get the latest news in your inbox.</span>
            </label>
            <div class="relative my-2">
              <input
                type="text"
                placeholder="username@site.com"
                class="input input-bordered bg-gray-900  rounded-none w-full pr-16"
              />
              <button class="btn bg-[#fff305] outline-none absolute rounded-none top-0 right-0 ">
                <AiOutlineArrowRight className="mx-3 text-xl text-black outline-none border-0"  />
              </button>
             
            </div>
            <label class="label">
              <span class="label-text">Your email is safe with us. We don't spam.</span>
            </label>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
