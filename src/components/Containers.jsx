import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-width: 900px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: #f2f2f2;
`;

export const TitleContainer = styled.h2`
  width: 100%;
  padding: 13px 24px;
  align-items: center;
  text-align: ${(props) => props.align || 'left'};
  margin-bottom: 3px;
  background-color: #fff;
`;
