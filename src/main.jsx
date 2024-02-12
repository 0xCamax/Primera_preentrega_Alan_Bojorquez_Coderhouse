import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

ReactDOM.createRoot(document.getElementById('root')).render(  
    <App />

)

const firebaseConfig = {
  apiKey: "AIzaSyCa2SGHYmx2D8psBGZCz3_W1eAHF3hVheU",
  authDomain: "react-coder-1a9e8.firebaseapp.com",
  projectId: "react-coder-1a9e8",
  storageBucket: "react-coder-1a9e8.appspot.com",
  messagingSenderId: "429013620255",
  appId: "1:429013620255:web:da76cc12b8b3ba1f7aa72a"
};

const app = initializeApp(firebaseConfig);