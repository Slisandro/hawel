/* eslint-disable @next/next/no-img-element */
"use client";

import NavbarWeb from "@/components/navbar.web.components";
import { Button } from "@/components/ui/button";
import FirstSectionWeb from "@/sections/first-section.web.sections";
import SecondSectionWeb from "@/sections/second-section.web.sections";
import { BadgeCheck, Clock, Triangle } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen flex py-6 flex-col gap-2 h-auto relative bg-[#07071F] overflow-x-hidden">
      <NavbarWeb />
      <FirstSectionWeb />
      <SecondSectionWeb />
      <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[100px] gap-10">
        <div className="flex flex-col items-center justify-center gap-4 z-10">
          <h2 className="text-[#F5F5F7] text-[48px] font-semibold text-center">
            <span
              style={{
                background: "linear-gradient(90deg, #55CFED 0%, #55CFED 3%, #8AF3CA 10%, #8AF3CA 15%, #F5F5F7 22%, #F5F5F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Hawel
            </span>
            {" "} no solo gestiona pedidos, es un
            <br />
            cerebro comercial para tu negocio.
          </h2>
          <p className="text-[#92949F] text-[24px] font-medium text-center">
            Detecta oportunidades invisibles para el ojo humano. Es proactivo.
            <br />
            Y se vuelve más inteligente con el tiempo.
          </p>
        </div>

        <div className="w-full h-full grid grid-cols-2 px-48 gap-10">
          <div className="w-full h-full p-[32px] !h-[650px] flex-col flex items-center justify-between bg-[#F5F5F7] rounded-[32px]">
            <div className="w-full flex flex-col">
              <p className="text-[#07071F] text-[24px] font-medium w-full">Entiende las reglas de tu negocio.</p>
              <span className="text-[#676871] leading-[1.25] text-[20px] font-regular">Se sincroniza con tu stock real, valida las deudas de clientes y aplica listas de precios personalizadas.</span>
            </div>

            <div className="w-full rounded-lg">
              <Image
                src="/web/steps/macbook-mockup.png"
                alt="Second section image"
                height={400}
                width={400}
                className="object-contain w-full h-full"
              />
            </div>

            <span className="text-[20px] font-bold flex items-center w-full gap-2 text-[#07071F]">
              <BadgeCheck className="fill-[#55E3ED] text-white" />
              0 errores, pedidos 100% exactos.
            </span>
          </div>
          <div className="w-full h-full p-[32px] !h-[650px] flex-col flex items-center justify-between bg-[#F5F5F7] rounded-[32px]">
            <p className="text-[#07071F] text-[24px] font-medium w-full">Sube el ticket promedio.</p>
            <span className="text-[#676871] leading-[1.25] text-[20px] font-regular">Detecta el interés y sugiere ofertas o productos complementarios para aumentar el valor de cada orden—	sin que nadie tenga que hacer nada.</span>

            <div className="w-full rounded-lg">
              <Image
                src="/web/steps/phone-mockup.png"
                alt="Second section image"
                height={400}
                width={400}
                className="object-contain w-full h-full"
              />
            </div>
            
            <span className="text-[20px] font-bold flex items-center w-full gap-2 text-[#07071F]">
              <Triangle className="fill-[#8AF3CA] text-white" />
              19% ticket promedio
            </span>
          </div>
          <div className="w-full h-full p-[32px] !h-[650px]  flex-col flex items-center justify-between bg-[#F5F5F7] rounded-[32px]">
            <p className="text-[#07071F] text-[24px] font-medium w-full">Reduce la pérdida de clientes.</p>
            <span className="text-[#676871] leading-[1.25] text-[20px] font-regular mt-[4px]">Identifica cuando un cliente reduce su frecuencia o volumen de compra. Te avisa en el momento justo para que puedas reactivarlo antes de que se vaya.</span>

            <div className="w-full rounded-lg mt-[20px]">
              <Image
                src="/web/steps/popup-mockup.png"
                alt="Second section image"
                height={400}
                width={400}
                className="object-contain w-full h-full"
              />
            </div>
            
            <span className="text-[20px] font-bold flex items-center w-full gap-2 text-[#07071F] mt-[20px]">
              <Triangle className="rotate-180 fill-[#FD7366] text-white" />
              0 errores, pedidos 100% exactos.
            </span>
          </div>
          <div className="w-full h-full p-[32px] !h-[650px]  flex-col flex items-center justify-between bg-[#F5F5F7] rounded-[32px]">
            <p className="text-[#07071F] text-[24px] font-medium w-full">Vende activo las 24 horas</p>
            <span className="text-[#676871] leading-[1.25] text-[20px] font-regular mt-[4px]">Recibe, procesa y confirma pedidos incluso fuera del horario comercial, fines de semana o feriados.</span>

            <div className="w-full rounded-lg mt-[20px]">
              <Image
                src="/web/steps/notifications-mockup.png"
                alt="Second section image"
                height={400}
                width={400}
                className="object-contain w-full h-full"
              />
            </div>
            
            <span className="text-[20px] font-bold flex items-center w-full gap-2 text-[#07071F] mt-[20px]">
              <Clock className="fill-[#55E3ED] text-white" />
              0 errores, pedidos 100% exactos.
            </span>
          </div>
        </div>

        <Button className="p-[32px] bg-white text-[#07071F] rounded-full font-bold text-[20px]">
          Comenzar
        </Button>
      </section>
    </main>
  )
}