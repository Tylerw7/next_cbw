

import ImageCarousel from "./image-carousel";



const ParallaxGallery = () => {

    const images = [
        {
            src: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_124156.jpg",
            alt: ""
        },
        {
            src: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_124238.jpg",
            alt: ""
        },
        {
            src: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230125_143027.jpg",
            alt: ""
        },
        {
            src: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20220426_112826.jpg",
            alt: ""
        },
        {
            src: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20210922_165524.jpg",
            alt: ""
        },
        {
            src: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20200605_142512.jpg",
            alt: ""
        },
        {
            src: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20180914_143914.jpg",
            alt: ""
        },
        {
            src: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20161222_165457.jpg",
            alt: ""
        },
        
    ]


    
    return ( 
        
        <div className="p-4 w-[100vw] flex flex-col lg:flex-row">
            <div className="w-full lg:w-[30%] flex flex-col items-center mt-[25px]">
                <div className="flex items-start w-full mb-[25px] pl-[10px]">
                 <div className="bg-[#ffd21e] rounded-md p-1 font-bold w-fit text-[0.8rem]">Check out our custom kitchens</div>
                </div>    
                <h3 className="font-semibold text-[2rem] pl-[10px]">Discover the Craftsmanship of Custom Cabinets by Wettach:</h3>
                <p className="text-muted-foreground pl-[10px]">At Cabinetry by Wettach, we specialize in bringing your vision to life with expertly crafted custom cabinetry. Whether you&apos;re remodeling a kitchen, upgrading a bathroom, or adding built-in storage, our cabinets are designed with precision, functionality, and timeless beauty in mind. Explore our gallery to see the attention to detail, quality materials, and personalized designs that set our work apart.</p>
            </div>
            <div className="w-full lg:w-[70%] mt-[25px] mb-[25px]">
                <ImageCarousel
                    images={images}
                    interval={4000}
                    />
            </div>    
        </div>    
        
     );
}
 
export default ParallaxGallery;