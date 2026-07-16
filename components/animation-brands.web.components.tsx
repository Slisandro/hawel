import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const AnimationBrandsSliderWeb = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const BRANDS = [
        {
            id: 1,
            src: "/web/brands/logo1.png",
            alt: "Marca 1",
            width: 40,
            height: 55,
        },
        {
            id: 2,
            src: "/web/brands/logo2.png",
            alt: "Marca 2",
            width: 40,
            height: 45,
        },
        {
            id: 3,
            src: "/web/brands/logo3.png",
            alt: "Marca 3",
            width: 35,
            height: 35,
        },
        {
            id: 4,
            src: "/web/brands/logo4.png",
            alt: "Marca 4",
            width: 140,
            height: 20,
        },
        {
            id: 5,
            src: "/web/brands/logo5.png",
            alt: "Marca 5",
            width: 80,
            height: 30,
        },
        {
            id: 6,
            src: "/web/brands/logo6.png",
            alt: "Marca 6",
            width: 60,
            height: 50,
        },
        {
            id: 7,
            src: "/web/brands/logo7.png",
            alt: "Marca 7",
            width: 110,
            height: 45,
        },
        {
            id: 8,
            src: "/web/brands/logo8.png",
            alt: "Marca 8",
            width: 50,
            height: 45,
        },
    ]

    const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: ["0%", "-50%"],
                transition: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                },
            });
        };
        startAnimation();
    }, [controls]);

    return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden px-4">
            <motion.div
                ref={sliderRef}
                className="flex items-center gap-20 whitespace-nowrap"
                animate={controls}
            >
                {duplicatedBrands.map((brand, index) => (
                    <div
                        key={`${brand.id}-${index}`}
                        className="relative flex items-center justify-center flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                        style={{ 
                            height: brand.height,
                            width: brand.width 
                        }}
                    >
                        <Image
                            src={brand.src}
                            alt={brand.alt}
                            className="relative object-contain w-auto h-full"
                            unoptimized
        fill
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AnimationBrandsSliderWeb;