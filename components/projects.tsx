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
    title: "MovieFlix",
    description:
      "Developed a Netflix-inspired movie streaming app from scratch using React Native with cross-platform compatibility. Integrated React Reanimated for modern animated UIs and implemented custom hooks for reusable business logic. Features multiple screens including Home, Search, Profile, and Saved Movies. The application integrates TMDB (The Movie Database) API to fetch and display latest and trending movies on the home screen in real time. Implemented API calls using custom React hooks, allowing modular data-fetching logic across different screens. This approach improved code readability, avoided repetition, and strengthened understanding of component-based architecture, custom hooks, and scalable app structure in React Native.",
    image: "/movieFlix/1.jpg",
    technologies: [
      "React Native",
      "React Reanimated",
      "Custom Hooks",
      "TMDB API",
      "React Navigation",
      "State Management",
    ],
    platform: "Cross-platform",
    githubUrl: "https://github.com/Ashhad-Ahmed/MovieApp",
    gallery: [
      "/movieFlix/1.jpg",
      "/movieFlix/2.png",
      "/movieFlix/3.jpg",
      "/movieFlix/4.jpg",
    ],
  },
  {
    title: "Deen App",
    description:
      "I worked on a Deen mobile application with 1M+ users, where I developed the home screen and set up navigation between core sections of the app. I also resolved multiple UI issues, including fixing layout inconsistencies and correcting a problem where Quranic ayat text was being cut off on certain devices. In addition, I contributed to the Qibla direction feature by working on rotation handling and integrating device location support to help users accurately identify the Qibla direction. This role gave me hands-on experience working on a large-scale production app, focusing on real user issues, UI reliability, and overall app stability.",
    image: "/deenApp/1.png",
    technologies: ["React Native", "Firebase", "Redux", "React Navigation"],
    platform: "Cross-platform",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.deen&hl=en&pli=1",
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
      "During my internship, I worked on an E-Invoice mobile application, where I was involved in both the UI implementation and application logic. I developed the app screens from scratch, including the splash screen, login screen, and sign-up screen, and set up smooth navigation between screens. The application was designed to generate digital invoices, where user details, product or service information, and pricing are processed to create a structured invoice for record-keeping and business use. As part of my role, I focused on understanding and implementing the invoice generation flow, ensuring that once the required process was completed, the invoice was generated correctly within the app. I closely worked on the logic that controlled how and when the invoice is created, making sure the data flow and output were accurate. This project helped me gain practical experience in building real-world app features, handling navigation, and understanding how business-oriented applications function at a foundational level.",
    image: "/eInvoice/1.png",
    technologies: ["React Native", "Redux Toolkit", "REST APIs"],
    platform: "Cross-platform",
    gallery: ["/eInvoice/1.png"],
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
      "I developed a Stock Management web application using React, designed for company-level usage to manage and monitor product inventory efficiently. The system handled stock entry, product availability tracking, and inventory updates through a centralized database. The application supported role-based access control, with separate Admin and User roles. Admin users could manage products, update stock quantities, and add new inventory, while users could search products and view remaining stock levels in real time. To improve efficiency, the system automated inventory handling workflows and incorporated AI-assisted logic to support stock monitoring and decision-making, reducing manual effort in tracking product availability. This project strengthened my understanding of React-based web applications, database-driven systems, role-based authentication, and inventory automation concepts.",
    image: "/stockManagement/1.png",
    technologies: ["React.js", "REST APIs", "State Management"],
    platform: "Web",
    isWeb: true,
    githubUrl: "#",
    gallery: ["/stockManagement/1.png", "/stockManagement/2.png"],
  },
  {
    title: "Travel App",
    description:
      "Designed a responsive travel web app with a clean, mobile-first user interface. Added destination search, trip planning, and booking features with performance optimization.",
    image: "/travelApp/1.png",
    technologies: ["React.js", "Responsive Design", "REST APIs"],
    platform: "Web",
    isWeb: true,
    githubUrl: "#",
    gallery: [
      "/travelApp/1.png",
      "/travelApp/2.png",
      "/travelApp/3.png",
      "/travelApp/4.png",
    ],
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
