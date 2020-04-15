import React from 'react';
import styled from 'styled-components';
import ProblemItem from './components/ProblemItem';
import Masonry from 'react-masonry-css';
import { TitleContainer } from './components/Containers';

const StyledProblemsList = styled.main`
  width: 49.8%;
  border-right: 2px solid #e0e0e0;

  .my-masonry-grid {
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 8px;
  }
`;

function ProblemsList() {
  // const feeds = useSelector((state) => state.feeds);
  return (
    <StyledProblemsList>
      <TitleContainer> 학습지 상세설명</TitleContainer>

      <Masonry
        breakpointCols={1}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        <ProblemItem />
        <ProblemItem />
        <ProblemItem />
        <ProblemItem />
        <ProblemItem />

        {/* {Object.keys(feeds)
          .reverse()
          .map((key) => {
            return <Item key={key} {...feeds[key]} />;
          })} */}
      </Masonry>
    </StyledProblemsList>
  );
}

export default ProblemsList;
