import React from "react";

const RightCard = () => {
  return (
    <div className="flex w-full flex-col flex-wrap gap-1">
      <div className="flex flex-col p-5  w-full  bg-white gap-5 shadow-lg">
        <div className="flex gap-2 items-center justify-start">
          <p className="font-semibold">Video KYC</p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col w-20">
            <p className="text-xs text-[#1A1B1E] opacity-60 mb-1">
              Scheduled On
            </p>
            <p className=" text-black text-center text-4xl font-bold bg-[#F3F3F4]">
              28
            </p>
            <p className="text-sm bg-[#CE5151] text-center text-white">
              Oct, 2023
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-md font-semibold">Utkarsh SF Bank FD Plan 2</p>
            <div className="flex items-center justify-between gap-5">
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-[#1A1B1E] opacity-60">Deposit Amt</p>
                <strong>Rs. 20,000</strong>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-[#1A1B1E] opacity-60">Tennure</p>
                <strong>2 Years</strong>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-[#1A1B1E] opacity-60">
                  Interest Rate
                </p>
                <strong>8.10%</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-[#3B39D9] text-white px-7 py-2 rounded">
            Book Now
          </button>
          <button className="bg-white text-[#3B39D9] border border-[#3B39D9] px-5 py-2 rounded font-semibold">
            Reschedule
          </button>
        </div>
      </div>{" "}
      <div className="flex flex-col  p-5 h-72 lg:h-56  bg-white gap-5  w-full shadow-lg">
        <div className="flex gap-2 items-center justify-start">
          <p className="font-semibold">Pending Payment</p>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col w-20">
            <p className="text-xs text-[#1A1B1E] opacity-60 mb-1">Pay By</p>
            <p className=" text-black text-center text-4xl font-bold bg-[#F3F3F4]">
              30
            </p>
            <p className="text-sm bg-[#CE5151] text-center text-white">
              Oct, 2023
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-md font-semibold">Bajaj Finserv Corp FD 1</p>
            <div className="flex items-center justify-between gap-5">
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-[#1A1B1E] opacity-60">Deposit Amt</p>
                <strong>Rs. 25,000</strong>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-[#1A1B1E] opacity-60">Tennure</p>
                <strong>18 Months</strong>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-[#1A1B1E] opacity-60">
                  Interest Rate
                </p>
                <strong>8.10%</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-[#3B39D9] text-white px-8 py-2 rounded">
            Pay Now
          </button>
          <button className="bg-white text-[#3B39D9] border border-[#3B39D9] px-5 py-2 rounded font-semibold">
            Cancel Application
          </button>
        </div>
      </div>{" "}
      <div className="flex flex-col  p-5 h-72  lg:h-60 bg-white gap-5  w-full shadow-lg">
        <div className="flex gap-2 items-center justify-start">
          <p className="font-semibold">Upcoming FD Maturity</p>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col w-20">
            <p className="text-xs text-[#1A1B1E] opacity-60 mb-1">Renew by</p>
            <p className=" text-black text-center text-4xl font-bold bg-[#F3F3F4]">
              30
            </p>
            <p className="text-sm bg-[#CE5151] text-center text-white">
              Oct, 2023
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-md font-semibold">Shriram Finance Corp FD 1</p>
            <div className="flex items-center justify-between gap-5">
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-[#1A1B1E] opacity-60">Deposit Amt</p>
                <strong>Rs. 25,000</strong>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-[#1A1B1E] opacity-60">Tennure</p>
                <strong>18 Months</strong>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-[#1A1B1E] opacity-60">
                  Interest Rate
                </p>
                <strong>8.10%</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-[#3B39D9] text-white px-5 py-2 rounded">
            Renew Now
          </button>
          <button className="bg-white text-[#3B39D9] border border-[#3B39D9] px-5 py-2 rounded font-semibold">
            Compare other FDs
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
