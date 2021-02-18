import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';




  const GlobalStyle = createGlobalStyle`
	html, body, #root {
    background: #141B41;
		height: 100%;
		max-width: 100vw;
		margin: 0;
		box-sizing: border-box;
		font-family: Roboto, sans-serif;
	}
  `

import App from './App.jsx';
 ReactDOM.render(
   <React.StrictMode>
     <GlobalStyle />
     <App />
   </React.StrictMode>,
   document.getElementById('root'),
 );