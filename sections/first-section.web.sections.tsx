import Image from "next/image"
import AnimationBrandsSliderWeb from "@/components/animation-brands.web.components";
import AnimationWordHeaderWeb from "@/components/animation-word.web.components";

const FirstSectionWeb = () => {
  return (
    <section
      className="relative rounded-lg flex flex-col gap-0 overflow-hidden mx-6"
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
            <AnimationWordHeaderWeb />
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
        <AnimationBrandsSliderWeb />
      </div>
    </section>
  )
}

export default FirstSectionWeb;