import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'

export default async function render(_url: string, document: string) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  return document.replace('<!--app-html-->', html);
}
