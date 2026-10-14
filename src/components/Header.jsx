import { useEffect, useState } from 'react'
import { siteConfig } from '../data/siteConfig.js'
import FacebookLink from './FacebookLink.jsx'

const navigation = [
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
  { label: 'How to Order', href: '#how-to-order' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#top" aria-label={`${siteConfig.brandName} home`} onClick={closeMenu}>
          <span className="wordmark-mark" aria-hidden="true">R</span>
          <span>{siteConfig.brandName}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <FacebookLink className="header-facebook">Facebook</FacebookLink>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : true}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <FacebookLink className="mobile-facebook" onClick={closeMenu}>Visit Facebook</FacebookLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
