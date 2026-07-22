/* eslint-disable @next/next/no-img-element */
"use client";

import NavbarWeb from "@/components/navbar.web.components";
import { Button } from "@/components/ui/button";
import FirstSectionWeb from "@/sections/first-section.web.sections";
import ForthSectionWeb from "@/sections/forth-section.web.sections";
import FourthSectionWeb from "@/sections/fourth-section.web.sections";
import SecondSectionWeb from "@/sections/second-section.web.sections";
import ThirdSectionWeb from "@/sections/thrid-section.web.sections";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen flex md:pt-6 flex-col md:gap-2 h-auto relative bg-[#07071F] overflow-x-hidden">
      <NavbarWeb />

      <FirstSectionWeb />

      <SecondSectionWeb />

      <ThirdSectionWeb />

      <FourthSectionWeb />

      <ForthSectionWeb />

      <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[80px] gap-[24px] md:gap-20 px-[24px] md:px-24">
        <div className="text-center z-10 text-[#F5F5F7] flex-1">
          <h2 className="text-[#F5F5F7] text-[48px] w-full font-semibold text-center" style={{ letterSpacing: "-3%", lineHeight: "46px" }}>
            La {" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2B39D2 20%, #8AF3CA 50%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              confianza
            </span>
            {" "}
            se gana
            <br className="hidden md:block" /> {" "}
            con resultados.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-2 w-full md:px-24">
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center w-full h-full">
            <img
              src="/web/bloque 1.png"
              alt="Second section image"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center h-full">
            <img
              src="/web/bloque 2.png"
              alt="Second section image"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center h-full">
            <img
              src="/web/bloque 3.png"
              alt="Second section image"
              className="hidden md:block object-contain w-full h-full"
            />
            <img
              src="/web/bloque 3-mobile.png"
              alt="Second section image"
              className="md:hidden object-contain w-auto md:h-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center h-full">
            <img
              src="/web/bloque 4.png"
              alt="Second section image"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center h-full">
            <img
              src="/web/bloque 5.png"
              alt="Second section image"
              className="md:block hidden object-contain w-full h-full"
            />
            <img
              src="/web/bloque 5-mobile.png"
              alt="Second section image"
              className="md:hidden object-contain w-auto md:h-full h-[450px]"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center h-full">
            <img
              src="/web/bloque 6.png"
              alt="Second section image"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] h-auto flex flex-col md:flex-row items-center justify-center mt-[80px] md:mt-[100px] gap-8 md:gap-20 px-[24px] md:px-24">
        <img
          src="/web/lock-hawel.png"
          alt="Lock Hawel"
          className="object-contain h-[100px]"
        />
        <div className="flex flex-col items-start
         justify-center z-10 gap-2 md:gap-0">
          <span
            className="text-[24px] md:text-[32px] font-semibold text-center mx-auto md:mx-0 md:text-start"
            style={{
              background: "linear-gradient(90deg, #FD7366 30%, #7A3AEF 70%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Privacidad y seguridad 100%
          </span>
          <p className="text-[#F5F5F7] mx-auto md:mx-0 text-center md:text-start text-[16px] md:text-[24px] md:text-[20px] font-bold">Tu información es tuya y de tus clientes.</p>
          <span className="text-[#92949F] text-center md:text-start text-[16px] md:text-[24px] md:text-[20px] font-normal">
            Operamos bajo estrictos estándares de seguridad
            <br />
            para garantizar la confidencialidad de la información.
          </span>
        </div>
      </section>

      <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[80px] gap-0">
        <div className="w-full md:h-[350px] md:h-auto mx-auto mb-6 overflow-hidden rounded-lg">
          <img
            src="/web/users.png"
            alt="Users"
            className="md:block hidden object-cover md:object-contain w-full h-full"
          />
          <img
            src="/web/users-mobile.png"
            alt="Users"
            className="md:hidden object-cover w-full h-full"
          />
        </div>
        <div className="px-[24px] md:px-24 flex flex-col items-center justify-center gap-4 z-10">
          <h3 className="text-[32px] md:text-[48px] font-semibold text-center">
            La Inteligencia Artificial
            <br />
            llegó para quedarse
          </h3>
          <p className="text-[24px] text-center md:text-start md:text-[32px] text-[#92949F]">
            Da el paso que los líderes de la industria
            <br className="hidden md:block" />
            ya están dando en toda Latinoamérica.
          </p>
          <Button className="p-[32px] bg-white text-[#07071F] rounded-full font-bold text-[20px]">
            Comenzar
          </Button>
        </div>
      </section>

      <Section9 />

      <section className="min-h-[100vh] h-[max-content] flex items-center flex-col relative justify-between mt-[80px]">
        <img
          src="/web/footer-background.png"
          alt="Section 9"
          className="object-cover w-full mx-auto h-full absolute z-0"
        />

        <div />

        <img
          src="/web/logo md.png"
          alt="Logo"
          className="object-contain mx-auto md:mb-6 z-10 w-[200px] md:w-[400px]"
        />

        <div className="w-full flex items-center justify-between z-10 pb-[60px] md:pb-4 flex-col md:flex-row gap-[40px] md:gap-6 md:gap-0">
          <p className="text-[16px] text-[#92949F]" style={{ letterSpacing: "-1%" }}>
            Hawel, Todos los derechos reservados @ 2026
          </p>
          <div className="flex items-center gap-[40px] md:gap-6">
            <Link href="/" className="text-[#F5F5F7] text-[20px] font-bold">Home</Link>
            <Link href="/sobre-hawel" className="text-[#F5F5F7] text-[20px] font-bold">Sobre Hawel</Link>
            <Link href="/contacto" className="text-[#F5F5F7] text-[20px] font-bold">Contacto</Link>
          </div>
          <div className="flex items-center justify-center gap-[20px]">
            <img
              src="/web/security 1.png"
              alt="Security"
              className="object-contain mx-auto z-10"
              width="50"
              height="50"
            />

            <img
              src="/web/security 2.png"
              alt="Security"
              className="object-contain mx-auto z-10"
              width="100"
              height="50"
            />
          </div>
        </div>
      </section>
    </main >
  )
}

const Section9 = () => {
  const [open, setOpen] = React.useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  });

  const faqs = [
    {
      id: 1,
      question: "¿Reemplaza a nuestro equipo actual de preventistas o atención al cliente?",
      answer: (
        <>
          <span className="text-[#F5F5F7]">No, los potencia. </span>
          Hawel absorbe el 80% del trabajo administrativo y rutinario —la carga manual de datos, la transcripción de audios y el control de faltantes—. Esto libera a tu fuerza de ventas para que se enfoquen puramente en negociar, fidelizar clientes y abrir nuevas cuentas en la calle.
        </>
      )
    },
    {
      id: 2,
      question: "¿Funciona solo o necesita un humano?",
      answer: "Es autónomo para las órdenes de rutina. Si detecta un caso que requiere criterio humano —un reclamo complejo o una excepción comercial—, lo escala de inmediato a tu vendedor."
    },
    {
      id: 3,
      question: "¿Qué formatos de mensajes puede entender?",
      answer: (
        <>
          Todos. Tus clientes o vendedores pueden enviar mensajes de texto tradicionales, notas de voz (largas o con ruido) o fotos de listas manuscritas.{" "}
          <span className="text-[#F5F5F7] font-bold">La IA procesa todo en segundos.</span>
        </>
      )
    },
    {
      id: 4,
      question: "¿Cómo evita la IA cometer errores con las listas de precios, deudas o stock?",
      answer: "Hawel no es un bot que tira respuestas automáticas; lee tu ERP en tiempo real. Antes de confirmar cualquier pedido por WhatsApp, el sistema valida el stock neto disponible, verifica si el cliente tiene deuda corriente y aplica la lista de precios personalizada que le corresponde. Si hay alguna inconsistencia, el pedido se frena y se notifica a tu equipo."
    },
    {
      id: 5,
      question: "¿Cómo se maneja la confidencialidad de la información de mi empresa?",
      answer: "La seguridad es nuestra absoluta prioridad. Toda la transferencia de datos entre tus canales de venta y tu ERP viaja de forma encriptada bajo protocolos seguros (SSL/HTTPS). Hawel solo procesa la información necesaria para validar y cargar las órdenes, garantizando el aislamiento de tus bases de datos."
    },
    {
      id: 6,
      question: "¿Cuánto demora la implementación?",
      answer: (
        <>
          Al ser una solución en la nube, el despliegue es ágil. Entre el análisis técnico y el período de pruebas para garantizar fricción cero, toma menos de{" "}
          <span className="text-[#F5F5F7] font-bold">2 semanas.</span>
        </>
      )
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpen({ ...open, [id]: !open[id] });
  };

  return (
    <section className="min-h-[100vh] h-auto w-full px-[24px] md:w-2/3 mx-auto flex items-center flex-col justify-start mt-0 md:mt-[100px] gap-6">
      <Image
        src="/web/help.png"
        alt="Help"
        width={300}
        height={150}
        className="object-contain mb-6"
      />
      <h3 className="text-[48px] font-semibold text-center">
        ¿Preguntas?{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Respuestas.
        </span>
      </h3>

      <div className="flex-1 flex flex-col items-center justify-center gap-[16px] w-full">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            id={faq.id}
            isOpen={open[faq.id]}
            onToggle={() => toggleFAQ(faq.id)}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};

const FAQItem = ({
  isOpen,
  onToggle,
  question,
  answer
}: {
  id: number;
  isOpen: boolean;
  onToggle: () => void;
  question: string;
  answer: React.ReactNode;
}) => {
  return (
    <div
      className="w-full rounded-[32px] h-full p-[1px]"
      style={{
        background: "linear-gradient(45deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full h-full rounded-[32px] p-[24px] flex flex-col items-start text-start justify-start gap-4"
        style={{
          background: "#07071fF9"
        }}
      >
        <div className="flex items-center justify-between gap-[16px] w-full">
          {isOpen ? (
            <ChevronUp
              className="relative text-[#8AF3CA] shrink-0"
              style={{ width: "32px", height: "32px" }}
            />
          ) : (
            <ChevronDown
              className="relative text-[#8AF3CA] shrink-0"
              style={{ width: "32px", height: "32px" }}
            />
          )}
          <span className="text-[#F5F5F7] text-[20px] font-bold flex-1">
            {question}
          </span>
        </div>
        {isOpen && (
          <span className="text-[#92949F] text-[20px] font-normal">
            {answer}
          </span>
        )}
      </button>
    </div>
  );
};