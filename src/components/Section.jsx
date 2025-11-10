import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">{eyebrow}</p>
          )}
          <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-slate-600 text-lg">{description}</p>
          )}
        </motion.div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
