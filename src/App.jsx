import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <main>
        <Section
          id="about"
          eyebrow="About"
          title="Innovative storytelling meets code"
          description="I design and build playful, modern experiences across web and mobile — blending interaction, motion, and clarity to shape meaningful products."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Frontend Development</h3>
              <p className="mt-2 text-slate-600">Crafting responsive interfaces with React, focusing on delightful micro-interactions, accessibility, and performance.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">React Native</h3>
              <p className="mt-2 text-slate-600">Building mobile experiences that feel natural and fluid, with attention to motion and narrative flow.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Selected Work"
          title="Projects that tell a story"
          description="A few highlights that blend technology and narrative."
        >
          <Projects />
        </Section>

        <Section
          id="skills"
          eyebrow="Capabilities"
          title="What I work with"
          description="The tools and disciplines I use to bring ideas to life."
        >
          <Skills />
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let’s build something memorable"
          description="Have a product in mind or just want to connect? Send a note."
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <input type="email" placeholder="Email" className="rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <textarea placeholder="Message" rows="5" className="md:col-span-2 rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <div>
              <button type="button" className="rounded-full bg-slate-900 text-white px-6 py-3 font-semibold shadow-sm hover:shadow-md transition">
                Send Message
              </button>
            </div>
          </form>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

export default App
