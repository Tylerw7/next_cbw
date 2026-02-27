import React, {useState} from 'react'
import { ChevronRight } from "lucide-react"
import { Raleway } from "next/font/google";
import { motion } from "motion/react"



const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });





const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How long does a typical cabinet installation take?",
            answer: "Most kitchen cabinet installations take 3-5 days, depending on the size and complexity of the project. Bathroom vanities typically take 1-2 days. We'll provide a detailed timeline during your consultation."
        },
        {
            question: "Do you offer free consultations and estimates?",
            answer: "Yes! We offer complimentary in-home consultations where we'll assess your space, discuss your vision, and provide a detailed estimate with no obligation."
        },
        {
            question: "What types of materials do you work with?",
            answer: "We work with a wide variety of premium materials including solid wood (oak, maple, cherry), MDF, plywood, and various finishes. We'll help you select the best materials for your budget and aesthetic preferences."
        },
        {
            question: "Are your cabinets custom-made or pre-fabricated?",
            answer: "We specialize in custom cabinetry built specifically for your space. Each piece is crafted to your exact specifications, ensuring perfect fit and personalized design."
        },
        {
            question: "Do you handle the entire renovation process?",
            answer: "Yes! We manage everything from design and material selection to demolition, installation, and final touches. We can also coordinate with other trades like plumbers and electricians if needed."
        },
        {
            question: "What warranty do you offer on your work?",
            answer: "We stand behind our craftsmanship with a comprehensive warranty. Cabinet construction is covered for 5 years, and installation workmanship is guaranteed for 2 years."
        },
        {
            question: "How much does custom cabinetry cost?",
            answer: "Pricing varies based on materials, size, and complexity. Kitchen cabinets typically range from $8,000-$25,000+, while bathroom vanities start around $2,000. We'll provide a detailed quote tailored to your project."
        },
        {
            question: "Do you work in areas outside of Sarasota?",
            answer: "Yes! While we're based in Sarasota, we serve the entire surrounding area including Bradenton, Venice, Lakewood Ranch, and Siesta Key."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-[#5a8495] font-semibold mb-2">FAQ</div>
                    <h2 className={raleway.className + " text-4xl font-bold mb-4"}>
                        Frequently Asked Questions
                    </h2>
                    <div className="w-20 h-1 bg-[#ffd21e] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg">
                        Everything you need to know about our custom cabinetry services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left bg-gray-200 hover:bg-gray-300 transition-colors"
                            >
                                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                                <ChevronRight
                                    size={24}
                                    className={`text-[#5a8495] flex-shrink-0 transition-transform ${
                                        openIndex === index ? 'rotate-90' : ''
                                    }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 leading-relaxed p-2">{faq.answer}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;