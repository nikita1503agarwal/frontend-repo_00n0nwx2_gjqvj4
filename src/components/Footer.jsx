export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Herdiansyah — Crafting stories with code.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Twitter/X</a>
          <a href="#" className="hover:text-slate-900">GitHub</a>
          <a href="#" className="hover:text-slate-900">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
