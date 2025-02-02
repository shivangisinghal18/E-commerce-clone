import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/shopping-cart.jsx';

// const stripe = Stripe('pk_test_51QD2OOGCWDzuuoy2hPvUP4LsZswxmX2pYhSd2nhjt1GvfdPdqc6cQrQMvwToU2mzXPP0HjowKbU575PuIxjYXhxy00lbldoPzJ');

// const appearance = { /* appearance */ };
// const options = { /* options */ };
// const elements = stripe.elements({ clientSecret, appearance });
// const paymentElement = elements.create('payment', options);
// paymentElement.mount('#payment-element');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
