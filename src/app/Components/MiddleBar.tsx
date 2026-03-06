"use client"
import { Marquee } from "./UI/Marquee"
import Image from "next/image"
import { motion } from "framer-motion"
const middleBarItems = [
  "Scalable",
  "No SL Required",
  "Backed by a Broker",
  "Unlimited Days",
  "EAs Allowed",
]

export default function MiddleBar() {
  return (
    <motion.div
      className="w-full font-primary py-4 md:py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Marquee
        className="w-full !p-0 md:!p-2 gradient-border bg-gradient-to-l from-[#DBD633]/40 via-[#9ED473]/40 to-[#1CCDE6]/40 text-white text-xs sm:text-sm md:text-base font-medium"
        pauseOnHover
      >
        {middleBarItems.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center gap-3 md:gap-10 md:px-6  md:py-2 whitespace-nowrap"
          >
            <Image src={"/images/marqueelogo.png"} height={40} width={40} alt="logo" />
            <span className="text-base md:text-3xl font-medium text-white">{item}</span>
          </div>
        ))}
      </Marquee>
    </motion.div>
  )
}

