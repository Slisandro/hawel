"use client";
import AnimationBrandsSliderWeb from "@/components/animation-brands.web.components";
import NavbarWeb from "@/components/navbar.web.components";

export default function About() {
    return (
        <main className="min-h-screen flex md:py-6 flex-col gap-[40px] h-[100vh] pb-[40px] pt-[80px] relative bg-[#07071F] overflow-x-hidden">
            <NavbarWeb />
            
            <div className="w-full mt-[40px] mb-[20px] px-[24px]">
                <div
                    className="w-full rounded-[40px] h-full p-[1px]"
                    style={{
                        background: "linear-gradient(45deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                    }}
                >
                    <div
                        className="w-full h-full rounded-[40px] p-[24px] flex flex-col items-start text-start justify-start gap-[16px]"
                        style={{
                            background: "#07071fF9"
                        }}
                    >
                        <h3 className="text-[32px] md:text-[48px] font-semibold text-[#F5F5F7]" style={{ letterSpacing: "-2%" }}>
                            Conocé la
                            <br />
                            Inteligencia Artificial
                            <br />
                            de {" "}
                            <span
                                style={{
                                    background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Hawel.
                            </span>
                        </h3>

                        <p className="text-[16px] md:text-[20px] font-regular text-[#F5F5F7]" style={{ letterSpacing: "-1%" }}>
                            Incrementa tus ventas. Gestiona tus pedidos. Ayuda a tus vendedores. Todo, <br /> por whatsapp.
                        </p>

                        <form className="mt-[16px] w-full flex flex-col md:flex-row items-center justify-start gap-[16px]">
                            {
                                [
                                    {
                                        label: "Nombre y Apellido",
                                        placeholder: "Nombre y Apellido",
                                    },
                                    {
                                        label: "Empresa",
                                        placeholder: "Nombre de empresa",
                                    },
                                    {
                                        label: "Mail",
                                        placeholder: "tu@empresa.com",
                                    },
                                    {
                                        label: "Teléfono",
                                        placeholder: "+1 (000) 000-0000",
                                    }
                                ].map((input, index) => (
                                    <div key={index} className="flex flex-col items-start justify-start gap-[8px] w-full">
                                        <label className="text-[16px] text-[#F5F5F7] font-bold">
                                            {input.label}
                                        </label>
                                        <input
                                            className="py-2 w-full bg-red-50 p-[16px] border border-[#3E3E66] text-[#92949F] text-[16px] rounded-[16px] !bg-[#1B1B3A]"
                                            placeholder={input.placeholder}
                                        />
                                    </div>
                                ))

                            }
                            <button className="px-[32px] py-[16px] mt-[16px] bg-[#F5F5F7] text-[#07071F] rounded-full font-bold text-[20px] mr-auto">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-full h-[auto]">
                <AnimationBrandsSliderWeb />
            </div>
        </main>
    )
}