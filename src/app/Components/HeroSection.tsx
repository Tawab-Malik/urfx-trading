"use client";

import React, { useMemo } from 'react';
import { Button } from "@heroui/react";
import { HiCheck } from 'react-icons/hi';
import { motion } from "framer-motion";

const HeroSection = () => {
  // Generate consistent chart data
  const chartData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      height: 30 + (i % 3) * 20 + (i % 2) * 15 + (i % 4) * 10
    }));
  }, []);

  const features = [
    { text: "No SL Required", icon: <HiCheck className="w-5 h-5" /> },
    { text: "Performance Protect", icon: <HiCheck className="w-5 h-5" /> },
    { text: "Instant Credentials", icon: <HiCheck className="w-5 h-5" /> },
    { text: "100% Refund", icon: <HiCheck className="w-5 h-5" /> },
    { text: "Martingale & Grid Allowed", icon: <HiCheck className="w-5 h-5" /> },
    { text: "Unlimited Days Available", icon: <HiCheck className="w-5 h-5" /> },
  ];

  return (
    <section className="relative overflow-hidden bg-[url('/images/herosection/mobimg.png')] md:bg-[url('/images/herosection/updatedhero.png')]  bg-contain bg-bottom md:bg-bottom-right bg-no-repeat -mt-24 ">
      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-[1240px] mx-auto px-4 xl:px-0 pt-32 md:pt-40 xl:pt-[275px] pb-[400px] md:pb-[250px] lg:pb-44"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 md:space-y-7">
            {/* Top Chip with Gradient Text */}
            <motion.div
              className="inline-block font-secondary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="gradient-border">
                <div className="bg-gradient-to-r from-white/10 to-white/5 px-2.5 py-1 md:py-2">
                  <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent font-bold uppercase text-xs md:text-base leading-[100%] tracking-[0.02em]">
                    THE LEADING PROP TRADING FIRM
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="font-bold text-3xl md:text-5xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Empowering Ambitious Traders to Succeed
            </motion.h1>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Button className="faqs-cta-btn font-bold text-lg py-4 px-4.5 text-white rounded-none backdrop-blur-md">
                Start Challenge
              </Button>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 md:gap-4 pt-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2.5"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 * index }}
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-cyan/40 to-lime/40 gradient-border rounded-none flex items-center justify-center">
                    <HiCheck className="w-3 h-3 bg-gradient-to-r from-cyan to-lime bg-clip-text text-lime" />
                  </div>
                  <span className="text-white text-sm md:text-lg font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {/* reserved for future hero visuals */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
