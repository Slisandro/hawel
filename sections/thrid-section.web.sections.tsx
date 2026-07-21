import { Button } from "@/components/ui/button";
import { BadgeCheck, Clock, Triangle } from "lucide-react";
import Image from "next/image";

export default function ThirdSectionWeb() {
    return (
        <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-0 md:mt-[100px] px-[24px] gap-[40px] md:gap-10">
            <div className="flex flex-col items-center justify-center gap-[16px] md:gap-4 z-10 mb-[40px] md:mb-0">
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
                    <br className="hidden md:block" />
                    {" "}cerebro comercial para tu negocio.
                </h2>
                <p className="text-[#92949F] text-[20px] md:text-[24px] font-medium text-start md:text-center">
                    Detecta oportunidades invisibles para el ojo humano. Es proactivo.
                    <br />
                    Y se vuelve más inteligente con el tiempo.
                </p>
            </div>

            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 md:px-48 gap-[24px] md:gap-10">
                <div className="w-full h-full py-[24px] px-[20px] md:px-[32px] md:py-[32px] md:!h-[650px] flex-col flex items-center justify-between bg-[#F5F5F7] rounded-[32px] gap-[20px]">
                    <div className="w-full flex flex-col gap-[8px]">
                        <p className="text-[#07071F] text-[24px] font-bold w-full">Entiende las reglas de tu negocio.</p>
                        <span className="text-[#676871] leading-[1.25] text-[20px] font-regular">Se sincroniza con tu stock real, valida las deudas de clientes y aplica listas de precios personalizadas.</span>
                    </div>

                    <div className="w-full rounded-lg">
                        <Image
                            src="/web/steps/macbook-mockup.png"
                            alt="Second section image"
                            height={400}
                            width={400}
                            className="object-cover rounded-lg w-[320px] h-[320px] md:w-full md:h-full"
                        />
                    </div>

                    <span className="text-[20px] font-bold flex items-center w-full gap-[12px] md:gap-2 text-[#07071F]">
                        <BadgeCheck className="fill-[#55E3ED] text-white" />
                        0 errores, pedidos 100% exactos.
                    </span>
                </div>
                <div className="w-full h-full py-[24px] px-[20px] md:px-[32px] md:py-[32px] md:!h-[650px] flex-col flex items-center justify-between bg-[#F5F5F7] rounded-[32px] gap-[20px]">
                    <div className="w-full flex flex-col gap-[8px]">
                        <p className="text-[#07071F] text-[24px] font-bold w-full">Sube el ticket promedio.</p>
                        <span className="text-[#676871] leading-[1.25] text-[20px] font-regular">Detecta el interés y sugiere ofertas o productos complementarios para aumentar el valor de cada orden—	sin que nadie tenga que hacer nada.</span>
                    </div>

                    <div className="w-full rounded-lg">
                        <Image
                            src="/web/steps/phone-mockup.png"
                            alt="Second section image"
                            height={400}
                            width={400}
                            className="object-cover rounded-lg w-[320px] h-[250px] md:w-full md:h-full"
                        />
                    </div>

                    <span className="text-[20px] font-bold flex items-center w-full gap-[12px] md:gap-2 text-[#07071F]">
                        <Triangle className="fill-[#8AF3CA] text-white" />
                        19% ticket promedio
                    </span>
                </div>
                <div className="w-full h-full py-[24px] px-[20px] md:px-[32px] md:py-[32px] md:!h-[650px] flex-col flex items-center justify-between bg-[#F5F5F7] rounded-[32px] gap-[20px]">
                    <div className="w-full flex flex-col gap-[8px]">
                        <p className="text-[#07071F] text-[24px] font-bold w-full">Reduce la pérdida de clientes.</p>
                        <span className="text-[#676871] leading-[1.25] text-[20px] font-regular">Identifica cuando un cliente reduce su frecuencia o volumen de compra. Te avisa en el momento justo para que puedas reactivarlo antes de que se vaya.</span>
                    </div>

                    <div className="w-full rounded-lg">
                        <Image
                            src="/web/steps/popup-mockup.png"
                            alt="Second section image"
                            height={400}
                            width={400}
                            className="object-cover rounded-lg w-[320px] h-[350px] md:w-full md:h-full"
                        />
                    </div>

                    <span className="text-[20px] font-bold flex items-center w-full gap-[12px] md:gap-2 text-[#07071F]">
                        <Triangle className="rotate-180 fill-[#FD7366] text-white" />
                        0 errores, pedidos 100% exactos.
                    </span>
                </div>
                <div className="w-full h-full py-[24px] px-[20px] md:px-[32px] md:py-[32px] md:!h-[650px] flex-col flex items-center justify-between bg-[#F5F5F7] rounded-[32px] gap-[20px]">
                    <div className="w-full flex flex-col gap-[8px]">
                        <p className="text-[#07071F] text-[24px] font-bold w-full">Vende activo las 24 horas</p>
                        <span className="text-[#676871] leading-[1.25] text-[20px] font-normal">Recibe, procesa y confirma pedidos incluso fuera del horario comercial, fines de semana o feriados.</span>
                    </div>

                    <div className="w-full rounded-lg">
                        <Image
                            src="/web/steps/notifications-mockup.png"
                            alt="Second section image"
                            height={400}
                            width={400}
                            className="object-cover rounded-lg w-[320px] h-[320px] md:w-full md:h-full"
                        />
                    </div>

                    <span className="text-[20px] font-bold flex items-center w-full gap-[12px] md:gap-2 text-[#07071F]">
                        <Clock className="fill-[#55E3ED] text-white" />
                        0 errores, pedidos 100% exactos.
                    </span>
                </div>
            </div>

            <Button className="px-[32px] py-[32px] bg-white text-[#07071F] rounded-full font-bold text-[20px]">
                Comenzar
            </Button>
        </section>
    )
}