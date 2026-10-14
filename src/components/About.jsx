import { siteConfig } from '../data/siteConfig.js'
import SmartImage from './SmartImage.jsx'

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-visual">
          <SmartImage
            className="about-image"
            imageClassName="about-image-element"
            src={siteConfig.assets.about}
            srcSet={siteConfig.assets.aboutSrcSet}
            sizes="(max-width: 56rem) 85vw, 42vw"
            alt="Crystal-accented women's watch styled on the wrist"
          />
          <p className="about-image-note">Feminine details, thoughtfully chosen.</p>
        </div>

        <div className="about-copy">
          <p className="eyebrow eyebrow-light">Our point of view</p>
          <h2 id="about-title">A Little Elegance Goes a Long Way.</h2>
          <p>
            At Relovella, we believe everyday style deserves a touch of elegance. Our collection brings together
            beautiful, feminine designs and accessible prices, helping you find pieces that complement every moment.
          </p>
          <div className="about-signature" aria-label={`${siteConfig.brandName}, ${siteConfig.tagline}`}>
            <span>{siteConfig.brandName}</span>
            <small>{siteConfig.tagline}</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
