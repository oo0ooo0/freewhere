import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const StyledProblemItem = styled.div``;

const ToggleButton = styled.button`
  background: ${(props) => (props.isSelected ? '#00ABFF' : '#FFFFFF')};
  color: ${(props) => (props.isSelected ? '#FFFFFF' : '#00ABFF')};
  font-size: 14px;
  font-weight: bold;
`;

function ProblemItem(props) {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch({ type: 'SET_ACTIVE_ITEM', payload: { id: props.id } });
  };
  console.log(props.isActive);

  return (
    <StyledProblemItem className='item'>
      <div className='problemText'>
        <em className='problemType'>{props.problemType}</em>
        <p className='unitName'>{props.unitName}</p>
        <ToggleButton onClick={toggleHandler} isSelected={props.isActive}>
          유사문항
        </ToggleButton>
        <ToggleButton>삭제</ToggleButton>
      </div>

      <div className='problemImg'>
        <b>1</b>
        <img className='probleImg' src={props.problemURL} alt='문제 이미지'></img>
      </div>
    </StyledProblemItem>
  );
}
export default ProblemItem;
