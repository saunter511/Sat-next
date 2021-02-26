import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import PropTypes from "../../_snowpack/pkg/prop-types.js";
const LoadingContainer = styled.div``;
const Input = styled.input`
  width: 200px;
  font-size: 15px;
  border: none;
  outline: none;
`;
const TextInput = ({name, placeholder, reference}) => {
  return /* @__PURE__ */ React.createElement(LoadingContainer, null, /* @__PURE__ */ React.createElement(Input, {
    name,
    placeholder,
    ref: reference
  }));
};
TextInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  reference: PropTypes.func
};
export default TextInput;
