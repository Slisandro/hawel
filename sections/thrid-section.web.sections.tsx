import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Clock, Triangle } from "lucide-react";
import Image from "next/image";

export default function ThirdSectionWeb() {
  // Variants para el contenedor principal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Variants para el texto del título
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Variants para el subtítulo
  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
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
      scale: 1.01,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Variants para las imágenes
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.01,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  // Variants para los badges (iconos con texto)
  const badgeVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.01,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  // Variants para el botón
  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.01,
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Variants para el texto de las cards
  const cardTextVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
    },
  };

  // Datos de las cards para evitar repetición
  const cardsData = [
    {
      id: 1,
      title: "Entiende las reglas de tu negocio.",
      description:
        "Se sincroniza con tu stock real, valida las deudas de clientes y aplica listas de precios personalizadas.",
      image: "/web/steps/macbook-mockup.png",
      imageAlt: "Second section image",
      imageWidth: 400,
      imageHeight: 400,
      imageClassName: "object-cover rounded-lg w-[320px] h-[320px] md:w-full md:h-full",
      badge: {
        icon: BadgeCheck,
        iconClassName: "fill-[#55E3ED] text-white",
        text: "0 errores, pedidos 100% exactos.",
      },
    },
    {
      id: 2,
      title: "Sube el ticket promedio.",
      description:
        "Detecta el interés y sugiere ofertas o productos complementarios para aumentar el valor de cada orden— sin que nadie tenga que hacer nada.",
      image: "/web/steps/phone-mockup.png",
      imageAlt: "Second section image",
      imageWidth: 400,
      imageHeight: 400,
      imageClassName: "object-cover rounded-lg w-[320px] h-[250px] md:w-full md:h-full",
      badge: {
        icon: Triangle,
        iconClassName: "fill-[#8AF3CA] text-white",
        text: "19% ticket promedio",
      },
    },
    {
      id: 3,
      title: "Reduce la pérdida de clientes.",
      description:
        "Identifica cuando un cliente reduce su frecuencia o volumen de compra. Te avisa en el momento justo para que puedas reactivarlo antes de que se vaya.",
      image: "/web/steps/popup-mockup.png",
      imageAlt: "Second section image",
      imageWidth: 400,
      imageHeight: 400,
      imageClassName: "object-cover rounded-lg w-[320px] h-[350px] md:w-full md:h-full",
      badge: {
        icon: Triangle,
        iconClassName: "rotate-180 fill-[#FD7366] text-white",
        text: "0 errores, pedidos 100% exactos.",
      },
    },
    {
      id: 4,
      title: "Vende activo las 24 horas",
      description:
        "Recibe, procesa y confirma pedidos incluso fuera del horario comercial, fines de semana o feriados.",
      image: "/web/steps/notifications-mockup.png",
      imageAlt: "Second section image",
      imageWidth: 400,
      imageHeight: 400,
      imageClassName: "object-cover rounded-lg w-[320px] h-[320px] md:w-full md:h-full",
      badge: {
        icon: Clock,
        iconClassName: "fill-[#55E3ED] text-white",
        text: "0 errores, pedidos 100% exactos.",
      },
    },
  ];

  return (
    <motion.section
      className="min-h-[100vh] h-auto flex items-center flex-col justify-start mt-0 md:mt-[100px] px-[24px] gap-[40px] md:gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Título y subtítulo */}
      <motion.div
        className="flex flex-col items-center justify-center gap-[16px] md:gap-4 z-10 mb-[40px] md:mb-0"
        variants={containerVariants}
      >
        <motion.h2
          className="text-[#F5F5F7] text-[32px] text-start md:text-[48px] font-semibold md:text-center"
          variants={titleVariants}
        >
          <span
            style={{
              background:
                "linear-gradient(90deg, #55CFED 0%, #55CFED 3%, #8AF3CA 10%, #8AF3CA 15%, #F5F5F7 22%, #F5F5F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Hawel
          </span>{" "}
          no solo gestiona pedidos, es un
          <br className="hidden md:block" /> un cerebro comercial para tu negocio.
        </motion.h2>

        <motion.p
          className="text-[#92949F] text-[20px] md:text-[24px] font-medium text-start md:text-center"
          variants={subtitleVariants}
        >
          Detecta oportunidades invisibles para el ojo humano. Es proactivo.
          <br />
          Y se vuelve más inteligente con el tiempo.
        </motion.p>
      </motion.div>

      {/* Grid de cards */}
      <motion.div
        className="w-full h-full grid grid-cols-1 md:grid-cols-2 md:px-48 gap-[24px] md:gap-10"
        variants={containerVariants}
      >
        {cardsData.map((card) => {
          const IconComponent = card.badge.icon;
          return (
            <motion.div
              key={card.id}
              className="w-full h-full py-[24px] px-[20px] md:px-[32px] md:py-[32px] md:!h-[650px] flex-col flex items-center justify-between bg-[#F5F5F7] rounded-[32px] gap-[20px]"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Texto de la card */}
              <motion.div
                className="w-full flex flex-col gap-[8px]"
                variants={cardTextVariants}
              >
                <motion.p
                  className="text-[#07071F] text-[24px] font-bold w-full"
                  variants={cardTextVariants}
                >
                  {card.title}
                </motion.p>
                <motion.span
                  className="text-[#676871] leading-[1.25] text-[20px] font-regular"
                  variants={cardTextVariants}
                >
                  {card.description}
                </motion.span>
              </motion.div>

              {/* Imagen */}
              <motion.div
                className="w-full rounded-lg"
                variants={imageVariants}
                whileHover="hover"
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  height={card.imageHeight}
                  width={card.imageWidth}
                  className={card.imageClassName}
                />
              </motion.div>

              {/* Badge */}
              <motion.span
                className="text-[20px] font-bold flex items-center w-full gap-[12px] md:gap-2 text-[#07071F]"
                variants={badgeVariants}
                whileHover="hover"
              >
                <IconComponent className={card.badge.iconClassName} />
                {card.badge.text}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Botón */}
      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
        <Button className="px-[32px] py-[32px] bg-white text-[#07071F] rounded-full font-bold text-[20px]">
          Comenzar
        </Button>
      </motion.div>
    </motion.section>
  );
}