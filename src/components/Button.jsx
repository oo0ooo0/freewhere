import styled from 'styled-components';
export const ToggleButton = styled.button`
  background: ${(props) => (props.isSelected ? '#00ABFF' : '#FFFFFF')};
  color: ${(props) => (props.isSelected ? '#FFFFFF' : '#00ABFF')};
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;

  width: 80px;
  min-width: 80px;
  height: 36px;
  min-height: 36px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;
`;
