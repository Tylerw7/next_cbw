"use client"

import { ParallaxScroll } from "../ui/parallax-scroll";



const ParallaxGallery = () => {

    const images = [
        "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_124156.jpg",
        "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_124213.jpg",
        "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_124520.jpg",
        "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230118_145310.jpg",
        "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230118_145310.jpg",
        "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230118_145310.jpg",
        "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230118_145310.jpg",
        "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230118_145310.jpg",
    ]


    
    return ( 
        
        <ParallaxScroll images={images} />
        
     );
}
 
export default ParallaxGallery;