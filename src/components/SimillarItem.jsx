import React from 'react';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const StyledSimillarItem = styled.div``;

function SimillarItem(props) {
  // const params = useParams();
  // const commentsId = useSelector((state) => state.comments[params.id]);
  // const comments = commentsId && commentsId.comments;

  return (
    <StyledSimillarItem className='item'>
      <div className='problemText'>
        <em className='problemType'>{props.problemType}</em>
        <p className='unitName'>집합의 표현방법 집합의 표현방법 집합의 표현방법 집합의...</p>
        <button>
          <a href='#'>추가</a>
        </button>
        <button>
          <a href='#'>교체</a>
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
    </StyledSimillarItem>
  );
}
export default SimillarItem;
