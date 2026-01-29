'use client';

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

interface ExperienceItem {
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    period: "Jul 2025 — Nov 2025",
    title: "Front-End Developer (Intern)",
    company: "Fortify",
    description:
      "Developed and optimized mobile application UI screens, ensuring a seamless and user-friendly experience. Identified and resolved application errors and bugs, improving overall stability and performance. Integrated Google Ads API via OAuth2.0 for automated ad account access, campaign management, and token lifecycle handling. Implemented secure access token exchange, webhook subscriptions, and token storage logic for seamless ad performance data retrieval.",
    technologies: ["React Native", "Google Ads API", "OAuth2.0", "Webhooks"],
  },
  {
    period: "Jun 2024 — Dec 2024",
    title: "React Native Developer (Intern)",
    company: "360XpertSolutions",
    description:
      "Reviewed and debugged the complete codebase for Deen App (1M+ users), resolving critical bugs to enhance performance and stability. Designed and developed an intuitive UI for E-Invoice, ensuring a seamless user experience aligned with modern design standards. Optimized app functionality and ensured cross-platform compatibility for mobile applications on iOS and Android.",
    technologies: ["React Native", "Firebase", "Redux", "React Navigation"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <motion.h2
        className="text-sm uppercase tracking-widest text-primary mb-12 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-8 h-px bg-primary" />
        Experience
      </motion.h2>

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="group grid md:grid-cols-[140px_1fr] gap-4 md:gap-8"
            variants={itemVariants}
          >
            <div className="text-sm text-muted-foreground">{exp.period}</div>
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">
                {exp.title} ·{" "}
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {exp.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-primary">{exp.company}</span>
                )}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary border-0 hover:bg-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
