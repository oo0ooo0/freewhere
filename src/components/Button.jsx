import styled from 'styled-components';
export const ToggleButton = styled.button`
  background: ${(props) => (props.isSelected ? '#00ABFF' : '#FFFFFF')};
  color: ${(props) => (props.isSelected ? '#FFFFFF' : '#00ABFF')};
  font-size: 14px;
  font-weight: bold;
`;
