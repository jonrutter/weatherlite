import styled from 'styled-components';

export const Button = styled.button`
  background-color: #ff8c00;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.08),
    0px 10px 10px rgba(0, 0, 0, 0.12);
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ffc543;
  }
`;