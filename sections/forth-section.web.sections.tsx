import { Shield } from "lucide-react";

export default function ForthSectionWeb() {
    return (
        <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[120px] md:mt-[100px] px-[24px]">
            <div className="bg-[#F5F5F7] rounded-[32px] p-[32px] md:p-10 w-full grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="col-span-1 md:col-span-2 w-full flex flex-col gap-4 items-start justify-center">
                    <h2 className="text-[#07071F] text-[32px] md:text-[40px] font-semibold" style={{ letterSpacing: "-2%" }}>
                        Se instala en &nbsp; 
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
    )
}