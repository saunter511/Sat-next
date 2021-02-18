import React, { useState, useEffect } from 'react';
import Serach from './components/Serach'
import styled from 'styled-components';

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
 
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;


function App() {

  
  return (
    <AppContainer>
    <Serach/>
    </AppContainer>
  )
};

export default App;