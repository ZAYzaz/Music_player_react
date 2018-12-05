import React from 'react';
import ReactDOM from 'react-dom'; 
//import { Provider } from 'react-redux'
import {Provider} from 'simple-redux-connect'
import '@lib'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '@/App';
import * as serviceWorker from '@/serviceWorker';
import store from './store'
import './static/font-awesome/css/font-awesome.min.css'

// import RecomContainer from '@pages/recom/RecomContainer'
// import TopListContainer from '@pages/toplist/TopListContainer'
// import SearchContainer from '@pages/search/SearchContainer'

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
              <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
