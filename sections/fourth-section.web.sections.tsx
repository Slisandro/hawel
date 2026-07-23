import { motion, Variants } from "framer-motion";
import { Triangle } from "lucide-react";

/* eslint-disable @next/next/no-img-element */

// Tipos para las cards
interface CardData {
  id: number;
  title: string;
  subtitle: string;
  value?: string;
  icon?: React.ReactNode;
  type: "default" | "percentage" | "topList";
  topItems?: string[];
}

export default function FourthSectionWeb() {
  // Variants para el contenedor de cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  // Variants para cada card
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(85, 227, 237, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Variants para el ícono
  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  // Variants para el número/valor
  const valueVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.3,
      },
    },
  };

  // Variants para el borde SVG
  const svgVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  // Variants para elementos de texto
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Función para renderizar el ícono según el ID
  const renderIcon = (id: number) => {
    const icons: Record<number, React.ReactNode> = {
      1: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.11442 27.0581C5.61433 26.558 5.33337 25.8798 5.33337 25.1725C5.33337 24.4653 5.61433 23.787 6.11442 23.2869C6.61452 22.7868 7.2928 22.5059 8.00004 22.5059C8.70728 22.5059 9.38556 22.7868 9.88566 23.2869C10.3858 23.787 10.6667 24.4653 10.6667 25.1725C10.6667 25.8798 10.3858 26.558 9.88566 27.0581C9.38556 27.5582 8.70728 27.8392 8.00004 27.8392C7.2928 27.8392 6.61452 27.5582 6.11442 27.0581Z" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 25.1725C20 25.8798 20.281 26.558 20.781 27.0581C21.2811 27.5582 21.9594 27.8392 22.6667 27.8392C23.3739 27.8392 24.0522 27.5582 24.5523 27.0581C25.0524 26.558 25.3333 25.8798 25.3333 25.1725C25.3333 24.4653 25.0524 23.787 24.5523 23.2869C24.0522 22.7868 23.3739 22.5059 22.6667 22.5059C21.9594 22.5059 21.2811 22.7868 20.781 23.2869C20.281 23.787 20 24.4653 20 25.1725Z" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22.6667 22.506H8.00004V3.83936H5.33337" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.02734 4.50537L26.694 5.8387L25.3607 15.172H8.02734" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      2: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.2667 10.5065C22.0013 9.75349 21.5166 9.09713 20.8751 8.62189C20.2335 8.14665 19.4644 7.87429 18.6667 7.83984H13.3334C12.2725 7.83984 11.2551 8.26127 10.5049 9.01142C9.7548 9.76156 9.33337 10.779 9.33337 11.8398C9.33337 12.9007 9.7548 13.9181 10.5049 14.6683C11.2551 15.4184 12.2725 15.8398 13.3334 15.8398H18.6667C19.7276 15.8398 20.745 16.2613 21.4951 17.0114C22.2453 17.7616 22.6667 18.779 22.6667 19.8398C22.6667 20.9007 22.2453 21.9181 21.4951 22.6683C20.745 23.4184 19.7276 23.8398 18.6667 23.8398H13.3334C12.5357 23.8054 11.7666 23.533 11.125 23.0578C10.4834 22.5826 9.99877 21.9262 9.73337 21.1732" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.83984V7.83984M16 23.8398V27.8398" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      3: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_480_711)">
            <path d="M20 6.50586V9.17253" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 14.5059V17.1725" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 22.5063V25.173" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25.3333 6.50586H6.66667C5.95942 6.50586 5.28115 6.78681 4.78105 7.28691C4.28095 7.787 4 8.46528 4 9.17253V13.1725C4.70724 13.1725 5.38552 13.4535 5.88562 13.9536C6.38572 14.4537 6.66667 15.1319 6.66667 15.8392C6.66667 16.5464 6.38572 17.2247 5.88562 17.7248C5.38552 18.2249 4.70724 18.5059 4 18.5059V22.5059C4 23.2131 4.28095 23.8914 4.78105 24.3915C5.28115 24.8916 5.95942 25.1725 6.66667 25.1725H25.3333C26.0406 25.1725 26.7189 24.8916 27.219 24.3915C27.719 23.8914 28 23.2131 28 22.5059V18.5059C27.2928 18.5059 26.6145 18.2249 26.1144 17.7248C25.6143 17.2247 25.3333 16.5464 25.3333 15.8392C25.3333 15.1319 25.6143 14.4537 26.1144 13.9536C26.6145 13.4535 27.2928 13.1725 28 13.1725V9.17253C28 8.46528 27.719 7.787 27.219 7.28691C26.7189 6.78681 26.0406 6.50586 25.3333 6.50586Z" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_480_711">
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      5: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_480_729)">
            <path d="M12.2287 12.9444C11.2285 11.9442 10.6666 10.5877 10.6666 9.17318C10.6666 7.75869 11.2285 6.40213 12.2287 5.40194C13.2289 4.40175 14.5855 3.83984 16 3.83984C17.4144 3.83984 18.771 4.40175 19.7712 5.40194C20.7714 6.40213 21.3333 7.75869 21.3333 9.17318C21.3333 10.5877 20.7714 11.9442 19.7712 12.9444C18.771 13.9446 17.4144 14.5065 16 14.5065C14.5855 14.5065 13.2289 13.9446 12.2287 12.9444Z" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 27.8398V25.1732C8 23.7587 8.5619 22.4021 9.5621 21.4019C10.5623 20.4017 11.9188 19.8398 13.3333 19.8398H18.6667C20.0812 19.8398 21.4377 20.4017 22.4379 21.4019C23.4381 22.4021 24 23.7587 24 25.1732V27.8398" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_480_729">
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      6: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11.8398V17.1732" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.8174 4.62744L3.00935 22.6728C2.78655 23.0586 2.66864 23.4961 2.66737 23.9416C2.66609 24.3872 2.78149 24.8253 3.00208 25.2124C3.22268 25.5995 3.54077 25.9222 3.92474 26.1482C4.30871 26.3742 4.74516 26.4958 5.19069 26.5008H26.8094C27.2547 26.4956 27.6909 26.3741 28.0747 26.1481C28.4585 25.9221 28.7764 25.5997 28.997 25.2128C29.2176 24.8259 29.333 24.388 29.3319 23.9426C29.3308 23.4972 29.2132 23.0599 28.9907 22.6741L18.1827 4.62611C17.9553 4.25078 17.635 3.94044 17.2526 3.72504C16.8703 3.50965 16.4389 3.39648 16 3.39648C15.5612 3.39648 15.1298 3.50965 14.7474 3.72504C14.3651 3.94044 14.0447 4.25078 13.8174 4.62611" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21.1729H16.0133" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      7: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3.83984L26.6667 9.83984V21.8398L16 27.8398L5.33337 21.8398V9.83984L16 3.83984Z" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 15.8398L26.6667 9.83984" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 15.8398V27.8398" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 15.8398L5.33337 9.83984" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.3333 6.83984L10.6666 12.8398" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      8: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_480_778)">
            <path d="M11.7494 6.23051L16 3.83984L26.6667 9.83984V21.1732M23.624 23.5518L16 27.8398L5.33337 21.8398V9.83984L8.29737 8.17318" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.3906 13.9332L26.6666 9.83984" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 15.8398V27.8398" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 15.8398L5.33337 9.83984" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 6.83984L15.5333 10.1025M12.1146 12.0252L10.6666 12.8398" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 3.83984L28 27.8398" stroke="#8AF3CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_480_778">
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
    };
    return icons[id] || null;
  };

  // Datos de las cards (8 cards en total)
  const cardsData: CardData[] = [
    {
      id: 1,
      title: "Pedidos totales",
      subtitle: "Hoy",
      value: "17",
      type: "default",
    },
    {
      id: 2,
      title: "Facturación total",
      subtitle: "Últimos 3 días",
      value: "$4.445.600",
      type: "default",
    },
    {
      id: 3,
      title: "Ticket promedio",
      subtitle: "Últimos 7 días",
      value: "$125.600",
      type: "default",
    },
    {
      id: 4,
      title: "vs periodo anterior",
      subtitle: "",
      value: "12,4%",
      type: "percentage",
    },
    {
      id: 5,
      title: "Top vendedores",
      subtitle: "Últimos 7 días",
      type: "topList",
      topItems: ["Manuel Zaguín", "Pablo Díaz"],
    },
    {
      id: 6,
      title: "Clientes en riesgo",
      subtitle: "Hoy",
      value: "3",
      type: "default",
    },
    {
      id: 7,
      title: "Top productos",
      subtitle: "Últimos 90 días",
      type: "topList",
      topItems: ["Harina 0000", "Chocolate XL"],
    },
    {
      id: 8,
      title: "Pedidos sin stock",
      subtitle: "Últimos 7 días",
      value: "2",
      type: "default",
    },
  ];

  // Renderizar cada card
  const renderCard = (card: CardData) => {
    const isPercentage = card.type === "percentage";
    const isTopList = card.type === "topList";

    // Card especial de porcentaje (con Triangle)
    if (isPercentage) {
      return (
        <motion.div
          key={card.id}
          className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-center justify-center shadow-md cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="w-full flex items-center justify-center gap-2"
            variants={valueVariants}
          >
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Triangle className="fill-[#8AF3CA] w-[24px] h-[24px] text-[#8AF3CA]" />
            </motion.div>
            <motion.p 
              className="text-[64px] text-[#8AF3CA]"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.3,
              }}
            >
              {card.value}
            </motion.p>
          </motion.div>
          <motion.p 
            className="text-[#F5F5F7] font-bold text-[24px]"
            variants={itemVariants}
          >
            {card.title}
          </motion.p>
        </motion.div>
      );
    }

    // Cards con lista de top items
    if (isTopList) {
      return (
        <motion.div
          key={card.id}
          className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-start md:gap-3 shadow-md cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Icono con borde SVG */}
          <motion.div 
            className="rounded-full relative mb-[16px] md:mb-0"
            variants={iconVariants}
          >
            <motion.svg
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgVariants}
            >
              <circle cx="31" cy="31" r="31" fill="#07071F" fillOpacity="0.2" />
              <motion.circle
                cx="31"
                cy="31"
                r="30.25"
                stroke="url(#paint0_linear_480_777)"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_480_777"
                  x1="0"
                  y1="0"
                  x2="65.7028"
                  y2="59.5525"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8AF3CA" />
                  <stop offset="0.475962" stopColor="#16548E" />
                  <stop offset="1" stopColor="#8AF3CA" />
                </linearGradient>
              </defs>
            </motion.svg>
            <div className="bg-[#07071F33] p-[16px] rounded-full">
              <div className="text-[#8AF3CA]">{renderIcon(card.id)}</div>
            </div>
          </motion.div>

          <motion.p 
            className="text-[#F5F5F7] font-bold text-[20px] mb-0"
            variants={itemVariants}
          >
            {card.title}
          </motion.p>
          <motion.p 
            className="text-[#F5F5F7] font-medium text-[20px] mb-0"
            variants={itemVariants}
          >
            {card.subtitle}
          </motion.p>

          <div className="flex flex-col w-full gap-2 mt-auto">
            {card.topItems?.map((item, index) => (
              <motion.div
                key={index}
                className="flex bg-[#F5F5F7]/5 rounded-[20px] py-1 px-3 items-center gap-3 w-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-2 h-2 bg-[#8AF3CA] rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                <span className="font-bold text-[16px] text-[#F5F5F7]">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    }

    // Cards por defecto (con valor numérico)
    return (
      <motion.div
        key={card.id}
        className="w-full h-full bg-[#F5F5F70D] min-h-[280px] p-[24px] rounded-[32px] flex flex-col items-start md:gap-3 shadow-md cursor-pointer"
        variants={cardVariants}
        whileHover="hover"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Icono con borde SVG */}
        <motion.div 
          className="rounded-full relative mb-[16px] md:mb-0"
          variants={iconVariants}
        >
          <motion.svg
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
          >
            <circle cx="31" cy="31" r="31" fill="#07071F" fillOpacity="0.2" />
            <motion.circle
              cx="31"
              cy="31"
              r="30.25"
              stroke="url(#paint0_linear_480_777)"
              strokeOpacity="0.4"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_480_777"
                x1="0"
                y1="0"
                x2="65.7028"
                y2="59.5525"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8AF3CA" />
                <stop offset="0.475962" stopColor="#16548E" />
                <stop offset="1" stopColor="#8AF3CA" />
              </linearGradient>
            </defs>
          </motion.svg>

          <div className="bg-[#07071F33] p-[16px] rounded-full">
            <div className="text-[#8AF3CA]">{renderIcon(card.id)}</div>
          </div>
        </motion.div>

        <motion.p 
          className="text-[#F5F5F7] font-bold text-[20px] mb-0"
          variants={itemVariants}
        >
          {card.title}
        </motion.p>
        <motion.p 
          className="text-[#F5F5F7] font-medium text-[20px] mb-0"
          variants={itemVariants}
        >
          {card.subtitle}
        </motion.p>

        <motion.span
          className="text-[40px] font-semibold mt-auto"
          style={{
            background: "linear-gradient(90deg, #55E3ED 0%, #8AF3CA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
          variants={valueVariants}
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {card.value}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <section className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-[80px] md:mt-[100px] gap-[40px] md:gap-20 md:px-24">
      {/* Texto de título animado */}
      <motion.div 
        className="text-center z-10 text-[#F5F5F7] flex flex-col items-center gap-[16px] md:gap-2 px-[24px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <motion.p 
          className="font-semibold text-[24px] md:text-[32px]"
          variants={textVariants}
        >
          Además,
        </motion.p>

        <motion.h2 
          className="text-[#F5F5F7] text-[32px] md:text-[48px] font-semibold text-center leading-[1.25]"
          variants={textVariants}
        >
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
        </motion.h2>

        <motion.p 
          className="text-[#F5F5F7] text-[24px] font-medium text-center"
          variants={textVariants}
        >
          Más análisis. Mejores <br className="block md:hidden" /> decisiones. Más crecimiento.
        </motion.p>
      </motion.div>

      {/* Contenedor de cards */}
      <div className="relative w-full h-[max-content] flex items-center py-[40px] md:py-8">
        {/* Imágenes de fondo */}
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

        {/* Grid de cards */}
        <motion.div 
          className="grid md:grid-cols-4 gap-[20px] md:gap-4 z-100 items-center px-[24px] md:px-4 w-full h-full md:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cardsData.map((card) => renderCard(card))}
        </motion.div>
      </div>
    </section>
  );
}