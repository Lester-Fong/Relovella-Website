import { siteConfig } from '../data/siteConfig.js'
import FacebookLink from './FacebookLink.jsx'
import SmartImage from './SmartImage.jsx'

function Collection() {
  return (
    <section className="collection-section" id="collection" aria-labelledby="collection-title">
      <div className="section-intro">
        <p className="eyebrow">Curated for everyday elegance</p>
        <div className="section-heading-row">
          <h2 id="collection-title">The Collection</h2>
          <p>A curated selection of styles for every moment.</p>
        </div>
      </div>

      <div className="lookbook-grid">
        {siteConfig.collections.map((collection, index) => (
          <article className={`collection-item collection-item-${index + 1}`} key={collection.name}>
            <SmartImage
              className="collection-media"
              imageClassName="collection-image"
              src={collection.image}
              srcSet={collection.srcSet}
              sizes="(max-width: 42rem) calc(100vw - 2.3rem), (max-width: 56rem) 50vw, 58vw"
              alt={`${collection.name} women's fashion watch collection`}
              style={{ objectPosition: collection.position }}
            />
            <div className="collection-caption">
              <p className="collection-number">0{index + 1}</p>
              <div>
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="collection-inquiry">
        <p>Seen a style that feels like you?</p>
        <FacebookLink className="collection-inquiry-link" destination="messenger">
          {siteConfig.messengerUrl.trim() ? 'Ask About a Style on Messenger' : 'Ask About a Style on Facebook'}
        </FacebookLink>
      </div>
    </section>
  )
}

export default Collection
