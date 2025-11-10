import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import TransitionOverlay from './components/TransitionOverlay'
import { useSectionTransition } from './components/useSectionTransition'
import { MessageCircle } from 'lucide-react'

function App() {
  const { overlay } = useSectionTransition()

  // Contact form state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890' // Change to your number, e.g., 62 for Indonesia

  const handleSendWhatsApp = () => {
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    // Basic validation
    if (!trimmedMessage) {
      alert('Tulis pesan sebelum mengirim via WhatsApp.')
      return
    }

    const text = `Halo, saya ${trimmedName || '—'}.%0AEmail: ${trimmedEmail || '—'}%0A%0APesan:%0A${encodeURIComponent(trimmedMessage)}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`

    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TransitionOverlay show={overlay} />
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
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <textarea
              placeholder="Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="md:col-span-2 rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <div className="flex gap-3 items-center">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-emerald-700 hover:shadow-md transition"
                aria-label="Send via WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                Send WhatsApp
              </button>
            </div>
            <p className="md:col-span-2 text-sm text-slate-500">Pesan akan dibuka di WhatsApp ke nomor tujuan. Anda dapat mengeditnya sebelum mengirim.</p>
          </form>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

export default App
