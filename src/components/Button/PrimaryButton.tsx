import styled from 'styled-components';

import { IButtonProps } from '../../types/ISearchBar';
import { BaseButton } from './BaseButton';

const PrimaryButton = (props: IButtonProps) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #57db83;
`;

export default PrimaryButton;
