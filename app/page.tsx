"use client";

import NavbarWeb from "@/components/navbar.web.components";
import { Card } from "@/components/ui/card";
import FirstSectionWeb from "@/sections/first-section.web.sections";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen flex py-6 flex-col gap-2 h-auto relative bg-[#07071F] overflow-x-hidden">
      <NavbarWeb />
      <FirstSectionWeb />
      <section className="min-h-[100vh] h-auto py-10 flex items-center flex-col justify-start gap-30 mt-[200px]">
        <div className="text-[#F5F5F7] text-[32px] font-bold flex flex-col items-center justify-center gap-4 z-10">
          <h2>De la informalidad — A la perfección.</h2>

          <p className="text-center font-semibold text-[48px]">
            Hawel convierte el caos de mensajes,
            <br />
            audios y fotos de WhatsApp en pedidos
            <br />
            <span
              className="font-bold text-[48px]"
              style={{
                background: "linear-gradient(to right, #FD7366 0%, #E8656A 25%, #C65B9F 50%, #A34CC5 75%, #7A3AEF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              listos para preparar.
            </span>
          </p>

          <p className="text-[24px] leading-[1.5] text-center text-[#92949F] font-medium">
            Sin errores. Sin carga manual. Y sin nada perdido.
          </p>
        </div>

        {/* Steps */}
        <div className="w-full flex items-center justify-center h-auto min-h-[500px] relative">
          {/* Contenedor izquierdo - Card */}
          <div className="relative scale-75 flex-1 px-24 h-full w-full flex items-center justify-center gap-10">
            <Image
              className="absolute top-[-20%] left-1/2 -translate-x-1/2 z-5"
              src="/web/steps/background-grow-step-1.png"
              alt="Steps"
              width={300}
              height={300}
            />

            <Image
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-15 h-15"
              src="/web/steps/step-01.png"
              alt="Steps"
              width={60}
              height={60}
            />

            <Card
              className="w-full flex flex-col items-center justify-start p-6 rounded-[40px] relative z-10 h-auto"
              style={{
                background: "radial-gradient(circle at center, #202037 0%, #202037 20%, transparent 100%)",
              }}
            >
              <p className="text-[24px] text-center text-[#F5F5F7] font-bold pt-6">
                El cliente pide como quiere.
              </p>

              <div className="!relative grid-cols-2 grid-rows-2 grid gap-4 flex-1 w-full h-auto relative z-10">
                <Image
                  className="absolute top-0 left-1/2 bottom-0 -translate-x-1/2 z-10 w-full h-auto"
                  src="/web/steps/background-circle.png"
                  alt="Steps"
                  width={200}
                  height={200}
                />

                <div className="flex flex-col items-center justify-center gap-2 bg-[rgba(245,245,247,0.05)] rounded-[24px] p-2">
                  <p className="text-[20px] text-center text-[#F5F5F7] font-bold">
                    Texto
                  </p>
                  <div className="relative w-full aspect-square max-h-[200px]">
                    <Image
                      src="/web/steps/texto.png"
                      alt="Chat con texto"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[12px] text-center font-bold text-[#92949F]">
                    Hawel recopila los mensajes recibidos
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 bg-[rgba(245,245,247,0.05)] rounded-[24px] p-2">
                  <p className="text-[20px] text-center text-[#F5F5F7] font-bold">
                    Audio
                  </p>
                  <div className="relative w-full aspect-square max-h-[200px]">
                    <Image
                      src="/web/steps/audio.png"
                      alt="Chat con audio"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[12px] text-center font-bold text-[#92949F]">Interpreta, extrae y procesa audios</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 bg-[rgba(245,245,247,0.05)] rounded-[24px] p-2">
                  <p className="text-[20px] text-center text-[#F5F5F7] font-bold">
                    Imágen
                  </p>
                  <div className="relative w-full h-[200px]">
                    <Image
                      src="/web/steps/imagen.png"
                      alt="Chat con imagen"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[12px] text-center font-bold text-[#92949F]">Transforma pedidos a mano.</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 bg-[rgba(245,245,247,0.05)] rounded-[24px] p-2">
                  <p className="text-[20px] text-center text-[#F5F5F7] font-bold">
                    PDF
                  </p>
                  <div className="relative w-full h-[200px]">
                    <Image
                      src="/web/steps/pdf.png"
                      alt="Chat con PDF"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[12px] text-center font-bold text-[#92949F]">Extrae la info de PDF’s</p>
                </div>
              </div>
            </Card>
          </div>

          <div
            className="relative flex-1 h-full flex items-center justify-center min-h-[100vh]"
            style={{
              backgroundImage: "url('/web/steps/background-step-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>
    </main>
  )
}