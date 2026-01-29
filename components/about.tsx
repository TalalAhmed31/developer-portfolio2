"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function About() {
  return (
    <section id="about" className="py-24">
      <motion.h2
        className="text-sm uppercase tracking-widest text-primary mb-8 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-8 h-px bg-primary" />
        About
      </motion.h2>

      <motion.div
        className="space-y-6 text-muted-foreground leading-relaxed"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={itemVariants}>
          I&apos;m a Frontend Developer specializing in React Native, with a strong focus on building scalable mobile applications and modern web interfaces.
        </motion.p>
        <motion.p variants={itemVariants}>
          I enjoy crafting pixel-perfect UI components, optimizing performance, and delivering seamless experiences across mobile and web platforms. My daily toolkit includes{" "}
          <span className="text-foreground font-medium">React Native</span>,{" "}
          <span className="text-foreground font-medium">React.js</span>,{" "}
          <span className="text-foreground font-medium">Hooks</span>,{" "}
          <span className="text-foreground font-medium">Redux</span>, and clean component-driven architecture.
        </motion.p>
        <motion.p variants={itemVariants}>
          From integrating{" "}
          <span className="text-foreground font-medium">REST APIs</span> and{" "}
          <span className="text-foreground font-medium">Firebase</span> to designing responsive layouts, I aim to build products that are fast, reliable, and user-centric—whether they live on a smartphone or in the browser.
        </motion.p>
        <motion.p variants={itemVariants}>
          Adaptable to agile environments and collaborative teams, I&apos;m
          passionate about staying current with the latest mobile development
          trends and continuously improving my skills.
        </motion.p>
      </motion.div>
    </section>
  )
}
