"use client";
import AnimationBrandsSliderWeb from "@/components/animation-brands.web.components";
import AnimationWordHeaderWeb from "@/components/animation-word.web.components";
import NavbarWeb from "@/components/navbar.web.components";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen flex py-6 flex-col gap-2 h-auto relative bg-[#07071F] overflow-x-hidden">
            <NavbarWeb />
            <section
                className="relative rounded-lg flex flex-col gap-0 overflow-hidden mx-6 h-[98vh]"
                style={{
                    backgroundImage: "url('/web/about-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay oscuro para legibilidad */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Contenido principal */}
                <div className="relative z-10 flex items-start px-20 text-white h-full">
                    {/* Columna izquierda - Texto */}
                    <div className="w-full h-[80%] flex flex-col items-start justify-center gap-8">
                        <p className="text-[120px] flex flex-col items-start justify-start font-semibold text-start leading-[1.2]">
                            Humanos
                            <span
                                style={{
                                    background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                haciendo IA
                            </span>
                        </p>
                    </div>
                </div>

                {/* Slider de marcas - Parte inferior */}
                <div className="relative z-10 w-full h-[120px] flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
                    <AnimationBrandsSliderWeb />
                </div>
            </section>

            <section className="grid grid-cols-2 gap-10 px-28 pb-16 mt-[100px]">
                <div className="flex flex-col items-start justify-center gap-6">
                    <h2 className="text-[48px] font-semibold text-[#F5F5F7]">
                        En la misión de evolucionar el trabajo humano, con la inteligencia artificial.
                    </h2>
                    <p className="text-[#92949F] text-[32px] font-semibold">
                        Hawel nació con una misión clara
                    </p>
                    <div className="text-[#92949F] text-[20px] font-regular flex flex-col gap-[20px]">
                        <span>
                            Buscamos evolucionar al ser humano a través de la inteligencia artificial.
                        </span>
                        <span>
                            Para nosotros no es tan simple, como reemplazar personas, sino potenciar su capacidad.
                        </span>
                        <span>
                            Somos el puente tecnológico que permite a las empresas y profesionales escalar sin perder su esencia, transformando la IA en una herramienta de evolución, libertad y resultados fuera de serie.
                        </span>
                        <span>
                            Hawel es más que el nombre de nuestra marca. Significa la sinapsis entre la inteligencia humana y la inteligencia artificial; ese punto de conexión clave que surge cuando el pensamiento de las personas se une con el potencial de los modelos de lenguaje.
                        </span>
                        <span>
                            Actualmente estamos desarrollando los hawels, agentes de IA que estamos integrando en el sector de mayoristas, marcas y distribución para automatizar procesos y llevar las operaciones al siguiente nivel.
                        </span>
                    </div>

                    <Button className="p-[32px] bg-white text-[#07071F] rounded-full font-bold text-[20px]">
                        Comenzar
                    </Button>
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                    <Card
                        className="w-full h-full rounded-[32px] p-[40px] flex items-center justify-start"
                        style={{
                            backgroundImage: "url('/web/planet-background.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <h2
                            className="text-[48px] font-semibold text-[#F5F5F7]"
                            style={{
                                background: "linear-gradient(90deg, #55E3ED 0%, #7A3AEF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Personas como vos, que amamos la tecnología.
                        </h2>

                        <div className="h-[2px] rounded-[100%] w-full bg-[#F5F5F7] opacity-20 " />

                        <div className="flex flex-col w-full">
                            <p className="text-[#F5F5F7] text-[32px] font-semibold">20 años de experiencia.</p>
                            <span className="text-[#F5F5F7] text-[20px] font-normal">Somos profesionales que hemos trabajado en empresas líderes del sector.</span>
                        </div>

                        <div className="h-[2px] rounded-[100%] w-full bg-[#F5F5F7] opacity-20 " />

                        <div className="flex flex-col w-full">
                            <p className="text-[#F5F5F7] text-[32px] font-semibold">+1000 patrones de compra modelados.</p>
                            <span className="text-[#F5F5F7] text-[20px] font-normal">Algoritmos diseñados para interpretar modismos comerciales, específicos del mercado mayorista.</span>
                        </div>

                        <Card className="w-full bg-white p-[32px] rounded-[32px] flex flex-col items-center justify-center gap-[32px]">
                            <h3 className="text-[20px] font-semibold text-[#07071F]">
                                Para ser los mejores, trabajamos con los
                                {" "}
                                <span
                                    className="text-[#2B39D2]"
                                >mejores.</span>
                            </h3>

                            <Image 
                                src="/web/colaboradores.png"
                                alt="Colaboradores"
                                width={300}
                                height={200}
                                className="object-contain w-full h-full px-16"
                            />
                        </Card>
                    </Card>
                </div>
            </section>
        </main>
    )
}