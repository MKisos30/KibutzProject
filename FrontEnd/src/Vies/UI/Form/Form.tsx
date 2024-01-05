import React from 'react';

const Form = ({children}) => {
  return (
  <form>
      {children}
      <button>שלח</button>
  </form>
  );
};

export default Form;
