import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {BiCurrentLocation} from "../../_snowpack/pkg/react-icons/bi.js";
const LocateContainer = styled.div`
	display: inline-block;
`;
const Button = styled.button`
    color: #ED254E;
	width: 40px;
    height: 30px;
    font-size: 20px;
    border: none;
    background: #FFF;
    display: flex;
	justify-content: center;
	align-items: center;

    &:hover{
        color: #8D86C9;
    }
    
`;
const LocateButton = (props) => {
  return /* @__PURE__ */ React.createElement(LocateContainer, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: props.onClick
  }, /* @__PURE__ */ React.createElement(BiCurrentLocation, null)));
};
export default LocateButton;
