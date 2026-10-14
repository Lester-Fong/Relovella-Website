import { siteConfig } from '../data/siteConfig.js'
import FacebookLink from './FacebookLink.jsx'
import SmartImage from './SmartImage.jsx'

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Relovella <span aria-hidden="true">•</span> Timeless Elegance</p>
          <h1 id="hero-title">Elegance for <em>Every Moment.</em></h1>
          <p className="hero-description">
            Discover timeless-inspired women&apos;s watches that bring a little elegance to your everyday style.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#collection">Explore Collection <span aria-hidden="true">↓</span></a>
            <FacebookLink className="button button-quiet">Visit Our Facebook</FacebookLink>
          </div>
          <p className="price-note"><span aria-hidden="true" /> Women&apos;s Watches {'\u2022'} {siteConfig.priceRange}</p>
        </div>

        <div className="hero-visual">
          <SmartImage
            className="hero-image"
            imageClassName="hero-image-element"
            src={siteConfig.assets.hero}
            srcSet={siteConfig.assets.heroSrcSet}
            sizes="(max-width: 56rem) calc(100vw - 2.3rem), 55vw"
            alt="Two elegant gold-tone watches worn on the wrist"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero-caption" aria-hidden="true">
            <span>Women&apos;s fashion watches</span>
            <span>Philippines</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
