import styled from 'styled-components';

export const BaseButton = styled.button`
  color: #fff;
  padding: 1em 2em;
  border: 0;
  outline: 0;
  border-radius: 100px;

  @media (max-width: 630px) {
    width: 100%;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
