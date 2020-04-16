import React from 'react';
import styled from 'styled-components';
import { ToggleButton } from './Button';

const StyledClickmessage = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  justify-content: center;
  align-items: center;
  width: 49.8%;
  min-width: 489.69px;
  min-height: 100vh;
  background-color: #fff;
  padding-top: 48.96px;
  z-index: 1;

  .ClickmessageBtn {
    margin-left: 0px;
  }
  .infoText {
    margin: 0px 130px;
    min-width: 228.8px;
    text-align: center;
    font: normal normal 14px/2 'Noto Sans KR';
    color: #9f9f9f;
  }
`;

function Clickmessage(props) {
  return (
    <StyledClickmessage>
      <div className='infoText'>
        <ToggleButton className='ClickmessageBtn'>유사문항</ToggleButton> 버튼을 누르면 <br />
        해당 문제의 유사 문항을 볼 수 있습니다.
      </div>
    </StyledClickmessage>
  );
}
export default Clickmessage;
