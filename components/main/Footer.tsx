import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200">
      <div className="flex flex-row justify-between gap-4 w-full">
        {/* Community Section */}
        <div className="w-1/3 bg-transparent shadow-lg p-[15px]">
          <div className="font-bold text-[16px]">Community</div>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <FaYoutube />
            <span className="text-[15px] ml-[6px]">Youtube</span>
          </p>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <RxGithubLogo />
            <span className="text-[15px] ml-[6px]">Github</span>
          </p>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <RxDiscordLogo />
            <span className="text-[15px] ml-[6px]">Discord</span>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="w-1/3 bg-transparent shadow-lg p-[15px]">
          <div className="font-bold text-[16px]">Social Media</div>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <RxInstagramLogo />
            <span className="text-[15px] ml-[6px]">Instagram</span>
          </p>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <RxTwitterLogo />
            <span className="text-[15px] ml-[6px]">Twitter</span>
          </p>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <RxLinkedinLogo />
            <span className="text-[15px] ml-[6px]">LinkedIn</span>
          </p>
        </div>

        {/* About Section */}
        <div className="w-1/3 bg-transparent shadow-lg p-[15px]">
          <div className="font-bold text-[16px]">About</div>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
          </p>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <span className="text-[15px] ml-[6px]">Learning about me</span>
          </p>
          <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <span className="text-[15px] ml-[6px]">zebakashish08@gmail.com</span>
          </p>
        </div>
      </div>

      <div className="mb-[20px] text-[15px] text-center">
        &copy; Full Stack Dev 2024 Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
