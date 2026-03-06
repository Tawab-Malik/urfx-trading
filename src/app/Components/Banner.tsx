'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@heroui/react';



export default function Banner() {
    return (
        <section>
            <div className='overflow-hidden text-center md:text-start max-w-[1340px] mx-auto font-primary pt-16 md:pt-28 md:pb-12 '>
                <div className='max-w-[1240px] mx-auto xl:px-0 px-4 relative'>
                    <div className="max-w-[650px] ">
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, ease: "easeInOut", }}
                            className="text-[28px] leading-tight md:leading-none md:text-5xl font-bold text-white"
                        >
                            We&apos;re bringing the best and brightest traders together.
                        </motion.h2>
                        {/* CTA Button */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
                            className="flex justify-center md:justify-start mt-8"
                        >
                            <Button className="faqs-cta-btn font-bold text-sm md:text-lg py-2 md:py-3.5 px-5 h-auto text-white rounded-none">
                            Join Community
                            </Button>
                        </motion.div>
                        <Image
                            src={"/images/banner/arrow.png"}
                            alt={``}
                            width={362}
                            height={298}
                            className="relative mx-auto lg:absolute pt-10 md:pt-0 right-0 -bottom-0 md:-bottom-20"
                        />

                    </div>
                </div>


            </div>
        </section>
    )
}