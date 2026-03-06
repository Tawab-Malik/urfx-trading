"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Button } from "@heroui/react";
type FaqItemProps = {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
};

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
    return (
        <div
            className={`group font-primary cursor-pointer  py-3 px-4 md:px-6 md:py-5  hover:text-white ${isOpen
                ? `faqs-lines `
                : " bg-gradient-to-b from-white/10 to-white/5"
                }`}
        >
            <button
                className={`flex justify-between items-start cursor-pointer w-full text-start text-xl md:text-2xl  font-bold  ${isOpen ? `text-white` : "text-white group-hover:text-white"
                    }`}
                onClick={onClick}
            >
                <span className="max-w-[85%] md:w-full text-lg  md:text-2xl font-bold transition-all">{question}</span>
                {isOpen ? (
                    <RxCross2 className="h-6 w-6 text-white mt-1" />
                ) : (
                    <FiPlus className="h-6 w-6 text-white group-hover:text-white duration-300 mt-1" />
                )}
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div
                            className={`md:mt-3.5  text-start text-sm md:text-lg font-medium ${isOpen ? `text-white` : "text-white"
                                }`}
                            dangerouslySetInnerHTML={{ __html: answer }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
}

function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // first FAQ open by default

    const faqs = [
        {
            question: "What happens if you lose money in a Prop Firm?",
            answer:
                "Traders may be subject to risk limits, suspended trading, or even termination if they consistently incur losses beyond the agreed-upon limits."
        },
        {
            question: "What are the pros and cons of being a prop trader?",
            answer:
                "Traders may be subject to risk limits, suspended trading, or even termination if they consistently incur losses beyond the agreed-upon limits."
        },
        {
            question: "Do prop firms really pay out?",
            answer:
                "Traders may be subject to risk limits, suspended trading, or even termination if they consistently incur losses beyond the agreed-upon limits."
        },
        {
            question: "What is a Prop Trading Firm?",
            answer: `Traders may be subject to risk limits, suspended trading, or even termination if they consistently incur losses beyond the agreed-upon limits.`
        }
        ,
        {
            question: "Do you charge any other fees other than the initial assessment cost?",
            answer: `Traders may be subject to risk limits, suspended trading, or even termination if they consistently incur losses beyond the agreed-upon limits.`
        }

    ];

    return (
        <section className=" max-w-[840px] mx-auto  px-4 md:px-6 lg:px-8 xl:px-0 font-primary" id="faqs">
            <div className="relative pb-3 text-center">
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-[32px] leading-tight md:leading-none md:text-5xl font-bold text-white px-5 xl:px-0"

                >
                    Our Most Asked Questions
                </motion.h2>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
                    className="mt-2.5 mb-10 px-4 md:px-0 text-sm md:text-lg text-gray-300 leading-relaxed max-w-[560px] mx-auto"

                >
                    Check out our most frequently asked questions here for helpful insights and answers to common queries about our company and opportunities.
                </motion.p>
                <div className="space-y-6 w-full relative">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        />
                    ))}
                </div>
                {/* CTA Button */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
                    className="hidden md:flex justify-center mt-12"
                >
                    <Button className="faqs-cta-btn font-bold text-lg py-3.5 px-5 h-auto text-white rounded-none">
                        Got more questions?
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export default FAQs;