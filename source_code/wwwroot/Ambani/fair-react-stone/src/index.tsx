import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { WebSocketProvider } from './context/webSocket'
import App from './App'

import reportWebVitals from './reportWebVitals'
import { WebSocketUserProvider } from './context/webSocketUser'
import { WebSocketCasinoProvider } from './context/webSocketCasino'
import { fixResizeObserverError } from './utils/resizeObserverFix'

// Initialize ResizeObserver error fix
fixResizeObserverError();
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <Suspense
      fallback={
        <div className='suspense-loading'>
          <img src='/imgs/logogold.png' width={200} />
        </div>
      }
    >
      <Provider store={store}>
        <WebSocketProvider>
          <WebSocketUserProvider>
            <WebSocketCasinoProvider>
              <App />
            </WebSocketCasinoProvider>
          </WebSocketUserProvider>
        </WebSocketProvider>
      </Provider>
    </Suspense>,
    rootElement
  )

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals()
}