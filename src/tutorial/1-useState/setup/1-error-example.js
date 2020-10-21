import React from 'react';

const ErrorExample = () => {
  let title = "Hello world!"
  const handlerClick = () => {
    title = "You changed it, congrats!"
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handlerClick}>
        Click here to change text!
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
