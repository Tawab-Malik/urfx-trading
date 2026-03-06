"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
  DrawerFooter,
} from "@heroui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "Dashboard", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "About Us", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  return (
    <>
      <motion.header
        className=" text-white  shadow-lg relative z-20 "
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-[1240px] mx-auto flex items-center justify-between border-b border-gray-100/10 px-4 py-3">
          {/* Logo */}
          <div className="">
            <Link href={"/"}>
              <Image
                src="/images/logo.svg"
                alt="URFX Logo"
                width={134}
                height={41}
                className=""
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-5">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-lg hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-x-3">
            <Button
              className="black-btn font-bold bg-gradient-to-r from-white/10 to-white/5 text-lg py-4 px-5 text-white rounded-none bg-transparent hover:bg-transparent"
            >
              Login
            </Button>
            <Button className="register-btn font-bold text-lg py-4 px-5 text-white rounded-none bg-transparent hover:bg-transparent">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              isIconOnly
              variant="light"
              onPress={onOpen}
              className="text-white"
            >
              <HiMenu size={24} />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="left"
        className="lg:hidden font-primary rounded-none"
        classNames={{ closeButton: 'text-xl right-4 top-4 text-white' }}
      >
        <DrawerContent className="bg-[#070707] text-white">
          {(onClose) => (
            <>
              <DrawerHeader className="flex items-center justify-between border-b border-gray-100/10">
                <Link href={"/"}>
                  <Image
                    src="/images/logo.svg"
                    alt="URFX Logo"
                    width={134}
                    height={41}
                    className=""
                  />
                </Link>

              </DrawerHeader>
              <DrawerBody className="pt-6">
                {/* Mobile Navigation */}
                <div className="flex flex-col space-y-4 mb-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2 text-lg"
                      onClick={onClose}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                
              </DrawerBody>
              <DrawerFooter className="w-full flex flex-col">
                {/* Mobile Action Buttons */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100/10 ">
                  <Button disableAnimation
                    className="black-btn font-bold bg-gradient-to-r from-white/10 to-white/5 text-lg py-4 px-5 text-white rounded-none bg-transparent hover:bg-transparent"
                  >
                    Login
                  </Button>
                  <Button disableAnimation className="register-btn font-bold text-lg py-4 px-5 text-white rounded-none bg-transparent hover:bg-transparent">
                    Register
                  </Button>
                </div>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
