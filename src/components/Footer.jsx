import { siteConfig } from '../data/siteConfig.js'
import FacebookLink from './FacebookLink.jsx'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#top">{siteConfig.brandName}</a>
          <p>{siteConfig.tagline}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#how-to-order">How to Order</a>
          <FacebookLink>Facebook</FacebookLink>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Relovella. All rights reserved.</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}

export default Footer
