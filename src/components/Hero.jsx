import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight"
            >
              Herdiansyah
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500">Frontend & React Native Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-lg sm:text-xl text-slate-700 max-w-xl"
            >
              Innovative storytelling through delightful interfaces, smooth motion, and immersive mobile experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#projects" className="rounded-full bg-slate-900 text-white px-6 py-3 font-semibold shadow-sm hover:shadow-md transition">
                Explore Work
              </a>
              <a href="#contact" className="rounded-full px-6 py-3 font-semibold border border-slate-300 bg-white/70 backdrop-blur hover:bg-white transition">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white/90 to-transparent" />
    </section>
  )
}
