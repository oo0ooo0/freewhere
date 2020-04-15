import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { LayoutContainer } from './components/Containers';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />

      <LayoutContainer></LayoutContainer>
    </div>
  );
}

export default App;
