"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    image: string
    technologies: string[]
    platform: "iOS" | "Android" | "Cross-platform" | "Web"
    appStoreUrl?: string
    playStoreUrl?: string
    githubUrl?: string
    gallery?: string[]
  }
}

const galleryImages = [
  "/projects/deen-app.jpg",
  "/projects/e-invoice.jpg",
  "/projects/business-directory.jpg",
  "/projects/stock-management.jpg",
]

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = project.gallery || [project.image, ...galleryImages.slice(0, 3)]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border">
              {/* Close Button */}
              <div className="sticky top-0 z-10 bg-card border-b border-border p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-6 h-6 text-muted-foreground" />
                </motion.button>
              </div>

              <div className="p-6 md:p-8">
                {/* Gallery Carousel */}
                <div className="mb-8">
                  <div className="relative bg-secondary rounded-xl overflow-hidden aspect-video mb-4">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                      <>
                        <motion.button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </motion.button>
                        <motion.button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </motion.button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm text-white">
                          {currentImageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Dots */}
                  {images.length > 1 && (
                    <div className="flex justify-center gap-2">
                      {images.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? "bg-primary w-8"
                              : "bg-secondary w-2 hover:bg-muted-foreground"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-primary mb-3">
                      Description
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-primary mb-3">
                      Technologies
                    </h3>
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
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-primary mb-3">
                      Platform
                    </h3>
                    <span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {project.platform}
                    </span>
                  </div>

                  {(project.githubUrl || project.appStoreUrl || project.playStoreUrl) && (
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-primary mb-3">
                        Links
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-secondary hover:bg-muted rounded-lg text-foreground transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            GitHub
                          </motion.a>
                        )}
                        {project.appStoreUrl && (
                          <motion.a
                            href={project.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            App Store
                          </motion.a>
                        )}
                        {project.playStoreUrl && (
                          <motion.a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-lg transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Play Store
                          </motion.a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
