
//#a8cbda
//import { MapPin, Contact, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
//import Link from "next/link"
import { Raleway } from "next/font/google";
import { motion } from "motion/react"



const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-r from-[#5a8495] to-[#4a7485] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={raleway.className + " text-4xl md:text-5xl font-bold mb-6"}>
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                            Schedule your free consultation today and let&apos;s bring your vision to life with custom cabinetry designed just for you.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button className="bg-[#ffd21e] hover:bg-[#ffdb4d] text-black px-10 py-7 text-lg rounded-lg font-bold shadow-lg">
                                Get Free Quote
                            </Button>
                            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#5a8495] px-10 py-7 text-lg rounded-lg font-semibold">
                                Call: 941-232-2817
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
  )
}

export default CallToAction