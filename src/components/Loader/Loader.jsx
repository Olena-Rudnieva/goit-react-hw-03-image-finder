import Loader from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div>
      <Loader type="Oval" height={30} width={30} color="#5b645b" />
      <h1>Loading...</h1>
    </div>
  );
};
