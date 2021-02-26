import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const LoadingContainer = styled.div``;
const Input = styled.input`
  width: 200px;
  font-size: 15px;
  border: none;
  outline: none;
`;

const TextInput = ({ name, placeholder, reference }) => {
  return (
    <LoadingContainer>
      <Input name={name} placeholder={placeholder} ref={reference} />
    </LoadingContainer>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  reference: PropTypes.func,
};

export default TextInput;
