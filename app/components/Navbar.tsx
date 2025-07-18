"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import logo from "@/public/blaban-logo.png";

const navigation = [
  { name: "تواصل معنا", href: "#", current: false },
  { name: "فروعنا", href: "#", current: false },
  { name: "قائمتنا", href: "#", current: false },
  { name: "الرئيسية", href: "#", current: true },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-secondary border-b-white border-b-1">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:cursor-pointer  hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block size-6 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block size-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>

              <div className=" justify-between items-center gap-4 hidden md:flex">
                <button className="bg-white text-secondary cursor-pointer px-4 py-2 rounded-lg font-semibold font-arabic ">
                  اطلب الآن
                </button>
                <ShoppingBagIcon className="h-6 w-6" />
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`${
                          item.current
                            ? " text-white"
                            : "text-white hover:bg-white/15 hover:text-white"
                        } rounded-md px-3 py-2 text-xl font-light font-arabic`}
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Image src={logo} alt="Blaban logo" width={48} height={48} />
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 bg-secondary">
              {navigation
                .slice()
                .reverse()
                .map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={`${
                      item.current
                        ? "bg-white text-accent"
                        : "text-white hover:bg-white/20 hover:text-white"
                    } block rounded-md px-3 py-2 text-base font-medium`}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </DisclosureButton>
                ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
