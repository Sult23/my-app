import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.scss'
import './i18n'
import { ScrollProvider } from './utils/ScrollContext'
import Loader from './components/loader/Loader'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ScrollProvider>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ScrollProvider>
  </React.StrictMode>
)
reportWebVitals()
