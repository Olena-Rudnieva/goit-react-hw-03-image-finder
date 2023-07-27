import { LoadingButton } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return <LoadingButton onClick={onLoadMore}>Load more</LoadingButton>;
};
