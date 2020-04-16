import React from 'react';
import styled from 'styled-components';
import { ToggleButton } from './Button';
import { useDispatch } from 'react-redux';
import { moveToProblems, replaceProblems } from '../services/similars/actions';

const StyledSimillarItem = styled.div``;

function SimillarItem(props) {
  const dispatch = useDispatch();

  const handleAddProblem = () => {
    dispatch(moveToProblems(props.id));
  };

  const handleReplaceProblem = () => {
    dispatch(replaceProblems(props.id));
  };

  return (
    <StyledSimillarItem className='item'>
      <div className='problemText'>
        <em className='problemType'>{props.problemType}</em>
        <p className='unitName'>{props.unitName}</p>
        <ToggleButton className='btn' onClick={handleAddProblem}>
          추가
        </ToggleButton>
        <ToggleButton className='btn' onClick={handleReplaceProblem}>
          교체
        </ToggleButton>
      </div>

      <div className='problemImg'>
        <b>1</b>
        <img className='probleImg' src={props.problemURL} alt='문제 이미지'></img>
      </div>
    </StyledSimillarItem>
  );
}
export default React.memo(SimillarItem);
