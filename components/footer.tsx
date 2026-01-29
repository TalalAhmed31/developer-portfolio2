"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="space-y-12">
        {/* CTA Section */}
        <motion.div
          className="max-w-2xl mx-auto px-6 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:ashhad.as10@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Email Me
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ashhad-ahmed-siddiqi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Footer Info */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-sm">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Tailwind CSS
            </a>
          </p>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Ashhad Ahmed Siddiqi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
