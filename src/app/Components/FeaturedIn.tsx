'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
const features = [
  {
    icon: '/images/featuredin/cash.png', // you can replace with SVG or React icon
    title: 'Up to 95%',
    subtitle: 'Profit Split',
  },
  {
    icon: '/images/featuredin/money.png',
    title: 'Up to 1M',
    subtitle: 'Trading Accounts',
  },
  {
    icon: '/images/featuredin/house.png',
    title: '24 Hours',
    subtitle: 'Guaranteed Payout',
  },
  {
    icon: '/images/featuredin/chart.png',
    title: 'No Time Limit',
    subtitle: 'in Challenge Phase',
  },
];

export default function FeaturedIn() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 xl:px-0 py-4 md:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center text-center md:gap-y-2 hover:scale-105 transition-transform"
          >
            <Image src={feature.icon} alt={feature.title} width={100} height={100} />
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-1">{feature.title}</h3>
            <p className="text-gray-300 text-xs md:text-base font-medium">{feature.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}