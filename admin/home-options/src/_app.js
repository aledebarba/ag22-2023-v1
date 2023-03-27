import App from './index.jsx';
import React from 'react';
import { render } from 'react-dom';

//window.history.scrollRestoration = "manual";
const root= document.getElementById("welcome-screen");
root ? render(<App />, root) : null;

