import React from 'react';
import styled from 'styled-components';
import SimillarItem from './components/SimillarItem';
import Masonry from 'react-masonry-css';
import { TitleContainer } from './components/Containers';

const StyledSimilarsList = styled.main`
  width: 49.8%;

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

function SimilarsList() {
  // const feeds = useSelector((state) => state.feeds);
  return (
    <StyledSimilarsList>
      <TitleContainer align={'center'}>문항 교체/추가</TitleContainer>

      <Masonry
        breakpointCols={1}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        <SimillarItem />
        <SimillarItem />

        {/* {Object.keys(feeds)
          .reverse()
          .map((key) => {
            return <Item key={key} {...feeds[key]} />;
          })} */}
      </Masonry>
    </StyledSimilarsList>
  );
}

export default SimilarsList;