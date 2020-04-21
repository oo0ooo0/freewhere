import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProblemItem from './components/ProblemItem';
import Masonry from 'react-masonry-css';
import { TitleContainer } from './components/Containers';
import { useDispatch } from 'react-redux';
import { getProblems } from './services/problems/actions';
import { useSelector } from 'react-redux';
const StyledProblemsList = styled.main`
  width: 49.8%;
  border-right: 2px solid #e0e0e0;

  .my-masonry-grid {
    display: flex;
    width: auto;
    min-width: 49.8%;
    min-height: 92vh;
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 8px;
  }
`;

function ProblemsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProblems());
  }, [dispatch]);

  const { items, selectedId } = useSelector((state) => state.problems);
  return (
    <StyledProblemsList className='list'>
      <TitleContainer> 학습지 상세설명</TitleContainer>

      <Masonry
        breakpointCols={1}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {items.map((item, index) => (
          //<ProblemItem {...item} key={item.id} isSelected={selectedId === parseInt(item.id, 10)} /> //parseInt 넘버타입으로 바꿔주는거 // 10진수
          <ProblemItem
            order={index + 1}
            {...item}
            key={item.id}
            isSelected={selectedId === item.id}
          />
        ))}
      </Masonry>
    </StyledProblemsList>
  );
}

export default ProblemsList;
