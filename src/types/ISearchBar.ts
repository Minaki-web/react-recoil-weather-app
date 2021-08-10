import { ReactNode } from 'react';

export interface ISearchBarProps {
  onClick1: (e: React.FormEvent<HTMLButtonElement>) => void;
  onClick2: (e: React.FormEvent<HTMLButtonElement>) => void;
}

export interface IInputProps {
  placeholder: string;
}

export interface IButtonProps {
  children: ReactNode;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}
