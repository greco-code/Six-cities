import React from 'react';


function Toast() {
  return (
    <div>(
      <div
        style={{
          display: 'flex',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          justifyContent: 'center',
          backgroundColor: 'red',
          color: 'white',
          fontSize: '22px',
          zIndex: 1000,
        }}
      >
        <p>Произошла ошибка при загрузке данных</p>
      </div>
    </div>
  );
}


export default Toast;
