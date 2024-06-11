import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import group from "../assets/group.png";
import group2 from "../assets/group-2.png";
import group3 from "../assets/group-3.png";
import group4 from "../assets/group4.png";
import ScrollCard from "./ScrollCard";

const LeftCard = () => {
  return (
    <div className="flex flex-col gap-5 lg:w-[820px]">
      {/* //card1 */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full p-5 h-52 bg-[#F8F0FF] gap-4 border-4 border-white shadow-lg">
          <div className="flex gap-2 items-center justify-start">
            <img src={group} alt="" className="bg-inherit" />
            <p className="font-semibold">Utkarsh Small Finance Bank</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 bg-[#EFDDFF] px-2 rounded py-1">
              <img src={logo1} alt="" />
              <p className="text-sm">Highest Interest Rate</p>
            </div>
            <div className="flex gap-2 bg-[#EFDDFF] px-2 rounded py-1">
              <img src={logo1} alt="" />
              <p className="text-sm">RBI Insured</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p>Interest Upto</p>
              <strong>9.10% p.a</strong>
            </div>
            <button className="bg-[rgb(82,11,141)] text-white px-5 py-2 rounded">
              Book Now
            </button>
          </div>
        </div>
        {/* //card1 */}
        <div className="flex flex-col w-full p-5 h-52 bg-[#EFF6FF] gap-4 border-4 border-white shadow-lg">
          <div className="flex gap-2 items-center justify-start">
            <img src={group2} alt="" className="bg-inherit" />
            <p className="font-semibold">Bajaj Finserv</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 bg-[#D7E9F8] px-2 rounded py-1">
              <img src={logo3} alt="" />
              <p className="text-sm">Crisil AAA Rated</p>
            </div>
            <div className="flex gap-2 bg-[#D7E9F8] px-2 rounded py-1">
              <img src={logo3} alt="" />
              <p className="text-sm">No Video KYC required</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p>Interest Upto</p>
              <strong>8.80% p.a</strong>
            </div>
            <button className="bg-[#0072BB] text-white px-5 py-2 rounded">
              Book Now
            </button>
          </div>
        </div>{" "}
      </div>
      {/* //card1 */}
      <div className="flex flex-col lg:flex-row gap-5">
        {" "}
        <div className="flex flex-col w-full p-5 h-52 bg-[#F4F4F4] gap-4 border-4 border-white shadow-lg">
          <div className="flex gap-2 items-center justify-start">
            <img src={group3} alt="" className="bg-inherit" />
            <p className="font-semibold">Shriram Finance</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 bg-[#DEDEDE] px-2 rounded py-1">
              <img src={logo2} alt="" />
              <p className="text-sm">Crisil AAA Rated</p>
            </div>
            <div className="flex gap-2 bg-[#DEDEDE] px-2 rounded py-1">
              <img src={logo2} alt="" />
              <p className="text-sm">No Video KYC required</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p>Interest Upto</p>
              <strong>8.80% p.a</strong>
            </div>
            <button className="bg-black text-white px-5 py-2 rounded">
              Book Now
            </button>
          </div>
        </div>{" "}
        {/* //card1 */}
        <div className="flex flex-col w-full p-5 h-52 bg-[#FFEFEF] gap-4 border-4 border-white shadow-lg">
          <div className="flex gap-2 items-center justify-start">
            <img src={group4} alt="" className="bg-inherit" />
            <p className="font-semibold">Mahindra Finance</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 bg-[#FFD7D7] px-2 rounded py-1">
              <img src={logo4} alt="" />
              <p className="text-sm">Crisil AAA Rated</p>
            </div>
            <div className="flex gap-2 bg-[#FFD7D7] px-2 rounded py-1">
              <img src={logo4} alt="" />
              <p className="text-sm">No Video KYC required</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p>Interest Upto</p>
              <strong>8.80% p.a</strong>
            </div>
            <button className="bg-[#FF0000] text-white px-5 py-2 rounded">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <ScrollCard />
    </div>
  );
};

export default LeftCard;
