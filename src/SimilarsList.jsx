import React, { useEffect } from 'react';
import styled from 'styled-components';
import Clickmessage from './components/Clickmessage';
import SimilarItem from './components/SimilarItem';
import Masonry from 'react-masonry-css';
import { TitleContainer } from './components/Containers';
import { useDispatch, useSelector } from 'react-redux';
import { getSimilars } from './services/similars/actions';
// import { getProblems } from './services/problems/actions';

const StyledSimilarsList = styled.main`
  .SimilarsListTitleCont {
  }
  h3 {
    background: #fafafa;
    display: flex;
    align-items: center;
    margin-top: 3px;
    padding-left: 25px;
    height: 36px;
  }
  .my-masonry-grid {
  }
`;

function SimilarsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimilars());
  }, [dispatch]);

  const { problems, similars } = useSelector((state) => state);

  return (
    <StyledSimilarsList className='list'>
      <TitleContainer className='SimilarsListTitleCont' align={'center'}>
        문항 교체/추가
      </TitleContainer>

      {problems.selectedId ? (
        <div>
          <h3>문제유형</h3>

          <Masonry
            breakpointCols={1}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {similars.items.map((similar) => {
              return <SimilarItem key={similar.id} {...similar} />;
            })}
          </Masonry>
        </div>
      ) : (
        <Clickmessage />
      )}
    </StyledSimilarsList>
  );
}

export default SimilarsList;
