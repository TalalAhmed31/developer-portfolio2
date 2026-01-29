"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const titles = [
  "React Native Developer",
  "Mobile App Developer",
  "Cross Platform Developer",
  "Frontend Engineer",
  "Programmer",
  "Problem Solver",
]

function TypewriterTitle() {
  const [displayText, setDisplayText] = useState("")
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentTitle.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 80)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, titleIndex])

  return (
    <div className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary h-10 md:h-12 lg:h-14">
      {displayText}
      <motion.span
        className="inline-block w-1 h-8 md:h-10 lg:h-12 bg-primary ml-2 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles-hero"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#9fc9ff"
          speed={2}
        />
      </div>
      <motion.div
        className="space-y-8 md:space-y-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/profile.jpg"
            alt="Profile photo"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground text-balance leading-tight" variants={itemVariants}>
          Ashhad Ahmed Siddiqi
        </motion.h1>
        <div className="text-2xl md:text-3xl lg:text-4xl">
          <TypewriterTitle />
        </div>
        <motion.p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed" variants={itemVariants}>
          Building modern, responsive, and high-performance mobile applications with a strong focus on performance, usability, and scalability.
        </motion.p>

        <motion.div className="flex items-center gap-6 pt-6" variants={itemVariants}>
          <a
            href="https://github.com/ashhad-ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://linkedin.com/in/ashhad-ahmed-siddiqi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href="mailto:ashhad.as10@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-7 h-7" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
