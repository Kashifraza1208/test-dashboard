import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import tra from "../assets/tra.svg";
import logout from "../assets/logout.svg";
import fd from "../assets/fd.svg";
import { Link } from "react-router-dom";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import { FaAngleUp } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleButton = () => {
    setShow(!show);
  };

  return (
    <div className="flex bg-white items-center justify-between h-14 pe-5 lg:px-12">
      <img src={logo} alt="logo" className="w-10 h-10" />

      <div className="flex items-center justify-between gap-6">
        <p className="cursor-default font-semibold">Dashboard</p>
        <p className="cursor-default font-semibold">FAQs</p>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5   bg-white px-3 py-2 text-sm font-semibold text-gray-900   ring-gray-300 ">
              <p className="cursor-pointer">Support</p>
            </MenuButton>
          </div>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 font-semibold">
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      to="#"
                      className={classNames(
                        focus
                          ? "bg-gray-100 text-gray-900 flex gap-2 items-center justify-start"
                          : "text-gray-700 flex gap-2 items-center justify-start",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <img src={phone} alt="" className="w-5 h-4" />
                      <div className="flex flex-col text-[#3B39D9] text-sm">
                        <span>+91 88777 37777</span>
                        <span>+91 88777 5666</span>
                      </div>
                    </Link>
                  )}
                </MenuItem>
                <div className="border border-gray-100"></div>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      to="#"
                      className={classNames(
                        focus
                          ? "bg-gray-100 text-gray-900 flex gap-2 items-center justify-start"
                          : "text-gray-700 flex gap-2 items-center justify-start",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <img src={email} alt="" className="w-5 h-4" />
                      <div className="flex flex-col text-[#3B39D9] text-sm">
                        <span>support@silverbullet.in</span>
                        <span>info@silverbullet.in</span>
                      </div>
                    </Link>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton
              onClick={toggleButton}
              className="inline-flex w-full border border-[#4A4ED4] justify-center gap-x-1.5  rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <IoPersonSharp className="text-[#4A4ED4]" />
              {show ? (
                <FaAngleUp className="  text-[#4A4ED4]" aria-hidden="true" />
              ) : (
                <FaAngleDown className="  text-[#4A4ED4]" aria-hidden="true" />
              )}
            </MenuButton>
          </div>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 font-semibold">
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      to="#"
                      className={classNames(
                        focus
                          ? "bg-gray-100 text-gray-900 flex gap-2"
                          : "text-gray-700 flex gap-2",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <img src={profile} alt="" className="w-5 h-4" /> My
                      Profile
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      to="#"
                      className={classNames(
                        focus
                          ? "bg-gray-100 text-gray-900 flex gap-2"
                          : "text-gray-700 flex gap-2",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <img src={fd} alt="" className="w-5 h-4" /> MY FDs
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      to="#"
                      className={classNames(
                        focus
                          ? "bg-gray-100 text-gray-900 flex gap-2"
                          : "text-gray-700 flex gap-2",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <img src={tra} alt="tra" className="w-5 h-4" /> My
                      Transactions
                    </Link>
                  )}
                </MenuItem>
                <form>
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        type="submit"
                        className={classNames(
                          focus
                            ? "bg-gray-100 text-gray-900 flex gap-2 w-full"
                            : "text-gray-700 flex gap-2",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <img src={logout} alt="" className="w-5 h-4" /> Logout
                      </button>
                    )}
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
