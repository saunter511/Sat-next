import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import {createGlobalStyle} from "../_snowpack/pkg/styled-components.js";
const GlobalStyle = createGlobalStyle`
	html, body, #root {
    background: #141B41;
		height: 100%;
		max-width: 100vw;
		margin: 0;
		box-sizing: border-box;
		font-family: Roboto, sans-serif;
	}
  `;
import App from "./App.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(GlobalStyle, null), /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
