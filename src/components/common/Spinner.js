import React from 'react';
// import spinner from './spinner.gif';

const Spinner = () => {
  return (
    // <div>
    //   <img
    //     src={spinner}
    //     style={{width: '200px', margin: 'auto', display: 'block'}}
    //     alt='Loading...'
    //   />
    // </div>
    <div className='spinner'>
      <div className='circle'></div>
    </div>
  );
}

export default Spinner;
