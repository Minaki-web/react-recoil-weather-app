import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { inputState } from '../../stores/inputState';
import { IInputProps } from '../../types/ISearchBar';

const Input = (props: IInputProps) => {
  const recoilValue = useRecoilValue(inputState);
  const setRecoilValue = useSetRecoilState(inputState);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecoilValue(e.target.value);
  };

  return <SInput type="text" placeholder={props.placeholder} value={recoilValue} onChange={handleInputValue} />;
};

const SInput = styled.input`
  background-color: #dbdbdb;
  flex: 1;
  padding: 1em 2em;
  border-radius: 999px;
`;

export default Input;
