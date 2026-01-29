'use client';

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

interface EducationItem {
  period: string
  degree: string
  institution: string
  description?: string
}

const educations: EducationItem[] = [
  {
    period: "2023 — Present",
    degree: "BS - Computer Science",
    institution: "University of Karachi (DCS - UBIT)",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science with focus on software development, algorithms, and mobile computing.",
  },
  {
    period: "2020 — 2022",
    degree: "Higher Secondary School Certificate",
    institution: "Govt National College",
  },
  {
    period: "2018 — 2020",
    degree: "Secondary School Certificate",
    institution: "White House Grammar School",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24">
      <motion.h2
        className="text-sm uppercase tracking-widest text-primary mb-12 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-8 h-px bg-primary" />
        Education
      </motion.h2>

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            className="group grid md:grid-cols-[140px_1fr] gap-4 md:gap-8"
            variants={itemVariants}
          >
            <div className="text-sm text-muted-foreground">{edu.period}</div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-foreground font-medium">{edu.degree}</h3>
                  <p className="text-primary text-sm">{edu.institution}</p>
                </div>
              </div>
              {edu.description && (
                <p className="text-muted-foreground text-sm leading-relaxed md:pl-11">
                  {edu.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
