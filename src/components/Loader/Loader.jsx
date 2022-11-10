import { Circles } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled.js';

export function Loader() {
  return (
    <>
      <LoaderWrap>
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        ;
      </LoaderWrap>
    </>
  );
}
