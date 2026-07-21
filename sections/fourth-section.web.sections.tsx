import { Box, DollarSign, PackageX, ShoppingCart, Ticket, Triangle, TriangleAlert, User } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function FourthSectionWeb() {
    return (
        <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[80px] md:mt-[100px] gap-[40px] md:gap-20 md:px-24">
            <div className="text-center z-10 text-[#F5F5F7] flex flex-col items-center gap-[16px] md:gap-2 px-[24px]">
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

                <p className="text-[#F5F5F7] text-[24px] font-medium text-center">
                    Más análisis. Mejores <br className="block md:hidden" /> decisiones. Más crecimiento.
                </p>
            </div>

            <div
                className="relative w-full h-[max-content] flex items-center py-[40px] md:py-8"
            >
                <img
                    src="/web/section4-bg-mobile.png"
                    alt="Second section image"
                    style={{
                        objectPosition: "left",
                        objectFit: "cover",
                        borderRadius: 0
                    }}
                    className="block md:hidden absolute w-full h-full object-cover z-0"
                />

                <img
                    src="/web/section4-background.png"
                    alt="Second section image"
                    className="hidden md:block absolute w-full h-full object-cover z-0"
                />

                <div className="grid md:grid-cols-4 gap-[20px] md:gap-4 z-100 items-center px-[24px] md:px-4 w-full h-full md:py-20">
                    <div className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-start md:gap-3">
                        <div
                            className="bg-[#07071F33] p-[16px] rounded-full border mb-[16px] md:mb-0"
                            style={{
                                borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                            }}
                        >
                            <ShoppingCart className="text-[#8AF3CA]" />
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
                    <div className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-start md:gap-3">
                        <div
                            className="bg-[#07071F33] p-[16px] rounded-full border mb-[16px] md:mb-0"
                            style={{
                                borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                            }}
                        >
                            <DollarSign className="text-[#8AF3CA]" />
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
                    <div className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-start md:gap-3">
                        <div
                            className="bg-[#07071F33] p-[16px] rounded-full border mb-[16px] md:mb-0"
                            style={{
                                borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                            }}
                        >
                            <Ticket className="text-[#8AF3CA]" />
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
                    <div className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-center justify-center">
                        <div className="w-full flex items-center justify-center gap-2">
                            <Triangle className="fill-[#8AF3CA] w-[24px] h-[24px] text-[#8AF3CA]" />
                            <p className="text-[64px] text-[#8AF3CA]">12,4%</p>
                        </div>
                        <p className="text-[#F5F5F7] font-bold text-[24px]">vs periodo anterior</p>
                    </div>
                    <div className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-start md:gap-3">
                        <div
                            className="bg-[#07071F33] p-[16px] rounded-full border mb-[16px] md:mb-0"
                            style={{
                                borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                            }}
                        >
                            <User className="text-[#8AF3CA]" />
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
                    <div className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-start md:gap-3">
                        <div
                            className="bg-[#07071F33] p-[16px] rounded-full border mb-[16px] md:mb-0"
                            style={{
                                borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                            }}
                        >
                            <TriangleAlert className="text-[#8AF3CA]" />
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
                    <div className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-start md:gap-3">
                        <div
                            className="bg-[#07071F33] p-[16px] rounded-full border mb-[16px] md:mb-0"
                            style={{
                                borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                            }}
                        >
                            <Box className="text-[#8AF3CA]" />
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
                    <div className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-start md:gap-3">
                        <div
                            className="bg-[#07071F33] p-[16px] rounded-full border mb-[16px] md:mb-0"
                            style={{
                                borderColor: "linear-gradient(90deg, #8AF3CA 0%, #16548E 50%, #8AF3CA 100%)",
                            }}
                        >
                            <PackageX className="text-[#8AF3CA]" />
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
    )
}