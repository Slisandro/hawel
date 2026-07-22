import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image"
import AnimationBrandsSliderWeb from "@/components/animation-brands.web.components";
import AnimationWordHeaderWeb from "@/components/animation-word.web.components";
import { FC } from "react";

const FirstSectionWeb = () => {
  return (
    <section
      className="relative rounded-lg flex flex-col gap-0 overflow-hidden w-full md:px-6"
      style={{
        backgroundImage: "url('/web/header-image-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center md:px-20 pt-[128px] md:pt-0 text-white gap-8 md:gap-0 px-[24px] md:px-0">
        {/* Columna izquierda - Texto */}
        <div className="col-span-1 md:col-span-2 w-full h-[80%] flex flex-col items-center md:items-start justify-center md:gap-8 gap-[24px]">
          <p className="text-[48px] md:text-5xl font-semibold text-center md:text-start leading-[1.2]">
            La Inteligencia Artificial
            <br className="hidden md:block" /> {" "}
            que
            <br className="block md:hidden" /> vende y opera
            <br className="block md:hidden" /> en tu
            <br className="hidden md:block" />
            <AnimationWordHeaderWeb />
          </p>
          <p className="text-[20px] md:text-2xl text-center md:text-start leading-[1.4]">
            Incrementa tus ventas. Gestiona tus pedidos.
            <br className="hidden md:block" />
            {" "}Ayuda a tus vendedores. Todo, por WhatsApp.
          </p>
          <button className="px-6 py-3 bg-white text-[20px] md:text-2xl text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Conocer más
          </button>
        </div>

        {/* Columna derecha - iPhone */}
        <div className="col-span-1 px-[16px] md:px-[32px] md:px-16 w-full h-full md:h-[80%] flex items-center justify-center md:pl-8 md:scale-[0.9]">
          <Phone />
        </div>
      </div>

      {/* Slider de marcas - Parte inferior */}
      <div className="relative z-10 px-0 pb-[32px] mt-[64px] md:mt-6 md:mt-0 w-full h-[120px] flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
        <AnimationBrandsSliderWeb />
      </div>
    </section>
  )
}

// Tipos para los variants
type Direction = "left" | "right";

// Interfaz para los productos
interface Product {
  name: string;
  category: string;
  price: string;
}

// Datos de productos (lo movemos fuera para mejor organización)
const PRODUCTS: Product[] = [
  {
    name: "Alfajores Jorgito x3 cajas",
    category: "GOLOSINAS",
    price: "$84.600",
  },
  {
    name: "Galletitas Bagley x2 cajas",
    category: "ALMACEN",
    price: "$38.400",
  },
  {
    name: "Coca-Cola 1.5L x5 packs",
    category: "BEBIDAS",
    price: "$52.500",
  },
];

const Phone: FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  // Variants para elementos hijos
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Variants para mensajes (entrada desde izquierda/derecha)
  const messageVariants: Variants = {
    hidden: (direction: Direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  // Variants para el badge de "Procesado por Hawel"
  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 200 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  // Tipos para los mensajes
  interface Message {
    id: number;
    text: string;
    type: "user" | "assistant";
  }

  // Datos de los mensajes
  const messages: Message[] = [
    {
      id: 1,
      text: "Buenas, te paso el pedido: 3 cajas de alfajores Jorgito, 2 de galletitas Bagley y 5 packs de Coca",
      type: "user",
    },
    {
      id: 2,
      text: "¡Hola Carlos! Pedido recibido. Para tu zona, el camión de reparto sale mañana Martes ¿Te sirve?",
      type: "assistant",
    },
    {
      id: 3,
      text: "Si, perfecto.",
      type: "user",
    },
    {
      id: 4,
      text: "¡Excelente! Pedido pre-cargado con éxito para mañana Martes. Acá tenés el detalle actualizado:",
      type: "assistant",
    },
  ];

  return (
    <motion.div
      className="w-full relative h-[max-content] flex items-center justify-center pt-[60px] pb-[30px]"
      style={{
        backgroundImage: "url('/web/phone.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col items-center justify-start gap-[12px] left-0 w-full h-full py-[36px] px-[20px]"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="flex items-center w-full gap-[8px]"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-[25px] h-[25px]"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/web/user.png"
              alt="Phone Screen Content"
              fill
              className="object-contain"
              sizes="25px"
            />
          </motion.div>
          <div className="flex-1">
            <motion.h4
              className="text-[12.5px] font-bold text-[#F5F5F7]"
              style={{ letterSpacing: "-1.2%" }}
              variants={itemVariants}
            >
              Solicitud de Pedido
            </motion.h4>
            <motion.p
              className="text-[9.5px] font-bold text-[#F5F5F7]"
              style={{ letterSpacing: "-1%" }}
              variants={itemVariants}
            >
              Cliente minorista - Mendoza
            </motion.p>
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div
          className="bg-[#F5F5F7] opacity-30 w-full h-[0.8px]"
          variants={itemVariants}
        />

        {/* Messages Container */}
        <motion.div
          className="flex flex-col items-center justify-start w-full gap-[8px]"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`max-w-[75%] relative rounded-[12px] p-[12px] ${
                  message.type === "user"
                    ? "bg-[#F5F5F7] mr-auto"
                    : "bg-[#E1FFDB] ml-auto"
                }`}
                variants={messageVariants}
                custom={message.type === "user" ? "left" : "right"}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <p
                  className={`text-[9.5px] text-[#07071F] font-[600] ${
                    message.type === "assistant" ? "text-right" : ""
                  }`}
                  style={{ letterSpacing: "-1%" }}
                >
                  {message.text}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Order Summary Card */}
        <motion.div
          className="w-full rounded-[32px] h-full p-[1px] border border-[#55E3ED]"
          variants={itemVariants}
          whileHover={{
            boxShadow: "0 0 20px rgba(85, 227, 237, 0.3)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className="w-full h-full rounded-[32px] p-[20px] flex flex-col items-start text-start justify-start gap-[12px]"
            style={{ backgroundColor: "rgba(7, 7, 31, 0.3)" }}
            variants={itemVariants}
          >
            {/* Header Summary */}
            <motion.div
              className="flex items-center justify-between w-full"
              variants={itemVariants}
            >
              <div className="text-[#F5F5F7]">
                <motion.p
                  className="text-[9.5px] font-semibold"
                  style={{ letterSpacing: "-1%" }}
                  variants={itemVariants}
                >
                  Pedido Confirmado ·
                  <br />
                  Carlos Santier
                </motion.p>
                <motion.p
                  className="text-[9.5px] font-semibold"
                  style={{ letterSpacing: "-1%" }}
                  variants={itemVariants}
                >
                  Entrega Martes 16/06
                </motion.p>
              </div>

              <motion.div
                className="p-[8px] ml-auto flex items-center rounded-[8px] gap-[8px] cursor-pointer"
                style={{
                  background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
                }}
                variants={badgeVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.22954 2.54958C7.48369 2.50651 7.75319 2.47435 7.99358 2.56486C8.11143 2.6094 8.21728 2.69389 8.2862 2.79483H8.28467C8.35666 2.9018 8.38943 3.02984 8.35114 3.15316C8.25769 3.45175 7.86363 3.52015 7.54509 3.55581C4.78382 3.86934 2.29517 5.83619 1.42213 8.39748C0.549148 10.9589 1.33654 13.9779 3.35972 15.8277C5.38291 17.6774 8.53781 18.2602 11.12 17.2618C13.7021 16.2634 15.58 13.7361 15.7378 11.0426C15.7608 10.6608 15.86 10.154 16.2535 10.1242C16.6747 10.0915 16.8358 10.6485 16.8143 11.0586C16.6627 13.9231 14.8293 16.6498 12.1858 17.9364C9.54246 19.223 6.19448 19.0209 3.73639 17.4268C1.27676 15.8326 -0.194985 12.907 0.0208991 10.047C0.31036 6.2079 3.39612 3.20335 7.22954 2.54958Z"
                    fill="#07071F"
                  />
                  <path
                    d="M8.73469 5.47658C9.07776 6.76918 9.32604 7.89126 10.3384 8.89563C11.2799 9.82972 12.5799 10.4131 13.9217 10.507C12.5952 10.6171 11.315 11.1958 10.3735 12.1091C9.43017 13.0243 8.83737 14.2708 8.72705 15.5618C8.62897 14.2663 8.03768 13.0127 7.09278 12.0931C6.14788 11.1735 4.85559 10.5967 3.52017 10.5001C4.87074 10.4213 6.18304 9.84204 7.13251 8.9048C8.151 7.89895 8.39468 6.77215 8.73469 5.47658Z"
                    fill="#07071F"
                  />
                  <path
                    d="M13.9301 11.2901C13.9274 11.2899 13.9244 10.5072 13.9217 10.507C13.9244 10.5067 13.9274 11.2888 13.9301 11.2886V11.2901Z"
                    fill="#07071F"
                  />
                  <path
                    d="M15.5812 3.39689C15.7925 4.19162 15.9459 4.88224 16.5675 5.49874C17.1459 6.07165 17.9434 6.43124 18.7687 6.48969C17.9535 6.55807 17.1677 6.9154 16.5889 7.47682C16.0087 8.03982 15.6441 8.80613 15.5766 9.5993C15.5168 8.80307 15.1523 8.03063 14.5719 7.46612C13.99 6.90016 13.1953 6.54686 12.3745 6.48587C13.206 6.43677 14.0129 6.07974 14.5963 5.50485C15.2227 4.88685 15.3729 4.19463 15.5812 3.39689Z"
                    fill="#07071F"
                  />
                  <path
                    d="M18.7779 6.49122C18.7749 6.49101 18.7717 6.4899 18.7687 6.48969C18.7712 6.48949 18.7739 6.48989 18.7764 6.48969L18.7779 6.49122Z"
                    fill="#07071F"
                  />
                  <path
                    d="M11.2636 0C11.3999 0.515452 11.4998 0.962707 11.9039 1.3638C12.2806 1.73664 12.7998 1.96989 13.3372 2.00711C12.8074 2.05026 12.2943 2.28271 11.9192 2.64814C11.5441 3.01357 11.3066 3.51102 11.2621 4.02492C11.2238 3.50796 10.9879 3.00742 10.6096 2.6405C10.2313 2.27356 9.71689 2.04345 9.18394 2.00482C9.72304 1.97362 10.2466 1.74129 10.6249 1.36838C11.0308 0.96723 11.1289 0.518525 11.2636 0Z"
                    fill="#07071F"
                  />
                </svg>
                <motion.p
                  className="m-0 p-0 text-[9.5px] text-[#07071F]"
                  variants={itemVariants}
                >
                  Procesado <br /> por Hawel
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Separator */}
            <motion.div
              className="bg-[#F5F5F7] opacity-30 w-full h-[0.8px]"
              variants={itemVariants}
            />

            {/* Product Items */}
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={index}
                className="w-full"
                variants={itemVariants}
                custom={index}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="text-[#F5F5F7]">
                    <motion.p
                      className="text-[9.5px] font-semibold"
                      style={{ letterSpacing: "-1%" }}
                      whileHover={{ x: 5 }}
                    >
                      {product.name}
                    </motion.p>
                    <motion.p
                      className="text-[9.5px] font-semibold"
                      style={{ letterSpacing: "-1%" }}
                    >
                      {product.category}
                    </motion.p>
                  </div>
                  <div className="ml-auto">
                    <motion.p
                      className="text-[9.5px] font-semibold"
                      style={{ letterSpacing: "-1%" }}
                      whileHover={{ scale: 1.1, color: "#55E3ED" }}
                    >
                      {product.price}
                    </motion.p>
                  </div>
                </div>
                {index < PRODUCTS.length - 1 && (
                  <motion.div
                    className="bg-[#F5F5F7] opacity-30 w-full h-[0.8px] mt-[12px]"
                    variants={itemVariants}
                  />
                )}
              </motion.div>
            ))}

            {/* Separator */}
            <motion.div
              className="bg-[#F5F5F7] opacity-30 w-full h-[0.8px]"
              variants={itemVariants}
            />

            {/* Total */}
            <motion.div
              className="flex items-center justify-between w-full"
              variants={itemVariants}
            >
              <div className="text-[#F5F5F7]">
                <motion.p
                  className="text-[9.5px] font-semibold"
                  style={{ letterSpacing: "-1%" }}
                  whileHover={{ scale: 1.02 }}
                >
                  Total Final:
                </motion.p>
              </div>
              <div className="ml-auto">
                <motion.p
                  className="text-[9.5px] font-semibold"
                  style={{ letterSpacing: "-1%" }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  $175.500
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FirstSectionWeb;
