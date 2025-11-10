import { motion } from 'framer-motion'
import { Github, Link } from 'lucide-react'

const projects = [
  {
    title: 'Narrative UI Kit',
    tag: 'Frontend',
    description: 'A component system that focuses on narrative-first interfaces with micro-interactions.',
    links: [
      { label: 'Preview', href: '#', icon: Link },
      { label: 'Code', href: '#', icon: Github },
    ],
  },
  {
    title: 'Voyage App',
    tag: 'React Native',
    description: 'Travel storytelling app with on-device motion effects and offline caching.',
    links: [
      { label: 'Preview', href: '#', icon: Link },
      { label: 'Code', href: '#', icon: Github },
    ],
  },
  {
    title: 'Micro Motion Lab',
    tag: 'Frontend',
    description: 'A playground of subtle animations and transitions for immersive product moments.',
    links: [
      { label: 'Preview', href: '#', icon: Link },
      { label: 'Code', href: '#', icon: Github },
    ],
  },
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-cyan-50" />
          <div className="relative">
            <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1">{p.tag}</span>
            <h3 className="mt-4 text-xl font-bold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-slate-600">{p.description}</p>
            <div className="mt-4 flex gap-3">
              {p.links.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium hover:bg-slate-50">
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
