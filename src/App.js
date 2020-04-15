import React from 'react';
import ProblemsList from './ProblemsList';
import SimilarsList from './SimilarsList';
import GlobalStyle from './styles/GlobalStyle';
import { LayoutContainer } from './components/Containers';
import { Provider } from 'react-redux';
import store from './services/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <LayoutContainer>
        <ProblemsList />
        <SimilarsList />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
