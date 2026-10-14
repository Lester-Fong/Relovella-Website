import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Collection from './components/Collection.jsx'
import About from './components/About.jsx'
import HowToOrder from './components/HowToOrder.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Collection />
        <About />
        <HowToOrder />
      </main>
      <Footer />
    </div>
  )
}

export default App
