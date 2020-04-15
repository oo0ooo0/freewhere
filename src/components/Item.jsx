import React from 'react';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const StyledItem = styled.div`
  background-color: #fff;
  .problemText {
    display: flex;
    align-items: center;
    padding: 10px 15px 6px 37px;
    .problemType {
      margin-right: 18px;
      white-space: nowrap;
    }
    .unitName {
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    button {
      color: red;
      margin-right: 8px;
    }
  }
  .problemImg {
    display: flex;
    align-items: flex-start;
    margin-left: 47px;
    padding: 17px 0px 23px 0px;
    b {
      margin-right: 37px;
    }
  }
`;

function Item() {
  // const params = useParams();
  // const commentsId = useSelector((state) => state.comments[params.id]);
  // const comments = commentsId && commentsId.comments;

  return (
    <StyledItem>
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
    </StyledItem>
  );
}
export default Item;
