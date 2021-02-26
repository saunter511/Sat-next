import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const LocateContainer = styled.div`
	display: inline-block;
`;
const Button = styled.input.attrs({
  type: "submit"
})`
    height: 30px;
	width: 80px;
    font-size: 20px;
    border: none;
    border-radius: 0 3px 3px 0;
    background-color: #ED254E;
    display: flex;
	justify-content: center;
	align-items: center;

    &:hover{
       color: #000;
    }
    
`;
const SubmitButton = () => {
  return /* @__PURE__ */ React.createElement(LocateContainer, null, /* @__PURE__ */ React.createElement(Button, {
    value: "Locate"
  }));
};
export default SubmitButton;
