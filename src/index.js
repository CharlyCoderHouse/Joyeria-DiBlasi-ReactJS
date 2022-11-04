import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration // proyecto anterior dado de baja por 30 días de prueba
/* const firebaseConfig = {
  apiKey: "AIzaSyARwdTCwS2Fqwoi3Vm4o8FzuTsPX0PXRM0",
  authDomain: "coderhouse-ecommerce-8cff9.firebaseapp.com",
  projectId: "coderhouse-ecommerce-8cff9",
  storageBucket: "coderhouse-ecommerce-8cff9.appspot.com",
  messagingSenderId: "874816016995",
  appId: "1:874816016995:web:3707417b71344675dade56"
}; */
// nuevo proyecto para seguir en uso
const firebaseConfig = {
  apiKey: "AIzaSyBhUleviNO_0loZF8FQ-sNmDi9IPuaZ4ks",
  authDomain: "coder-ecommerce-916ac.firebaseapp.com",
  projectId: "coder-ecommerce-916ac",
  storageBucket: "coder-ecommerce-916ac.appspot.com",
  messagingSenderId: "994885313407",
  appId: "1:994885313407:web:ad759786f9a558ee25f04a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
