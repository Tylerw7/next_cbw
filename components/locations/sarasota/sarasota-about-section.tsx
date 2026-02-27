import React from 'react'
import Image from 'next/image'
import {motion} from "motion/react"
import {Check} from "lucide-react"
import { Button } from '@/components/ui/button'
import { Raleway } from "next/font/google";


const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const SarasotaAboutSection = () => {
  return (
    <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-[#5a8495] font-semibold mb-2">ABOUT US</div>
                        <h2 className={raleway.className + " text-4xl font-bold mb-6"}>
                            Sarasota&apos;s Premier Cabinet & Renovation Experts
                        </h2>
                        <div className="w-20 h-1 bg-[#ffd21e] mb-6"></div>
                        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                            With over 15 years of experience serving the Sarasota community, we&apos;ve built our reputation on exceptional craftsmanship, personalized service, and unwavering attention to detail.
                        </p>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            Our team of skilled craftsmen and designers work closely with homeowners to bring their vision to life, creating custom cabinetry solutions that perfectly blend functionality with aesthetic appeal.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3">
                                <Check className="text-[#5a8495] mt-1 flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">Licensed & Insured</h4>
                                    <p className="text-gray-600 text-sm">Fully certified professionals</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="text-[#5a8495] mt-1 flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">Quality Materials</h4>
                                    <p className="text-gray-600 text-sm">Premium grade products</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="text-[#5a8495] mt-1 flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">Custom Designs</h4>
                                    <p className="text-gray-600 text-sm">Tailored to your needs</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="text-[#5a8495] mt-1 flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">Warranty Backed</h4>
                                    <p className="text-gray-600 text-sm">Guaranteed workmanship</p>
                                </div>
                            </div>
                        </div>
                        <Button className="bg-[#5a8495] hover:bg-[#4a7485] text-white px-8 py-6 text-lg rounded-lg">
                            Learn More About Us
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/Sarasota-image.jpg"
                                alt="Custom Cabinets Sarasota"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-[#ffd21e] p-8 rounded-xl shadow-xl">
                            <div className="text-5xl font-bold text-[#5a8495]">15+</div>
                            <div className="text-lg font-semibold mt-1">Years Experience</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
  )
}

export default SarasotaAboutSection