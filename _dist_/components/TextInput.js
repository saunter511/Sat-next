import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const LoadingContainer = styled.div`
	
`;
const Input = styled.input`
	width: 200px;
    font-size: 15px;
    border: none;
    outline: none;

   
`;
const TextInput = (props) => {
  return /* @__PURE__ */ React.createElement(LoadingContainer, null, /* @__PURE__ */ React.createElement(Input, {
    name: props.name,
    placeholder: props.placeholder,
    ref: props.reference
  }));
};
export default TextInput;
