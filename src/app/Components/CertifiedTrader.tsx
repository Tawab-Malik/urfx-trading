'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const certificates = [
    {
        image: '/images/certificate/certificate1.png',
        name: 'Ines Moresan',
        quote: 'I started to realize that I could have all this capital to generate 3x more income.',
    },
    {
        image: '/images/certificate/certificate2.png',
        name: 'Mike McCullough',
        quote: "It’s incredible to be able to diversify and have different streams of income.",
    },
    {
        image: '/images/certificate/certificate3.png',
        name: 'Ava Thompson',
        quote: 'URFX helped me scale from a part-time trader to a consistent funded trader.',
    },
    {
        image: '/images/certificate/certificate4.png',
        name: 'Daniel Reyes',
        quote: 'The evaluations are fair and the payouts are always on time.',
    },
    {
        image: '/images/certificate/certificate1.png',
        name: 'Ines Moresan',
        quote: 'I started to realize that I could have all this capital to generate 3x more income.',
    },
    {
        image: '/images/certificate/certificate2.png',
        name: 'Mike McCullough',
        quote: "It’s incredible to be able to diversify and have different streams of income.",
    },
    {
        image: '/images/certificate/certificate3.png',
        name: 'Ava Thompson',
        quote: 'URFX helped me scale from a part-time trader to a consistent funded trader.',
    },
    {
        image: '/images/certificate/certificate4.png',
        name: 'Daniel Reyes',
        quote: 'The evaluations are fair and the payouts are always on time.',
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

export default function CertifiedTrader() {
    return (
        <section className="w-full py-12 md:pt-16 md:pb-28 px-4 xl:px-0 font-primary overflow-hidden">
            <motion.div
                className="max-w-[1240px] mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Heading */}
                <div className="text-center max-w-[700px] mx-auto mb-12 md:block hidden">
                    <motion.h2
                        className="text-[32px] leading-tight md:leading-none md:text-5xl font-bold text-white"
                        variants={cardVariants}
                    >
                        Certified Trader Achievements
                    </motion.h2>
                    <motion.p
                        className="mt-2.5 px-8 md:px-0 md:mt-4 text-sm md:text-lg text-gray-300 leading-relaxed"
                        variants={cardVariants}
                    >
                        Recognizing top traders for their achievements and payouts. These certificates celebrate
                        dedication, skill, and consistent performance.
                    </motion.p>
                </div>

                {/* Swiper slider */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    centeredSlides
                    loop
                    grabCursor
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1.3}
                    breakpoints={{
                        768: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!overflow-visible pb-6"
                >
                    {certificates.map((cert, index) => (
                        <SwiperSlide key={index} className='!w-[240px] md:!w-[400px]'>
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                className="relative boxes-lines bg-gradient-to-t from-white/10 to-white/5  h-[260px] md:h-[403px] "
                            >
                                <div className="relative z-10 h-full p-4 md:p-6 flex flex-col justify-end">
                                    <div className="flex-1">
                                        <div className="relative w-full mb-4">
                                            <Image
                                                src={cert.image}
                                                alt={`${cert.name} certificate`}
                                                width={450}
                                                height={247}
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="text-[10px] tracking-tight md:text-lg text-white font-medium">
                                            {cert.quote}
                                        </p>
                                    </div>
                                    <p className="mt-3 text-[13px] md:text-[22px] md:leading-tight font-medium text-white">
                                        {cert.name}
                                    </p>
                                </div>

                            
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section>
    );
}

