import Loader from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loading = () => {
  return (
    <LoaderWrapper>
      <Loader type="Oval" height={30} width={30} color="#5b645b" />
      <h1>Loading...</h1>
    </LoaderWrapper>
  );
};
