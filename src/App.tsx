import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { TrustSection } from './components/sections/TrustSection'
import { ProblemSection } from './components/sections/ProblemSection'
import './styles/App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemSection />
      </main>
    </>
  )
}

export default App
