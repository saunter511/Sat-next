import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const LoadingContainer = styled.div`
  position: relative;
  top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  border: 7px solid #ed254e;
  border-top: 7px solid #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.5s infinite linear;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const ResultsLoading = () => {
  return /* @__PURE__ */ React.createElement(LoadingContainer, null, /* @__PURE__ */ React.createElement(Loading, null));
};
export default ResultsLoading;
