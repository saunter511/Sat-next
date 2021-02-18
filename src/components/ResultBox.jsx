import React from "react"
import styled from 'styled-components';
import { format } from "date-fns"

const ResultContainer = styled.div`
    position: relative;
	top: 20px;
    border: 1px solid #FFF;
    height:     50px;
    display: flex;
	align-items: center;
	justify-content: center;
`;
const Result = styled.div`
    color: white;
	
`;

const ResultBox = (p) => {
    
	return (
		<ResultContainer>
			<Result >{format(Date.parse(p.pass), "dd MMMM YYY, kk:mm:ss")}</Result>
		</ResultContainer>
	);
};

export default ResultBox;