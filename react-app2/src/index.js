import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../../react-app2/src/App.js'
import { GlobalStyle } from './styles/global.style.js'
import { GlobalProvider } from './context/global.context.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider> 
  </React.StrictMode>,
)