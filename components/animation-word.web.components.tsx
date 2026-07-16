import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimationWordHeaderWeb = () => {
  const words = ["distribuidora.", "mayorista.", "marca."];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="text-start inline-block h-[1.2em] relative overflow-hidden w-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            background: "linear-gradient(to right, #5CF2F2, #58D4EC, #5FB7EC, #688FEE, #6F73EE, #7650F2, #8C43DD, #A34CC5, #AD50BA, #C65B9F, #DB638A, #EA6B79, #FB7269)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default AnimationWordHeaderWeb;