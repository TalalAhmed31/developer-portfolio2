'use client';

import { motion } from "framer-motion"
import {
  Smartphone,
  Code2,
  Database,
  Users,
  Palette,
  GitBranch,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "React Navigation", "Push Notifications", "Firebase Chat"],
  },
  {
    title: "Languages & Frontend",
    icon: Code2,
    skills: ["JavaScript (ES6+)", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    icon: Database,
    skills: ["Firebase", "Google Authentication", "REST API Integration", "Redux Toolkit"],
  },
  {
    title: "State Management",
    icon: Palette,
    skills: ["React Hooks", "Redux Toolkit", "useState", "Context API"],
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Responsive Design"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Time Management", "Problem-Solving", "Agile Workflow", "Communication", "Testing & Debugging"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <motion.h2
        className="text-sm font-semibold uppercase tracking-widest text-primary mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="group p-5 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                {category.icon && <category.icon className="w-4 h-4" />}
              </div>
              <h3 className="font-medium text-foreground">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
