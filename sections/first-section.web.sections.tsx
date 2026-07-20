import Image from "next/image"
import AnimationBrandsSliderWeb from "@/components/animation-brands.web.components";
import AnimationWordHeaderWeb from "@/components/animation-word.web.components";

const FirstSectionWeb = () => {
  return (
    <section
      className="relative rounded-lg flex flex-col gap-0 overflow-hidden w-full mx-0 md:mx-6"
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
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center md:px-20 pt-30 md:pt-0 text-white gap-8 md:gap-0">
        {/* Columna izquierda - Texto */}
        <div className="col-span-1 md:col-span-2 w-full h-[80%] flex flex-col items-center md:items-start justify-center gap-8">
          <p className="text-5xl font-semibold text-center md:text-start leading-[1.2]">
            La Inteligencia Artificial
            <br className="hidden md:block" /> {" "}
            que 
            <br className="block md:hidden" /> vende y opera 
            <br className="block md:hidden" /> en tu
            <br className="hidden md:block" />
            <AnimationWordHeaderWeb />
          </p>
          <p className="text-2xl text-center md:text-start leading-[1.4]">
            Incrementa tus ventas. Gestiona tus pedidos.
            <br />
            Ayuda a tus vendedores. Todo, por WhatsApp.
          </p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Conocer más
          </button>
        </div>

        {/* Columna derecha - iPhone */}
        <div className="col-span-1 px-16 w-full md:h-[80%] flex items-center justify-center mx-auto md:pl-8">
          <div className="relative w-full h-full flex items-center justify-center mx-auto">
            <Image
              src="/web/iphone-contenido.png"
              alt="iPhone con contenido"
              width={400}
              height={600}
              className="object-contain w-auto h-full mx-auto"
              unoptimized
              priority
            />
          </div>
        </div>
      </div>

      {/* Slider de marcas - Parte inferior */}
      <div className="relative z-10 mt-6 md:mt-0 w-full h-[120px] flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
        <AnimationBrandsSliderWeb />
      </div>
    </section>
  )
}

export default FirstSectionWeb;