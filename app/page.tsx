/* eslint-disable @next/next/no-img-element */
"use client";

import NavbarWeb from "@/components/navbar.web.components";
import { Button } from "@/components/ui/button";
import FirstSectionWeb from "@/sections/first-section.web.sections";
import SecondSectionWeb from "@/sections/second-section.web.sections";
import { BadgeCheck, Box, ChevronDown, Clock, DollarSign, PackageX, Shield, ShoppingCart, Ticket, Triangle, TriangleAlert, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen flex md:pt-6 flex-col gap-2 h-auto relative bg-[#07071F] overflow-x-hidden">
      <NavbarWeb />
      <FirstSectionWeb />

      <SecondSectionWeb />
      
      <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[100px] px-[24px] gap-10">
        <div className="flex flex-col items-center justify-center gap-4 z-10">
          <h2 className="text-[#F5F5F7] text-[32px] text-start md:text-[48px] font-semibold md:text-center">
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
          <p className="text-[#92949F] text-[20px] md:text-[24px] font-medium text-start md:text-center">
            Detecta oportunidades invisibles para el ojo humano. Es proactivo.
            <br />
            Y se vuelve más inteligente con el tiempo.
          </p>
        </div>

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 md:px-48 gap-10">
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

      <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[80px] md:mt-[100px] gap-8 md:gap-20 md:px-24">
        <div className="text-center z-10 text-[#F5F5F7] flex flex-col items-center gap-2 px-[24px]">
          <p className="font-semibold text-[24px] md:text-[32px]">Además,</p>

          <h2 className="text-[#F5F5F7] text-[32px] md:text-[48px] font-semibold text-center leading-[1.25]">
            Te brinda
            <span
              style={{
                background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {" "}
              datos exactos
            </span>
            <br />
            de todo lo que pasa.
          </h2>
          <p className="text-[#F5F5F7] text-[24px] font-medium">Más análisis. Mejores decisiones. Más crecimiento.</p>
        </div>

        <div
          className="relative w-full h-[max-content] flex items-center py-8"
        >
          <img
            src="/web/section4-background.png"
            alt="Second section image"
            className="absolute w-full h-full object-cover z-0"
          />

          <div className="grid md:grid-cols-4 gap-4 z-100 items-center px-4 w-full h-full md:py-20">
            <div className="w-full h-full bg-[#F5F5F70D] p-[24px] rounded-[32px] flex flex-col items-start gap-3">
              <div
                className="bg-[#07071F33] p-[16px] rounded-full border"
                style={{
                  borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                }}
              >
                <ShoppingCart />
              </div>
              <p className="text-[#F5F5F7] font-bold text-[20px] mb-0">Pedidos totales</p>
              <p className="text-[#F5F5F7] font-medium text-[20px] mb-0">Hoy</p>

              <span
                className="text-[40px] font-semibold mt-auto"
                style={{
                  background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                17
              </span>
            </div>
            <div className="w-full h-full bg-[#F5F5F70D] p-[24px] rounded-[32px] flex flex-col items-start gap-3">
              <div
                className="bg-[#07071F33] p-[16px] rounded-full border"
                style={{
                  borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                }}
              >
                <DollarSign />
              </div>
              <p className="text-[#F5F5F7] font-bold text-[20px] mb-0">Facturación total</p>
              <p className="text-[#F5F5F7] font-medium text-[20px] mb-0">Últimos 3 días</p>

              <span
                className="text-[40px] font-semibold mt-auto"
                style={{
                  background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                $4.445.600
              </span>
            </div>
            <div className="w-full h-full bg-[#F5F5F70D] p-[24px] rounded-[32px] flex flex-col items-start gap-3">
              <div
                className="bg-[#07071F33] p-[16px] rounded-full border"
                style={{
                  borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                }}
              >
                <Ticket />
              </div>
              <p className="text-[#F5F5F7] font-bold text-[20px] mb-0">Ticket promedio</p>
              <p className="text-[#F5F5F7] font-medium text-[20px] mb-0">Últimos 7 días</p>

              <span
                className="text-[40px] font-semibold mt-auto"
                style={{
                  background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                $125.600
              </span>
            </div>
            <div className="w-full h-full bg-[#F5F5F70D] p-[24px] rounded-[32px] flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center gap-2">
                <Triangle className="fill-[#8AF3CA] w-[24px] h-[24px] text-[#8AF3CA]" />
                <p className="text-[64px] text-[#8AF3CA]">12,4%</p>
              </div>
              <p className="text-[#F5F5F7] font-bold text-[24px]">vs periodo anterior</p>
            </div>
            <div className="w-full h-full bg-[#F5F5F70D] p-[24px] rounded-[32px] flex flex-col items-start gap-3">
              <div
                className="bg-[#07071F33] p-[16px] rounded-full border"
                style={{
                  borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                }}
              >
                <User />
              </div>
              <p className="text-[#F5F5F7] font-bold text-[20px] mb-0">Top vendedores</p>
              <p className="text-[#F5F5F7] font-medium text-[20px] mb-0">Últimos 7 días</p>

              <div className="flex flex-col w-full gap-2 mt-auto">
                <div className="flex bg-[#F5F5F7]/5 rounded-[20px] py-1 px-3 items-center gap-3 w-full">
                  <div className="w-2 h-2 bg-[#8AF3CA] rounded-full" />
                  <span className="font-bold text-[16px] text-[#F5F5F7]">Manuel Zaguín</span>
                </div>
                <div className="flex bg-[#F5F5F7]/5 rounded-[20px] py-1 px-3 items-center gap-3 w-full">
                  <div className="w-2 h-2 bg-[#8AF3CA] rounded-full" />
                  <span className="font-bold text-[16px] text-[#F5F5F7]">Pablo Díaz</span>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-[#F5F5F70D] p-[24px] rounded-[32px] flex flex-col items-start gap-3">
              <div
                className="bg-[#07071F33] p-[16px] rounded-full border"
                style={{
                  borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                }}
              >
                <TriangleAlert />
              </div>
              <p className="text-[#F5F5F7] font-bold text-[20px] mb-0">Clientes en riesgo</p>
              <p className="text-[#F5F5F7] font-medium text-[20px] mb-0">Hoy</p>

              <span
                className="text-[40px] font-semibold mt-auto"
                style={{
                  background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                3
              </span>
            </div>
            <div className="w-full h-full bg-[#F5F5F70D] p-[24px] rounded-[32px] flex flex-col items-start gap-3">
              <div
                className="bg-[#07071F33] p-[16px] rounded-full border"
                style={{
                  borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                }}
              >
                <Box />
              </div>
              <p className="text-[#F5F5F7] font-bold text-[20px] mb-0">Top productos</p>
              <p className="text-[#F5F5F7] font-medium text-[20px] mb-0">Últimos 90 días</p>

              <div className="flex flex-col w-full gap-2 mt-auto">
                <div className="flex bg-[#F5F5F7]/5 rounded-[20px] py-1 px-3 items-center gap-3 w-full">
                  <div className="w-2 h-2 bg-[#8AF3CA] rounded-full" />
                  <span className="font-bold text-[16px] text-[#F5F5F7]">Harina 0000</span>
                </div>
                <div className="flex bg-[#F5F5F7]/5 rounded-[20px] py-1 px-3 items-center gap-3 w-full">
                  <div className="w-2 h-2 bg-[#8AF3CA] rounded-full" />
                  <span className="font-bold text-[16px] text-[#F5F5F7]">Chocolate XL</span>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-[#F5F5F70D] p-[24px] rounded-[32px] flex flex-col items-start gap-3">
              <div
                className="bg-[#07071F33] p-[16px] rounded-full border"
                style={{
                  borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                }}
              >
                <PackageX />
              </div>
              <p className="text-[#F5F5F7] font-bold text-[20px] mb-0">Pedidos sin stock</p>
              <p className="text-[#F5F5F7] font-medium text-[20px] mb-0">Últimos 7 días</p>

              <span
                className="text-[40px] font-semibold mt-auto"
                style={{
                  background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                2
              </span>
            </div>
          </div>


        </div>
      </section>

      <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[80px] md:mt-[100px] px-[24px] md:px-24">
        <div className="bg-[#F5F5F7] rounded-[32px] p-10 w-full grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2 w-full flex flex-col gap-4 items-start justify-center">
            <h2 className="text-[#07071F] text-[32px] md:text-[40px] font-semibold leading-[1.25]">
              Se instala en {" "}
              <span className="text-[#FD7366]">
                15 días
              </span>
              , reloj.
              <br />
              Sin complicaciones.
            </h2>
            <div
              className="flex items-center gap-4 px-3 py-2 rounded-[16px]"
              style={{
                background: "linear-gradient(90deg, #F5F5F7 0%, #FD7366 100%)",
              }}
            >
              <Shield className="text-[#07071F]" />
              <p className="text-[#07071F] text-[16px] md:text-[20px]">Cero riesgo—si no funciona, no pagás.</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4 items-start justify-around">
            <p className="text-[#676871] text-[20px]">
              Sin migraciones complejas ni capacitaciones eternas.
              <br />
              Tampoco necesitás un equipo técnico propio.
            </p>
            <p className="text-[#676871] text-[20px]">
              Dejamos a Hawel operando y empezás a ver resultados
              <br />
              antes del primer mes
            </p>
          </div>
          <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6 items-start justify-center">
            <div className="col-span-1 flex flex-col items-start justify-start gap-4">
              <p className="text-[#676871] text-[20px] font-bold">Día 1 – 2</p>
              <div className="w-full flex items-center justify-start gap-4">
                <div className="w-[8px] h-[8px] bg-[#07071F] rounded-full" />
                <div className="h-[1px] bg-[#92949F] w-full" />
              </div>
              <h3 className="text-[#07071F] text-[24px] font-bold">Relevamiento e integración</h3>
              <p className="text-[#676871] text-[20px]">Entendemos cómo vendés hoy y conectamos a Hawel con tu ERP, listas de precios y canales de WhatsApp.</p>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-start gap-4">
              <p className="text-[#676871] text-[20px] font-bold">Día 3 – 7</p>
              <div className="w-full flex items-center justify-start gap-4">
                <div className="w-[8px] h-[8px] bg-[#07071F] rounded-full" />
                <div className="h-[1px] bg-[#92949F] w-full" />
              </div>
              <h3 className="text-[#07071F] text-[24px] font-bold">Entrenamiento con tu negocio.</h3>
              <p className="text-[#676871] text-[20px]">Cargamos tus políticas mayoristas y adaptamos el sistema a tu identidad para que responda con tu misma precisión comercial.</p>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-start gap-4">
              <p className="text-[#676871] text-[20px] font-bold">Día 8 – 12</p>
              <div className="w-full flex items-center justify-start gap-4">
                <div className="w-[8px] h-[8px] bg-[#07071F] rounded-full" />
                <div className="h-[1px] bg-[#92949F] w-full" />
              </div>
              <h3 className="text-[#07071F] text-[24px] font-bold">Simulación con casos reales</h3>
              <p className="text-[#676871] text-[20px]">Validamos el sistema procesando pedidos e históricos reales, afinando el comportamiento hasta asegurar que el 100% de las órdenes salgan perfectas.</p>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-start gap-4">
              <p className="text-[#FD7366] text-[20px] font-bold">Día 14</p>
              <div className="w-full flex items-center justify-start gap-4">
                <div className="w-[8px] h-[8px] bg-[#FD7366] rounded-full" />
              </div>
              <h3 className="text-[#FD7366] text-[24px] font-bold">100% implementado.</h3>
              <p className="text-[#676871] text-[20px]">Hawel queda operando al frente de tus canales de preventa, incrementando tu ticket promedio y enviando alertas predictivas a tu panel. Listo para escalar tu facturación desde el primer día.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[100px] gap-20 px-[24px] md:px-24">
        <div className="text-center z-10 text-[#F5F5F7]">
          <h2 className="text-[#F5F5F7] text-[48px] font-semibold text-center leading-[1.25]">
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
            <br />
            con resultados.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full px-[24px] md:px-24">
          <div className="col-span-1 w-full flex flex-col items-center justify-center h-full">
            <img
              src="/web/bloque 1.png"
              alt="Second section image"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center h-full">
            <img
              src="/web/bloque 2.png"
              alt="Second section image"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center h-full">
            <img
              src="/web/bloque 3.png"
              alt="Second section image"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center h-full">
            <img
              src="/web/bloque 4.png"
              alt="Second section image"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center h-full">
            <img
              src="/web/bloque 5.png"
              alt="Second section image"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center h-full">
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

      <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[100px] gap-0">
        <div className="w-full h-[350px] md:h-auto mx-auto mb-6 overflow-hidden rounded-lg">
          <img
            src="/web/users.png"
            alt="Users"
            className="object-cover md:object-contain w-full h-full"
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

      <section className="min-h-[100vh] h-[max-content] flex items-center flex-col relative justify-between mt-[100px]">
        <img
          src="/web/footer-background.png"
          alt="Section 9"
          className="object-cover w-full mx-auto h-full absolute z-0"
        />

        <div />

        <img
          src="/web/logo md.png"
          alt="Logo"
          className="object-contain mx-auto mb-6 z-10 w-[200px] md:w-[400px]"
        />

        <div className="w-full px-10 flex items-center justify-between z-10 pb-4 flex-col md:flex-row gap-6 md:gap-0">
          <p className="">Hawel, Todos los derechos reservados @ 2026</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#F5F5F7] text-[20px] font-bold">Home</Link>
            <Link href="/sobre-hawel" className="text-[#F5F5F7] text-[20px] font-bold">Sobre Hawel</Link>
            <Link href="/contacto" className="text-[#F5F5F7] text-[20px] font-bold">Contacto</Link>
          </div>
          <div className="flex items-center gap-6">
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
  const [open, setOpen] = React.useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  });

  return (
    <section className="min-h-[100vh] h-auto w-full px-[24px] md:w-2/3 gap-10 mx-auto px-1 flex items-center flex-col justify-start mt-0 md:mt-[100px] gap-6">
      <Image
        src="/web/help.png"
        alt="Help"
        width={300}
        height={150}
        className="object-contain mb-6"
      />
      <h3 className="text-[48px] font-semibold text-center">
        ¿Preguntas? {" "}
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

      <div
        className="w-full rounded-[32px] h-full p-[1px]"
        style={{
          background: "linear-gradient(45deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
        }}
      >
        <button
          onClick={() => setOpen({ ...open, 1: !open[1] })}
          className="w-full h-full rounded-[31px] p-[24px] flex my-[1px] flex-col items-start text-start justify-start gap-4"
          style={{
            background: "#07071fF9"
          }}
        >
          <div className="flex items-center gap-4">
            <ChevronDown className="text-[#8AF3CA] w-6 h-6" />
            <span className="text-[#F5F5F7] text-[20px] font-bold">
              ¿Reemplaza a nuestro equipo actual de preventistas o atención al cliente?
            </span>
          </div>
          {open[1] && <span className="text-[#92949F] text-[20px] font-normal">
            <span className="text-[#F5F5F7]">
              No, los potencia. {" "}
            </span>
            Hawel absorbe el 80% del trabajo administrativo y rutinario —la carga manual de datos, la transcripción de audios y el control de faltantes—. Esto libera a tu fuerza de ventas para que se enfoquen puramente en negociar, fidelizar clientes y abrir nuevas cuentas en la calle.
          </span>}
        </button>
      </div>

      <div
        className="w-full rounded-[32px] h-full p-[1px]"
        style={{
          background: "linear-gradient(45deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
        }}
      >
        <button
          onClick={() => setOpen({ ...open, 2: !open[2] })}
          className="w-full h-full rounded-[31px] p-[24px] flex my-[1px] flex-col items-start text-start justify-start gap-4"
          style={{
            background: "#07071fF9"
          }}
        >
          <div className="flex items-center gap-4">
            <ChevronDown className="text-[#8AF3CA] w-6 h-6" />
            <span className="text-[#F5F5F7] text-[20px] font-bold">
              ¿Funciona solo o necesita un humano?
            </span>
          </div>
          {open[2] && <span className="text-[#92949F] text-[20px] font-normal">
            Es autónomo para las órdenes de rutina. Si detecta un caso que requiere criterio humano —un reclamo complejo o una excepción comercial—, lo escala de inmediato a tu vendedor.
          </span>}
        </button>
      </div>

      <div
        className="w-full rounded-[32px] h-full p-[1px]"
        style={{
          background: "linear-gradient(45deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
        }}
      >
        <button
          onClick={() => setOpen({ ...open, 3: !open[3] })}
          className="w-full h-full rounded-[31px] p-[24px] my-[1px] flex flex-col items-start text-start justify-start gap-4"
          style={{
            background: "#07071fF9"
          }}
        >
          <div className="flex items-center gap-4">
            <ChevronDown className="text-[#8AF3CA] w-6 h-6" />
            <span className="text-[#F5F5F7] text-[20px] font-bold">
              ¿Qué formatos de mensajes puede entender?
            </span>
          </div>
          {open[3] && <span className="text-[#92949F] text-[20px] font-normal">
            Todos. Tus clientes o vendedores pueden enviar mensajes de texto tradicionales, notas de voz (largas o con ruido) o fotos de listas manuscritas. {" "}
            <span className="text-[#F5F5F7] font-bold">
              La IA procesa todo en segundos.
            </span>
          </span>}
        </button>
      </div>

      <div
        className="w-full rounded-[32px] h-full p-[1px]"
        style={{
          background: "linear-gradient(45deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
        }}
      >
        <button
          onClick={() => setOpen({ ...open, 4: !open[4] })}
          className="w-full h-full rounded-[31px] p-[24px] my-[1px] flex flex-col items-start text-start justify-start gap-4"
          style={{
            background: "#07071fF9"
          }}
        >
          <div className="flex items-center gap-4">
            <ChevronDown className="text-[#8AF3CA] w-6 h-6" />
            <span className="text-[#F5F5F7] text-[20px] font-bold">
              ¿Cómo evita la IA cometer errores con las listas de precios, deudas o stock?
            </span>
          </div>
          {open[4] && <span className="text-[#92949F] text-[20px] font-normal">
            Hawel no es un bot que tira respuestas automáticas; lee tu ERP en tiempo real. Antes de confirmar cualquier pedido por WhatsApp, el sistema valida el stock neto disponible, verifica si el cliente tiene deuda corriente y aplica la lista de precios personalizada que le corresponde. Si hay alguna inconsistencia, el pedido se frena y se notifica a tu equipo.
          </span>}
        </button>
      </div>

      <div
        className="w-full rounded-[32px] h-full p-[1px]"
        style={{
          background: "linear-gradient(45deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
        }}
      >
        <button
          onClick={() => setOpen({ ...open, 5: !open[5] })}
          className="w-full h-full rounded-[31px] p-[24px] flex my-[1px] flex-col items-start text-start justify-start gap-4"
          style={{
            background: "#07071fF9"
          }}
        >
          <div className="flex items-center gap-4">
            <ChevronDown className="text-[#8AF3CA] w-6 h-6" />
            <span className="text-[#F5F5F7] text-[20px] font-bold">
              ¿Cómo se maneja la confidencialidad de la información de mi empresa?
            </span>
          </div>
          {open[5] && <span className="text-[#92949F] text-[20px] font-normal">
            La seguridad es nuestra absoluta prioridad. Toda la transferencia de datos entre tus canales de venta y tu ERP viaja de forma encriptada bajo protocolos seguros (SSL/HTTPS). Hawel solo procesa la información necesaria para validar y cargar las órdenes, garantizando el aislamiento de tus bases de datos.
          </span>}
        </button>
      </div>

      <div
        className="w-full rounded-[32px] h-full p-[1px]"
        style={{
          background: "linear-gradient(45deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
        }}
      >
        <button
          onClick={() => setOpen({ ...open, 6: !open[6] })}
          className="w-full h-full rounded-[32px] p-[24px] my-[1px] flex flex-col items-start text-start justify-start gap-4"
          style={{
            background: "#07071fF9"
          }}
        >
          <div className="flex items-center gap-4">
            <ChevronDown className="text-[#8AF3CA] w-6 h-6" />
            <span className="text-[#F5F5F7] text-[20px] font-bold">
              ¿Cuánto demora la implementación?
            </span>
          </div>
          {open[6] && <span className="text-[#92949F] text-[20px] font-normal">
            Al ser una solución en la nube, el despliegue es ágil. Entre el análisis técnico y el período de pruebas para garantizar fricción cero, toma menos de {" "}
            <span className="text-[#F5F5F7] font-bold">
              2 semanas.
            </span>
          </span>}
        </button>
      </div>
    </section>
  )
}