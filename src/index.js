import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Products from './components/Products';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './components/Cart';
import Payment from './components/Payment';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/payment" element={<Payment/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
