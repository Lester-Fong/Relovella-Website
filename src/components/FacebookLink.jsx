import { siteConfig } from '../data/siteConfig.js'

function FacebookLink({ children, className = '', destination = 'page', onClick }) {
  const facebookPageUrl = siteConfig.facebookPageUrl.trim()
  const messengerUrl = siteConfig.messengerUrl.trim()
  const requestedMessenger = destination === 'messenger'
  const linkUrl = requestedMessenger ? messengerUrl || facebookPageUrl : facebookPageUrl

  if (!linkUrl) {
    return (
      <span
        className={`${className} is-disabled`.trim()}
        aria-disabled="true"
        title={requestedMessenger ? 'Messenger link coming soon' : 'Facebook page link coming soon'}
      >
        <span>{children}</span>
        <span className="cta-status" aria-hidden="true">Soon</span>
      </span>
    )
  }

  return (
    <a
      className={className}
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
      <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export default FacebookLink
