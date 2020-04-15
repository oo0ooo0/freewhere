import React from 'react';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const StyledProblemItem = styled.div``;

function ProblemItem() {
  return (
    <StyledProblemItem className='item'>
      <div className='problemText'>
        <em className='problemType'>객관식</em>
        <p className='unitName'>집합의 표현방법 집합의 표현방법 집합의 표현방법 집합의...</p>
        <button>
          <a href='#'>유사문항</a>
        </button>
        <button>
          <a href='#'>삭제</a>
        </button>
      </div>

      <div className='problemImg'>
        <b>1</b>
        <img
          className='probleImg'
          src='https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/239/9_311239_eT9Em_27_p.png'
          alt='문제 이미지'
        ></img>
      </div>
    </StyledProblemItem>
  );
}
export default ProblemItem;
