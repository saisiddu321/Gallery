import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter } from 'react-router-dom';
// import {
//       createBrowserRouter,
//       RouteProvider,
//       Route,
//     } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />, 
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
