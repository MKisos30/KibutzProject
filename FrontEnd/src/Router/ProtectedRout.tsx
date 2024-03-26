import { FC, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
//import axios from '../../node_modules/axios/index';
// import { useAppDispatch } from '../app/hooks';
// import { checkLogin } from '../features/auth/authAPI';
// import { ProtectedRoutProps } from './ProtectedRoutInterface';

export interface ProtectedRoutProps {
  children?: ReactNode;
}

const ProtectedRout: FC<ProtectedRoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return navigate('/login', { replace: true });
  },[navigate]);

  return <>{children}</>;
};

export default ProtectedRout;
