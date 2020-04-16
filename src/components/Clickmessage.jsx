import React from 'react';
import styled from 'styled-components';
import { ToggleButton } from './Button';

const StyledClickmessage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 448.2px;
  min-height: 98.2%;
  background-color: #fff;
  > div {
    height: 92vh;
    width: 100%;
    display: flex;
    align-items: center;
    .ClickmessageBtn {
      margin-left: 0px;
      pointer: normal;
    }
    .infoText {
      width: 100%;
      margin: 0px 130px;
      min-width: 228.8px;
      text-align: center;
      font: normal normal 14px/2 'Noto Sans KR';
      color: #9f9f9f;
    }
  }
`;

function Clickmessage(props) {
  return (
    <StyledClickmessage>
      <div>
        <div className='infoText'>
          <ToggleButton className='ClickmessageBtn'>유사문항</ToggleButton> 버튼을 누르면 <br />
          해당 문제의 유사 문항을 볼 수 있습니다.
        </div>
      </div>
    </StyledClickmessage>
  );
}
export default Clickmessage;
