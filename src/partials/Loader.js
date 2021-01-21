import React from 'react';

const Loader = () => {
  return (
    <div className='text-center'>
      <div
        className='spinner-grow'
        role='status'
        style={{ width: '3rem', height: '3rem' }}
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
