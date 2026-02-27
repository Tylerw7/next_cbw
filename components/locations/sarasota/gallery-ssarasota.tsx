import React, {useState} from 'react'
import Image from 'next/image';
import {ChevronLeft, ChevronRight} from "lucide-react"
import { Button } from '@/components/ui/button'
import { Raleway } from "next/font/google";



const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });




const GallerySection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const images = [
        { src: "/images/kitchen.jpg", title: "Modern Kitchen" },
        { src: "/images/kitchen.jpg", title: "Luxury Bathroom" },
        { src: "/images/kitchen.jpg", title: "Custom Closet" },
        { src: "/images/kitchen.jpg", title: "Entertainment Center" },
        { src: "/images/kitchen.jpg", title: "Home Office" },
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-[#5a8495] font-semibold mb-2">OUR WORK</div>
                    <h2 className={raleway.className + " text-4xl font-bold mb-4"}>
                        Recent Projects in Sarasota
                    </h2>
                    <div className="w-20 h-1 bg-[#ffd21e] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Take a look at some of our recent custom cabinetry installations throughout Sarasota.
                    </p>
                </div>

                <div className="relative">
                    {/* Main Carousel */}
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                            <h3 className="text-white text-3xl font-bold">{images[currentIndex].title}</h3>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    >
                        <ChevronLeft size={28} className="text-[#5a8495]" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    >
                        <ChevronRight size={28} className="text-[#5a8495]" />
                    </button>

                    {/* Thumbnail Navigation */}
                    <div className="flex justify-center gap-4 mt-8">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                    currentIndex === index ? 'border-[#5a8495] scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.title}
                                    width={80}
                                    height={80}
                                    className="object-cover w-full h-full"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Button className="bg-[#5a8495] hover:bg-[#4a7485] text-white px-8 py-6 text-lg rounded-lg">
                        View Full Gallery
                    </Button>
                </div>
            </div>
        </section>
    );
}


export default GallerySection;