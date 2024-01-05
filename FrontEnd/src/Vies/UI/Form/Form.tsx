import { FC, ReactNode } from 'react';

interface FormProps {
    children: ReactNode
    subFuntion: Function;
}

const Form: FC<FormProps> = ({ children, subFuntion }) => {
  return (
    <form onSubmit={subFuntion}>
      {children}
      <button type="submit">שלח</button>
    </form>
  );
};

export default Form;
