"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ProjectModal } from "./project-modal"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  platform: "iOS" | "Android" | "Cross-platform" | "Web"
  appStoreUrl?: string
  playStoreUrl?: string
  githubUrl?: string
  isWeb?: boolean
  gallery?: string[]
}

const projects: Project[] = [
  {
    title: "Deen App",
    description:
      "Contributed to UI fixes in a 1Million+ users Islamic app. Debugged and updated code with the latest React Native updates to improve performance and stability.",
    image: "/deenApp/1.png",
    technologies: ["React Native", "Firebase", "Redux", "React Navigation"],
    platform: "Cross-platform",
    playStoreUrl: "#",
    appStoreUrl: "#",
    gallery: [
      "/deenApp/1.png",
      "/deenApp/2.png",
      "/deenApp/3.png",
      "/deenApp/4.png",
      "/deenApp/5.png",
      "/deenApp/6.png",
    ],
  },
  {
    title: "E-Invoice",
    description:
      "Designed and developed UI screens for an electronic invoicing application at 360Xpert Solutions, ensuring a seamless user experience aligned with modern design standards.",
    image: "/projects/e-invoice.jpg",
    technologies: ["React Native", "Redux Toolkit", "REST APIs"],
    platform: "Cross-platform",
  },
  {
    title: "Business Directory App",
    description:
      "Developed a modern UI with Google Authentication for login/signup. Used useState hooks for state management and modern libraries like FlatList and React Navigation.",
    image: "/business-directory/1.png",
    technologies: ["React Native", "Google Auth", "React Navigation", "FlatList"],
    platform: "Cross-platform",
    githubUrl: "https://github.com/Ashhad-Ahmed/business-directory",
    gallery: [
      "/business-directory/1.png",
      "/business-directory/2.png",
      "/business-directory/3.png",
      "/business-directory/4.png",
      "/business-directory/5.png",
      "/business-directory/6.png",
      "/business-directory/7.png",
    ],
  },
  {
    title: "Stock Management System",
    description:
      "Developed and maintained an intuitive stock management system using React.js with real-time inventory tracking. Integrated APIs for sales, purchases, and low-stock alert automation.",
    image: "/projects/stock-management.jpg",
    technologies: ["React.js", "REST APIs", "State Management"],
    platform: "Web",
    isWeb: true,
    githubUrl: "#",
  },
  {
    title: "Travel App",
    description:
      "Designed a responsive travel web app with a clean, mobile-first user interface. Added destination search, trip planning, and booking features with performance optimization.",
    image: "/projects/travel-app.jpg",
    technologies: ["React.js", "Responsive Design", "REST APIs"],
    platform: "Web",
    isWeb: true,
    githubUrl: "#",
  },
  {
    title: "YouTube Clone",
    description:
      "Built a responsive video streaming app with an intuitive user interface. Added video playback, search, and user interaction features.",
    image: "/projects/youtube-clone.jpg",
    technologies: ["React.js", "YouTube API", "Responsive Design"],
    platform: "Web",
    isWeb: true,
    githubUrl: "#",
  },
]

function PhoneMockup({ image, title }: { image: string; title: string }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative mx-auto w-[180px] h-[360px] bg-card rounded-[2.5rem] p-2 shadow-xl border border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-card rounded-b-2xl" />
      <div className="w-full h-full rounded-4xl bg-secondary overflow-hidden">
        {!imageError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-4">
              <Smartphone className="w-12 h-12 mx-auto text-primary/40 mb-3" />
              <p className="text-xs text-muted-foreground">{title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function WebMockup({ image, title }: { image: string; title: string }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-[400px] h-[240px] bg-card rounded-lg p-1 shadow-xl border border-border overflow-hidden">
      <div className="w-full h-6 bg-secondary border-b border-border rounded-t flex items-center gap-2 px-3">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="w-full h-[calc(100%-28px)] bg-secondary overflow-hidden">
        {!imageError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-4">
              <Smartphone className="w-12 h-12 mx-auto text-primary/40 mb-3" />
              <p className="text-xs text-muted-foreground">{title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function PlatformBadge({ platform }: { platform: Project["platform"] }) {
  const colors = {
    iOS: "bg-blue-500/10 text-blue-400",
    Android: "bg-green-500/10 text-green-400",
    "Cross-platform": "bg-primary/10 text-primary",
    Web: "bg-purple-500/10 text-purple-400",
  }

  return (
    <span className={`text-xs px-2 py-1 rounded-full ${colors[platform]}`}>
      {platform}
    </span>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-24">
      <motion.h2
        className="text-sm uppercase tracking-widest text-primary mb-12 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-8 h-px bg-primary" />
        Projects
      </motion.h2>

      <motion.div
        className="space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group grid lg:grid-cols-[280px_1fr] gap-8 items-center cursor-pointer"
            variants={itemVariants}
            onClick={() => setSelectedProject(project)}
          >
            <motion.div
              className="order-2 lg:order-1"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hover:opacity-75 transition-opacity">
                {project.isWeb ? (
                  <WebMockup image={project.image} title={project.title} />
                ) : (
                  <PhoneMockup image={project.image} title={project.title} />
                )}
              </div>
            </motion.div>

            <div className="order-1 lg:order-2 space-y-4 cursor-pointer hover:opacity-75 transition-opacity">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <PlatformBadge platform={project.platform} />
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-secondary text-muted-foreground border-0"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm"
                    aria-label={`View ${project.title} on App Store`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    App Store
                  </a>
                )}
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm"
                    aria-label={`View ${project.title} on Play Store`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Play Store
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  )
}
