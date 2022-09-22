import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from "aos";
import "aos/dist/aos.css"; 
import App from './App';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
AOS.init({
  duration: 1200,
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
