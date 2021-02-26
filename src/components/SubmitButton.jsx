import React from "react";
import styled from "styled-components";
const LocateContainer = styled.div`
  display: inline-block;
`;
const Button = styled.input.attrs({
  type: "submit",
})`
  height: 30px;
  width: 80px;
  font-size: 20px;
  border: none;
  border-radius: 0 3px 3px 0;
  background-color: #ed254e;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #000;
  }
`;

const SubmitButton = () => {
  return (
    <LocateContainer>
      <Button value="Locate" />
    </LocateContainer>
  );
};

export default SubmitButton;
