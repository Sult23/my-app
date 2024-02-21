import { useCallback, useEffect, useState } from 'react'
import Layout from './components/layout/Layout'
import Loader from './components/loader/Loader'

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
      <Layout></Layout>
    </div>
  )
}

export default App
