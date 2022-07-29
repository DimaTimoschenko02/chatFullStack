import { observer } from "mobx-react-lite";
import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SignUpForm from "../components/SignUpForm";

const SignUpPage:FC = () =>{

    const navigate = useNavigate()

    
    
    return (
        <div>
            SignUp
            <SignUpForm/>
        </div>
    )
}
export default observer(SignUpPage)