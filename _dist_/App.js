import React from "../_snowpack/pkg/react.js";
import Serach from "./components/Serach.js";
import styled from "../_snowpack/pkg/styled-components.js";
const AppContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  return /* @__PURE__ */ React.createElement(AppContainer, null, /* @__PURE__ */ React.createElement(Serach, null));
}
export default App;
