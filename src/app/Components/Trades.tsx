'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@heroui/react';
const tradeCards = [
    {
        image: '/images/trade/first.png',
        title: 'Guaranteed <br/> Payouts',
        description:
            "Receive your payment within 24 hours, or we’ll add an extra $1,000 to your earnings!",
        accent: 'from-cyan-400/60 to-emerald-300/40',
    },
    {
        image: '/images/trade/trade.png',
        title: 'Best Trading <br/> Conditions',
        description:
            'Transforming trading journeys globally through industry-leading resources.',
        accent: 'from-white/30 to-yellow-300/40',
    },
    {
        image: '/images/trade/mobile.png',
        title: 'Best Trading <br/> Platforms',
        description:
            'Our MQ licenses and tech boost experience, security, and efficiency.',
        accent: 'from-amber-300/40 to-sky-400/40',
    },
];

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

export default function Trades() {
    return (
        <section className="w-full py-12 md:pb-16 md:py-14 px-4 xl:px-0 font-primary">
            <motion.div
                className="max-w-[1240px] mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Heading */}
                <div className="text-center max-w-[480px] mx-auto mb-12">
                    <motion.h2
                        className="text-[32px] leading-tight md:leading-none md:text-5xl font-bold text-white"
                        variants={cardVariants}
                    >
                        Trade with the Most
                        Reliable Prop Firm
                    </motion.h2>
                    <motion.p
                        className="mt-2.5 px-8 md:px-0 md:mt-4 text-sm md:text-lg text-gray-300 leading-relaxed max-w-[420px] mx-auto"
                        variants={cardVariants}
                    >
                        Reliable and swift, our service ensures precision and stability, building trust with every
                        interaction.
                    </motion.p>
                </div>

                {/* Cards - horizontal scroll */}
                <div className="flex md:grid grid-cols-3 gap-6 overflow-y-visible overflow-x-auto md:overflow-x-visible -my-20 md:my-0 py-20 md:py-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
                    {tradeCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            className="relative boxes-lines bg-gradient-to-t from-white/10 to-white/5 min-w-[300px] md:min-w-auto snap-start"
                        >
                            <div
                                className="relative z-10 h-[280px] md:h-[370px] p-4 md:p-6 flex flex-col justify-end"
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'top',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <div>
                                    <h3
                                        className="text-lg leading-tight md:text-2xl font-bold text-white mb-2"
                                        dangerouslySetInnerHTML={{ __html: card.title }}
                                    ></h3>
                                    <p className="text-sm md:text-lg text-gray-300 font-medium flex-1">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
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

