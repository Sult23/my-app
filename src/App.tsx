import { useCallback, useEffect, useState } from 'react'
import Layout from './components/layout/Layout'
import Loader from './components/loader/Loader'
import { Route, Routes } from 'react-router-dom'
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
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
