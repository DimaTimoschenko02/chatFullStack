import { observer } from "mobx-react-lite";
import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";

const LoginPage:FC = () =>{

    
    // useEffect(() =>{
    //     if(authContext?.isAuth){
    //         navigate('/')
    //     }
    // } , [])

    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}
export default observer(LoginPage)