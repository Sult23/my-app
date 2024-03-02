import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.scss'
import './i18n'
import { ScrollProvider } from './utils/ScrollContext'
import Loader from './components/loader/Loader'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollProvider>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </ScrollProvider>
    </BrowserRouter>
  </React.StrictMode>
)
reportWebVitals()
