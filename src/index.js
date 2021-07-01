import React, { Suspense } from 'react'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import 'semantic-ui-css/semantic.min.css'

let darkMode = localStorage.getItem('theme')=== 'theme-dark'

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ru', 'cn'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })


  const loadingMarkup = (
    <div style={{display:"flex",  justifyContent:"center", alignItems:"center", width:"100vr", height:"100vh",  backgroundColor: darkMode ? "#000" : "#F7F8FD"}}>
      <h1 style={{color: darkMode ? "#fff" : "#5A6BF0",}}>Loading...</h1>
    </div>
  )



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
)

