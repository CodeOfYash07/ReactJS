import Header from './components/Header'
import Slider from './components/Slider'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Slider />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}
