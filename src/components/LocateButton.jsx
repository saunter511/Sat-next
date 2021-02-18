import React from "react"
import styled from 'styled-components';
import {BiCurrentLocation} from "react-icons/bi"
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
	return (
		<LocateContainer>
			<Button  onClick={props.onClick}>
            <BiCurrentLocation/>
            </Button>
		</LocateContainer>
	);
};

export default LocateButton;