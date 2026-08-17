import {Routes, Route} from 'react-router-dom'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {

  return (
    <>
    <Routes>
      <Route path="/critical/" element={<Home />} />
      <Route path="/critical/about" element={<About />} />
      <Route path="/critical/contact" element={<Contact /> } />
    </Routes>
      <Footer />
    </>
  )
}

export default App
