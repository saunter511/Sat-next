import React from "react"
import styled from 'styled-components';

const LoadingContainer = styled.div`
	
`;
const Input = styled.input`
	width: 200px;
    font-size: 15px;
    border: none;
    outline: none;

   
`;

const TextInput = (props) => {
	return (
		<LoadingContainer>
			<Input  name={props.name} placeholder={props.placeholder} ref={props.reference}/>
            
		</LoadingContainer>
	);
};

export default TextInput;