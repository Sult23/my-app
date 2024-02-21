import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.scss'
import './i18n'
import { ScrollProvider } from './utils/ScrollContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </Suspense>
  </React.StrictMode>
)
reportWebVitals()
