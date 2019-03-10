import React from 'react'
import ReactDOM from 'react-dom'
import { pdfjs } from 'react-pdf';
import 'semantic-ui-css/semantic.min.css'

import * as serviceWorker from './serviceWorker'

import App from './root'
import Firebase, { FirebaseContext } from './components/Firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
)

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

serviceWorker.unregister()
