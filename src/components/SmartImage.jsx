import { useEffect, useState } from 'react'

function SmartImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  srcSet,
  sizes,
  style,
}) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setHasError(false)
  }, [src])

  if (!src || hasError) {
    return (
      <div
        className={`${className} image-fallback`.trim()}
        role="img"
        aria-label={`${alt}. Image coming soon.`}
      >
        <span>Relovella</span>
        <small>Image coming soon</small>
      </div>
    )
  }

  return (
    <div className={className}>
      <img
        className={imageClassName}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        onError={() => setHasError(true)}
        style={style}
      />
    </div>
  )
}

export default SmartImage
