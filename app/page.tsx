"use client";

import Image from "next/image"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen flex p-6 flex-col gap-2 h-auto relative bg-[#07071F]">
      <Navbar />
      <section
        className="relative rounded-lg flex flex-col gap-0 overflow-hidden"
        style={{
          backgroundImage: "url('/web/header-image-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Contenido principal */}
        <div className="relative z-10 grid grid-cols-3 items-center px-20 text-white">
          {/* Columna izquierda - Texto */}
          <div className="col-span-2 w-full h-[80%] flex flex-col items-start justify-center gap-8">
            <p className="text-5xl font-semibold text-start leading-[1.2]">
              La Inteligencia Artificial
              <br />
              que vende y opera en tu
              <br />
              <AnimationWordHeader />
            </p>
            <p className="text-2xl text-start leading-[1.4]">
              Incrementa tus ventas. Gestiona tus pedidos.
              <br />
              Ayuda a tus vendedores. Todo, por WhatsApp.
            </p>
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
              Conocer más
            </button>
          </div>

          {/* Columna derecha - iPhone */}
          <div className="col-span-1 w-full h-[80%] flex items-center justify-center pl-8">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/web/iphone-contenido.png"
                alt="iPhone con contenido"
                width={400}
                height={600}
                className="object-contain w-auto h-full"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>

        {/* Slider de marcas - Parte inferior */}
        <div className="relative z-10 w-full h-[120px] flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
          <AnimationBrandsSlider />
        </div>
      </section>
      <section className="h-[100vh]">
        {/* Contenido de la segunda sección */}
      </section>
    </main>
  )
}

const Navbar = () => {
  return (
    <nav className="z-50 bg-transparent fixed top-8 left-0 right-0 flex items-center justify-between h-16 px-4 md:px-10 lg:px-20 !text-white">
      <button className="flex-shrink-0">
        <Image
          src="/hawel.webp"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain h-full w-auto"
          loading="eager"
          priority
        />
      </button>
      <div className="flex items-center justify-end flex-1 gap-4 md:gap-8 lg:gap-12 ml-4">
        <Link href="/" className="hover:opacity-70 transition-opacity text-sm md:text-base">Home</Link>
        <Link href="/sobre-hawel" className="hover:opacity-70 transition-opacity text-sm md:text-base">Sobre Hawel</Link>
        <Link href="/contacto" className="hover:opacity-70 transition-opacity text-sm md:text-base">Contacto</Link>
      </div>
    </nav>
  )
}

const AnimationWordHeader = () => {
  const words = ["distribuidora.", "mayorista.", "marca."];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="text-start inline-block h-[1.2em] relative overflow-hidden w-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            background: "linear-gradient(to right, #5CF2F2, #58D4EC, #5FB7EC, #688FEE, #6F73EE, #7650F2, #8C43DD, #A34CC5, #AD50BA, #C65B9F, #DB638A, #EA6B79, #FB7269)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const AnimationBrandsSlider = () => {
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
            className="flex items-center justify-center h-12 w-auto flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={brand.width}
              height={brand.height}
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};