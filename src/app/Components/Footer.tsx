"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillMail } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Testimonials", href: "/" },
    { name: "About Us", href: "/" },
    { name: "FAQ", href: "/" },
    { name: "Contact Us", href: "/" },
    { name: "Trading Rules", href: "/" },
];

const legalLinks = [
    { name: "Terms & Conditions", href: "/" },
    { name: "Privacy Policy", href: "/" },
    { name: "Disclaimer", href: "/" },
    { name: "Become A Partner", href: "/" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-cyan  to-lime text-black font-primary">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-[1240px] px-4 xl:px-0 py-8 md:py-12 grid md:grid-cols-12 items-start gap-7 md:gap-10 "
            >
                {/* Left: Brand & info */}
                <div className="col-span-4 space-y-2 md:space-y-4">
                    <Link href="/" className="flex items-center md:gap-x-3">
                        <Image
                            src="/images/blacklogo.png"
                            alt="URFX Logo"
                            width={134}
                            height={41}
                            className=""
                        />
                    </Link>
                    <p className="text-lg leading-relaxed md:pt-2">
                        URFX Global Trading Inc.
                        <br />
                        Registered in Vancouver, Canada
                    </p>
                    <div className="md:space-y-1 gap-x-5 text-sm flex items-center flex-row md:flex-col md:items-start">
                        <div className="flex gap-x-2">
                            <AiFillMail size={20} />{" "}
                            <Link href="mailto:support@urfx.io" className=" text-sm">
                                support@urfx.io
                            </Link>
                        </div>
                        <div className="flex gap-x-1 md:pt-3">
                            <IoCallSharp size={20} />
                            +1 (555) 823-4567
                        </div>
                    </div>
                </div>

                {/* Middle: Links */}
                <div className="col-span-4 flex gap-16 text-sm">
                    <div>
                        <h3 className="font-medium text-[22px] mb-4 text-black">Quick Links</h3>
                        <ul className="space-y-1.5">
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:underline text-base font-normal">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium text-[22px] mb-4 text-black">Legal</h3>
                        <ul className="space-y-1.5">
                            {legalLinks.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:underline text-base">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right: Newsletter */}
                <div className="col-span-4 w-full ">
                    <h3 className="text-[28px] md:text-[40px] font-bold mb-4 leading-tight">
                        Subscribe to our
                        <br />
                        Newsletter
                    </h3>
                    <form
                        className="space-y-3"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="relative mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-sm  bg-black/5 px-6 py-[14px] text-base placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black/40"
                                required
                            />
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}>
                            <Button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-none border border-black bg-white px-4 md:px-5 py-3 md:py-2 h-auto text-base font-bold hover:bg-black hover:text-white duration-300 transition-colors"
                            >
                                Submit
                            </Button>
                        </motion.div>

                    </form>
                </div>
            </motion.div>
        </footer>
    );
}