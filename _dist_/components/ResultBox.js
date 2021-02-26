import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {format} from "../../_snowpack/pkg/date-fns.js";
import PropTypes from "../../_snowpack/pkg/prop-types.js";
const ResultContainer = styled.div`
  position: relative;
  top: 20px;
  border: 1px solid #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Result = styled.div`
  color: white;
`;
const ResultBox = ({pass}) => {
  return /* @__PURE__ */ React.createElement(ResultContainer, null, /* @__PURE__ */ React.createElement(Result, null, format(Date.parse(pass), "dd MMMM YYY, kk:mm:ss")));
};
ResultBox.propTypes = {
  pass: PropTypes.string
};
export default ResultBox;
