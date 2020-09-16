import React, { useContext } from 'react';
import { Context } from './../context/context';
import ReactLoading from 'react-loading';

export const Loading = () => {
  const { state } = useContext(Context);
  return (
    <div className="col-12 d-flex justify-content-center">
      <ReactLoading
        type={'spinningBubbles'}
        color={state.theme === 'dark' ? '#d65a31' : '#ff331f'}
        height={'100px'}
        width={'100px'}
      />
    </div>
  );
};
