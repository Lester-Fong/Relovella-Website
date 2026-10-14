import { siteConfig } from '../data/siteConfig.js'

function FacebookLink({ children, className = '', onClick }) {
  const facebookUrl = siteConfig.facebookUrl.trim()

  if (!facebookUrl) {
    return (
      <span
        className={`${className} is-disabled`.trim()}
        aria-disabled="true"
        title="Facebook page link coming soon"
      >
        <span>{children}</span>
        <span className="cta-status" aria-hidden="true">Soon</span>
      </span>
    )
  }

  return (
    <a
      className={className}
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  )
}

export default FacebookLink
