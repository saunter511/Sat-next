import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import PropTypes from "../../_snowpack/pkg/prop-types.js";
import {BiCurrentLocation} from "../../_snowpack/pkg/react-icons/bi.js";
const LocateContainer = styled.div`
  display: inline-block;
`;
const Button = styled.button`
  color: #ed254e;
  width: 40px;
  height: 30px;
  font-size: 20px;
  border: none;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #8d86c9;
  }
`;
const LocateButton = ({onClick}) => {
  return /* @__PURE__ */ React.createElement(LocateContainer, null, /* @__PURE__ */ React.createElement(Button, {
    onClick
  }, /* @__PURE__ */ React.createElement(BiCurrentLocation, null)));
};
LocateButton.propTypes = {
  onClick: PropTypes.func
};
export default LocateButton;
