import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 w-auto mr-4" />
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <Menu as="li" className="relative">
            <Menu.Button className="flex items-center text-white hover:text-gray-400">
              What We Do
              {/* <ChevronDownIcon className="ml-2 h-5 w-5" /> */}
            </Menu.Button>
            <Transition
              as="div"
              enter="transition ease-out duration-200"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Service 1
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Service 2
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Service 3
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="li" className="relative">
            <Menu.Button className="flex items-center text-white hover:text-gray-400">
              Who We Are
              {/* <ChevronDownIcon className="ml-2 h-5 w-5" /> */}
            </Menu.Button>
            <Transition
              as="div"
              enter="transition ease-out duration-200"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Our Team
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Our Values
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Our History
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <li>
            <a href="#" className="hover:text-gray-400">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Newsroom
            </a>
          </li>
          <Menu as="li" className="relative">
            <Menu.Button className="flex items-center text-white hover:text-gray-400">
              Contact Us
              {/* <ChevronDownIcon className="ml-2 h-5 w-5" /> */}
            </Menu.Button>
            <Transition
              as="div"
              enter="transition ease-out duration-200"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Email Us
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Phone
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </ul>
      </div>
      <div className="relative">
        {/* <SearchIcon className="h-6 w-6 text-white cursor-pointer" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
