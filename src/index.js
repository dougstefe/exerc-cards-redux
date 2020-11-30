import react from "react"
import ReactDom from "react-dom"
import { Provider } from 'react-redux'
import storeConfig from './store/storeConfig'

import App from "./App"


ReactDom.render(
    <Provider store={storeConfig()}>
        <App />
    </Provider>,
    document.getElementById('root')
)