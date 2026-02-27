import React from 'react'
import {MapPin, Phone, Clock} from "lucide-react"
import Link from 'next/link'
import { Raleway } from "next/font/google";
import { motion } from "motion/react"



const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const QuickContactBar = () => {
  return (
    <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-[#5a8495] font-semibold mb-2">GET IN TOUCH</div>
                    <h2 className={raleway.className + " text-4xl font-bold mb-4"}>
                        Visit Our Sarasota Showroom
                    </h2>
                    <div className="w-20 h-1 bg-[#ffd21e] mx-auto mb-6"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
                    >
                        <div className="bg-[#5a8495] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin size={32} className="text-white" />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Location</h3>
                        <p className="text-gray-700 mb-4">1746 10th Way Unit B<br />Sarasota, FL 34236</p>
                        <Link href="#" className="text-[#5a8495] font-semibold hover:underline">
                            Get Directions →
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
                    >
                        <div className="bg-[#5a8495] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone size={32} className="text-white" />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Phone</h3>
                        <p className="text-gray-700 mb-4">Call us for immediate assistance</p>
                        <a href="tel:941-232-2817" className="text-[#5a8495] font-semibold text-lg hover:underline">
                            941-232-2817
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
                    >
                        <div className="bg-[#5a8495] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock size={32} className="text-white" />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Business Hours</h3>
                        <p className="text-gray-700">
                            Monday - Friday<br />
                            8:00 AM - 5:00 PM<br />
                            <span className="text-sm mt-2 block">Weekends by appointment</span>
                        </p>
                    </motion.div>
                </div>

                {/* Map placeholder */}
                <div className="mt-12 h-96 bg-gray-200 rounded-2xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps?q=27.345737648485372,-82.53551749332442&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
  )
}

export default QuickContactBar