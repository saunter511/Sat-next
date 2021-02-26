import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import PropTypes from "prop-types";
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

const ResultBox = ({ pass }) => {
  return (
    <ResultContainer>
      <Result>{format(Date.parse(pass), "dd MMMM YYY, kk:mm:ss")}</Result>
    </ResultContainer>
  );
};

ResultBox.propTypes = {
  pass: PropTypes.string,
};

export default ResultBox;
