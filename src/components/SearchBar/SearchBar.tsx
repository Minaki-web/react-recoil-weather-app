import styled from 'styled-components';

import { ISearchBarProps } from '../../types/ISearchBar';
import PrimaryButton from '../Button/PrimaryButton';
import SecondaryButton from '../Button/SecondaryButton';
import Input from './Input';

const SearchBar = (props: ISearchBarProps) => {
  const { onClick1, onClick2 } = props;

  return (
    <SForm>
      <Input placeholder="ローマ字で都市名を入力してね" />
      <PrimaryButton onClick={onClick1}>検索</PrimaryButton>
      <SecondaryButton onClick={onClick2}>現在地から</SecondaryButton>
    </SForm>
  );
};

const SForm = styled.form`
  width: min(100%, 900px);
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 0.5em;

  @media (max-width: 560px) {
    flex-wrap: wrap;
  }
`;

export default SearchBar;
