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
  }, []);

  const problems = useSelector((state) => state.problems.items);

  return (
    <StyledProblemsList className='list'>
      <TitleContainer> 학습지 상세설명</TitleContainer>

      <Masonry
        breakpointCols={1}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {problems &&
          problems.map((problem) => {
            return <ProblemItem key={problem.id} {...problem} />;
          })}
      </Masonry>
    </StyledProblemsList>
  );
}

export default ProblemsList;
