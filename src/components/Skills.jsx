import { motion } from 'framer-motion'
import { Code2, Smartphone, Sparkles, Layout, Cpu } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'React / Next.js' },
  { icon: Smartphone, label: 'React Native' },
  { icon: Layout, label: 'UI/UX & Design Systems' },
  { icon: Cpu, label: 'Animations & Performance' },
  { icon: Sparkles, label: 'Storytelling & Motion' },
]

export default function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map(({ icon: Icon, label }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3 shadow-sm"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
            <Icon size={18} />
          </span>
          <span className="font-medium text-slate-800">{label}</span>
        </motion.div>
      ))}
    </div>
  )
}
