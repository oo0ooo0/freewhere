import React from 'react';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const StyledSimillarItem = styled.div`
  background: #fff;
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
      margin-left: 8px;
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
    img {
      width: 34vw;
    }
  }
  @media (max-width: 900px) {
    .problemImg {
      img {
        width: 305px;
      }
    }
  }
`;

function SimillarItem() {
  // const params = useParams();
  // const commentsId = useSelector((state) => state.comments[params.id]);
  // const comments = commentsId && commentsId.comments;

  return (
    <StyledSimillarItem>
      <div className='problemText'>
        <em className='problemType'>객관식</em>
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
