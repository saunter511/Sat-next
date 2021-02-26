import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { BiCurrentLocation } from "react-icons/bi";
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

const LocateButton = ({ onClick }) => {
  return (
    <LocateContainer>
      <Button onClick={onClick}>
        <BiCurrentLocation />
      </Button>
    </LocateContainer>
  );
};

LocateButton.propTypes = {
  onClick: PropTypes.func,
};

export default LocateButton;
