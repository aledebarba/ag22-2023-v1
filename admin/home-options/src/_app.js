import App from './index.jsx';
import React from 'react';
import { render } from 'react-dom';


document.addEventListener("DOMContentLoaded", (event) => {
    const scrollpos = sessionStorage.getItem('scrollpos');
    setTimeout(()=>{window.scrollTo(0, scrollpos);}, 350);
    if (scrollpos) {
        sessionStorage.removeItem('scrollpos');
    }
  });

  window.addEventListener("beforeunload", (e) => {
      console.log( "store ", window.scrollY);
      sessionStorage.setItem('scrollpos', window.scrollY);
  });

//window.history.scrollRestoration = "manual";
const root= document.getElementById("welcome-screen");
root ? render(<App />, root) : null;

