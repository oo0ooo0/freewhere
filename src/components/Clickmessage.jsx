import React from 'react';
import styled from 'styled-components';

const StyledClickmessage = styled.div`
  display: flex;
  position: fixed;

  justify-content: center;
  align-items: center;
  width: 49.8%;
  height: 100%;
  background-color: #fff;
  div {
  }
`;

function Clickmessage(props) {
  return (
    <StyledClickmessage>
      <div className='problemText'>
        [유사문항] 버튼을 누르면 해당 문제의 유사 문항을 볼 수 있습니다.
      </div>
    </StyledClickmessage>
  );
}
export default Clickmessage;
