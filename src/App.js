import React from 'react';
import ProblemsList from './ProblemsList';
import SimilarsList from './SimilarsList';
import GlobalStyle from './styles/GlobalStyle';
import { LayoutContainer } from './components/Containers';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />

      <LayoutContainer>
        <ProblemsList />
        <SimilarsList />
      </LayoutContainer>
    </div>
  );
}

export default App;
