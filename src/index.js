import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import { Normalize } from 'styled-normalize'

import i18n from './i18n'
import store from './store'
import App from './App'

import { GlobalStyle } from './styles'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Normalize />
      <GlobalStyle />

      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
