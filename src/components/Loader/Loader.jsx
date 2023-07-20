import React from 'react';
import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        minHeight: '170 ',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '400',
      }}
    >
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};
