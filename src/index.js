import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './App';
import * as serviceWorker from './serviceWorker';
// import { store } from "./store";
// import { Provider } from "react-redux";

ReactDOM.render(
<AppRouter />,
 document.getElementById('root'));

serviceWorker.unregister();
