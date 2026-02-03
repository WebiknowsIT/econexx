"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({
  children,
  delay = 0,
  y = 40,
}) {
  return (
    <motion.div
      style={{ display: "contents" }}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
