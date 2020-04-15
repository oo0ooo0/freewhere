import React from 'react';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const StyledSimillarItem = styled.div``;

function SimillarItem(props) {
  return (
    <StyledSimillarItem className='item'>
      <div className='problemText'>
        <em className='problemType'>{props.problemType}</em>
        <p className='unitName'>{props.unitName}</p>
        <button>
          <a href='#'>추가</a>
        </button>
        <button>
          <a href='#'>교체</a>
        </button>
      </div>

      <div className='problemImg'>
        <b>1</b>
        <img className='probleImg' src={props.problemURL} alt='문제 이미지'></img>
      </div>
    </StyledSimillarItem>
  );
}
export default SimillarItem;
