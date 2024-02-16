import { FC, useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../node_modules/axios/index';
// import { useAppDispatch } from '../app/hooks';
// import { checkLogin } from '../features/auth/authAPI';
// import { ProtectedRoutProps } from './ProtectedRoutInterface';

export interface ProtectedRoutProps {
    children?: ReactNode
}

const ProtectedRout: FC<ProtectedRoutProps> = ({ children }) => {
    const navigate = useNavigate();

    const check = async () => {
        const {data} = await axios.get("http://localhost:8787/auth/check-cookies")
        console.log(data)
    }
    useEffect(() => {
        check()
        // dispatch(checkLogin()).then((actionUuser: any) => {
        //     if (actionUuser.payload.isLogin) {
        //         return navigate("/", { replace: true });
        //     }
        // })
    }, [navigate])

    return (<>{children}</>)
}

export default ProtectedRout