import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function SecondSectionWeb() {
    return (
        <section className="min-h-[100vh] h-[max-content] py-4 flex items-center flex-col justify-start mt-[80px] md:mt-[200px]">
            <div className="text-[#F5F5F7] text-[32px] px-[32px] font-bold flex flex-col items-center justify-center gap-4 z-10">
                <h2 className="text-center text-[24px] md:text-[32px]">De la informalidad — A la perfección.</h2>

                <p className="text-center font-semibold text-[32px] md:text-[48px]">
                    Hawel convierte el caos de mensajes,
                    <br />
                    audios y fotos de WhatsApp en pedidos
                    <br />
                    <span
                        className="font-bold text-[32px] md:text-[48px]"
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

                <p className="text-[20px] md:text-[24px] leading-[1.5] text-center text-[#92949F] font-medium">
                    Sin errores. Sin carga manual. Y sin nada perdido.
                </p>
            </div>

            <div className="hidden md:block relative w-full min-h-[200vh] p-32 mt-12">
                <img
                    src="/web/steps/background-step-1.png"
                    alt="Hombre en llamadas de WhatsApp con su celular"
                    className="!absolute z-4"
                    style={{
                        zIndex: 4,
                        top: '10%',
                        width: '80%',
                        right: '0%',
                        transform: 'translateX(25%)'
                    }}
                />

                <img
                    src="/web/steps/background-step-2.png"
                    alt="Mujer recibiendo pedidos de WhatsApp en su computadora"
                    className="!absolute z-4"
                    style={{
                        zIndex: 4,
                        bottom: '-5%',
                        width: '75%',
                        left: '0%',
                        transform: 'translateX(-25%)'
                    }}
                />

                <img
                    src="/web/steps/Steps1.png"
                    alt="Pasos de cómo funciona Hawel"
                    className="object-contain w-full h-full z-10 relative"
                    style={{ zIndex: 10 }}
                />
            </div>

            <div className="block md:hidden relative w-full min-h-[300vh]">
                <img
                    src="/web/steps/background-step-1.png"
                    alt="Hombre en llamadas de WhatsApp con su celular"
                    className="!absolute z-4"
                    style={{
                        zIndex: 4,
                        top: '10%',
                        width: '100%',
                        right: '0%',
                        transform: 'translateX(25%)'
                    }}
                />

                <img
                    src="/web/steps/background-step-2.png"
                    alt="Mujer recibiendo pedidos de WhatsApp en su computadora"
                    className="!absolute z-4"
                    style={{
                        zIndex: 4,
                        bottom: '0%',
                        width: '100%',
                        left: '0%',
                        transform: 'translateX(-25%)'
                    }}
                />

                <Image
                    src="/web/steps/Steps1-mobile.png"
                    alt="Pasos de cómo funciona Hawel"
                    width={window.innerWidth} // Obtener tamaño de la pantalla actual
                    height={0} // Obtener tamaño de la pantalla actual
                    className="w-full h-full z-10 relative"
                />
            </div>
        </section>
    )
}