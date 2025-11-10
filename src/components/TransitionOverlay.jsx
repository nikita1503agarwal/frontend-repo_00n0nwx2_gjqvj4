import { motion, AnimatePresence } from 'framer-motion'

export default function TransitionOverlay({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Top wipe */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 origin-top bg-gradient-to-b from-slate-900 via-indigo-700 to-fuchsia-600"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          />
          {/* Bottom wipe */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-gradient-to-t from-slate-900 via-indigo-700 to-cyan-500"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          />
          {/* Center glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)] mix-blend-screen" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
