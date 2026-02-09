import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearSession } from '../../../services/Session';
import { LOGIN } from "../../../utils/Url";


export default function Logout(){
    let navigate = useNavigate()
    useEffect(() => {
        clearSession();
        navigate(LOGIN);

         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null
}
