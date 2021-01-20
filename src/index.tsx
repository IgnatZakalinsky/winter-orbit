import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './i1-main/m1-ui/u1-app/App'

ReactDOM.render(<>
        <React.StrictMode>{/*off in release*/}
            <App/>
        </React.StrictMode>
    </>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
