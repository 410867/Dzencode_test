import React, {useState} from 'react';
import './css/topMenu.css';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

import {createRoot} from "react-dom/client";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

reportWebVitals();
