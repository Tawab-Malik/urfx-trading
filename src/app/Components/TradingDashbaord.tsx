'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { Marquee } from "./UI/Marquee"
const middleBarItems = [
    {
        icon: '/images/dashboard/marq1.png',
        text: 'Advanced Metrics'
    },
    {
        icon: '/images/dashboard/marq2.png',
        text: 'Comprehensive Trade Journal'
    },
    {
        icon: '/images/dashboard/marq3.png',
        text: 'Regular Trading Competitions'
    },
    {
        icon: '/images/dashboard/marq4.png',
        text: 'Exclusive Trader Discounts'
    },
    {
        icon: '/images/dashboard/marq5.png',
        text: 'Challenge Account Analysis'
    },
    {
        icon: '/images/dashboard/marq6.png',
        text: 'No Time Limit'
    },


]


const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            when: 'beforeChildren',
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function TradingDashboard() {
    return (
        <section className="w-full py-12 md:py-16 px-4 xl:px-0 font-primary">
            <motion.div
                className="max-w-[1240px] mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Heading */}
                <div className="text-center  mb-12">
                    <motion.h2
                        className="text-[32px] leading-tight md:leading-none md:text-5xl font-bold text-white"
                        variants={cardVariants}
                    >
                        Revolutionary
                        Trading Dashboard
                    </motion.h2>
                    <motion.p
                        className="mt-2.5 md:px-0 md:mt-4 text-sm md:text-lg text-gray-300 leading-relaxed max-w-[640px] mx-auto"
                        variants={cardVariants}
                    >
                        Unleash your trading potential with our state-of-the-art dashboard, featuring advanced analytics that provide unparalleled insights into your performance.
                    </motion.p>
                </div>

                {/* Cards - horizontal scroll: grid overflow-visible so laptop can overflow; only marquee column clips */}
                <div className='relative gap-y-10 grid grid-cols-1 md:grid-cols-2 items-center gradient-border2 bg-gradient-to-r from-[#DBD633]/40 via-[#9ED473]/40 to-[#1CCDE6]/40 max-h-[900px] md:max-h-[606px] overflow-visible'>
                    <Image src={'/images/dashboard/laptop.png'} height={600} width={750} alt="laptop" className='hidden xl:block absolute z-40 select-none hover:scale-105 duration-300 bottom-0 -left-20'/>
                    <div className='xl:hidden block'>
                    <Image src={'/images/dashboard/moblaptop.png'} height={366} width={353} alt="laptop" className='mx-auto z-40 select-none duration-300'/>
                    </div>

                    <div className='absolute top-0 w-full left-0 h-[200px] bg-gradient-to-t from-transparent to-[#070707] z-30'></div>
                    <div className='md:col-start-2 min-h-0 relative overflow-hidden flex justify-center pr-4 pl-2 xl:px-0'>
                    

                        <div className='min-h-0 overflow-hidden max-h-[440px] md:max-h-[606px]'>
                            <Marquee
                                vertical
                                className="w-full  gap-[gap-2.4] text-white"
                                pauseOnHover
                            >
                                {middleBarItems.map((item, idx) => (
                                    <div
                                        key={`${item}-${idx}`}
                                        className="flex flex-col justify-start w-[420px] border border-white/10 items-start gap-y-1 !p-4 md:!p-5 whitespace-nowrap bg-gradient-to-l from-white/10 to-white/5"
                                    >
                                        <Image src={item.icon} height={64} width={64} alt="logo" />
                                        <span className="text-xl md:text-[28px] font-bold text-white">{item.text}</span>
                                    </div>
                                ))}
                            </Marquee>
                        </div>

                    </div>

                </div>

                {/* CTA Button */}
                <motion.div
                    className="flex justify-center mt-12"
                    variants={cardVariants}
                >
                    <Button className="faqs-cta-btn font-bold text-lg py-4 px-5 text-white rounded-none backdrop-blur-md">
                        Start Challenge
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}

