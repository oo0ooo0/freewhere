import React, { useEffect } from 'react';
import styled from 'styled-components';
import SimillarItem from './components/SimillarItem';
import Masonry from 'react-masonry-css';
import { TitleContainer } from './components/Containers';
import { useDispatch } from 'react-redux';
import { getSimilars } from './services/simillars/actions';

const StyledSimilarsList = styled.main`
  h3 {
    background: #fafafa;
    display: flex;
    align-items: center;
    margin-top: 3px;
    padding-left: 25px;
    height: 36px;
  }
`;

function SimilarsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimilars());
    console.log('call?');
  }, [dispatch]);
  return (
    <StyledSimilarsList className='list'>
      <TitleContainer align={'center'}>문항 교체/추가</TitleContainer>
      <h3>문제유형을 잘 넣기</h3>
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
            return <SimillarItem key={key} {...simillar[key]} />;
          })} */}
      </Masonry>
    </StyledSimilarsList>
  );
}

export default SimilarsList;
