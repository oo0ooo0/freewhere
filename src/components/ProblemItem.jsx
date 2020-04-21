import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ToggleButton } from './Button';

const StyledProblemItem = styled.div``;

function ProblemItem(props) {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch({ type: 'SET_ACTIVE_ITEM', payload: { id: props.isSelected ? null : props.id } });
  };
  const handleDelete = () => {
    dispatch({ type: 'DELETE_PROBLEM', payload: { id: props.id } });
  };
  return (
    <StyledProblemItem className='item'>
      <div className='problemText'>
        <em className='problemType'>{props.problemType}</em>
        <p className='unitName'>{props.unitName}</p>
        <ToggleButton onClick={toggleHandler} isSelected={props.isSelected}>
          유사문항
        </ToggleButton>
        <ToggleButton onClick={handleDelete}>삭제</ToggleButton>
      </div>

      <div className='problemImg'>
        <b>{props.order}</b>
        <img className='probleImg' src={props.problemURL} alt='문제 이미지'></img>
      </div>
    </StyledProblemItem>
  );
}
export default React.memo(ProblemItem);
