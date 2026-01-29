import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Hero />
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Footer />
        </div>
      </main>
    </>
  )
}
