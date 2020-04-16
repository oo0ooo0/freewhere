import React, { useEffect } from 'react';
import styled from 'styled-components';
import Clickmessage from './components/Clickmessage';
import SimilarItem from './components/SimilarItem';
import Masonry from 'react-masonry-css';
import { TitleContainer } from './components/Containers';
import { useDispatch } from 'react-redux';
import { getSimilars } from './services/similars/actions';
import { useSelector } from 'react-redux';

const StyledSimilarsList = styled.main`
  .SimilarsListTitleCont {
    border-bottom: 3px solid #f5f5f5;
    z-index: 10;
    position: absolute;
    width: 49.8%;
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
    margin-top: 10px;
  }
`;

function SimilarsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimilars());
  }, []);

  const { problems, similars } = useSelector((state) => state);

  return (
    <StyledSimilarsList className='list'>
      <TitleContainer className='SimilarsListTitleCont' align={'center'}>
        문항 교체/추가
      </TitleContainer>

      {problems.selectedId ? (
        <div>
          <h3>문제유형을 잘 넣기</h3>

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
