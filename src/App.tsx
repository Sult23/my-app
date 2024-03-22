import { useEffect, useState } from 'react'
import Loader from './components/loader/Loader'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Services from './pages/services/Services'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1100)
  }, [])
  if (loading) {
    return <Loader />
  }
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
