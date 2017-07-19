import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import Store from './store'

import Home from './screens/Home'
import Dashboard from './screens/Dashboard'

import './assets/styles/app.css'

const StoreInstance = Store()

ReactDOM.render((
    <Provider store={StoreInstance}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))

registerServiceWorker();