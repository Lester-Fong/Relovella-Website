import FacebookLink from './FacebookLink.jsx'

const steps = [
  {
    title: 'Browse the collection',
    text: 'Explore the curated styles above and notice the pieces that feel most like you.',
  },
  {
    title: 'Choose your favorites',
    text: 'Keep a screenshot of the watch designs you love so they are easy to identify.',
  },
  {
    title: 'Message Relovella',
    text: 'Contact us on Facebook to confirm the design, availability, and order details.',
  },
]

function HowToOrder() {
  return (
    <section className="order-section" id="how-to-order" aria-labelledby="order-title">
      <div className="order-inner">
        <div className="order-heading">
          <p className="eyebrow">A simple way to order</p>
          <h2 id="order-title">Found Your Favorite?</h2>
          <p>From discovering your style to confirming your order, we&apos;ll keep it personal and easy.</p>
        </div>

        <ol className="order-steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="order-cta">
          <FacebookLink className="button button-gold">Message Us on Facebook</FacebookLink>
          <p>We&apos;ll confirm the design and availability with you directly.</p>
        </div>
      </div>
    </section>
  )
}

export default HowToOrder
