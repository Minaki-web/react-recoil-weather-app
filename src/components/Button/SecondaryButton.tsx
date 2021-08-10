import styled from 'styled-components';
import { IButtonProps } from '../../types/ISearchBar';
import { BaseButton } from './BaseButton';

const SecondaryButton = (props: IButtonProps) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #5764db;
`;

export default SecondaryButton;
