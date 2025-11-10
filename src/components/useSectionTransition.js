import { useEffect, useState } from 'react'

// Smoothly scrolls and triggers a global overlay animation
export function useSectionTransition() {
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home')
  const [overlay, setOverlay] = useState(false)

  useEffect(() => {
    const onClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href || href.length < 2) return

      // Only handle on-page section links
      const el = document.querySelector(href)
      if (!el) return

      e.preventDefault()

      // Start overlay
      setOverlay(true)

      // After a short delay, scroll to section
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveHash(href)
      }, 250)

      // Hide overlay after full wipe
      setTimeout(() => {
        setOverlay(false)
      }, 700)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return { activeHash, overlay }
}
