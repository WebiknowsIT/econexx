import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../utils/Url';

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import AuthLayout from './AuthLayout';

import "../../../styles/scss/auth.scss";

import successIcon from '../../../styles/img/icons/checkSuccess.svg';
import PageLoader from '../../../components/PageLoader';
import { resetLoginData, resetPassword } from '../../redux/action/LoginAction';
import { empty, notUndefinedAndNull } from '../../../utils/Validation';


function ResetPassword(props) {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const store = useSelector(connectToStore,shallowEqual)

    const [currentStep, setCurrentStep] = useState(1);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        newPassword: "",
        confirmNewPassword: "",
        token:""
    });
    const [confirmErrorMessage, setConfirmErrorMessage] = useState("");

    
    useEffect(()=>{
        checkUserAuthorized()
    },[])
    
    useEffect(()=>{
        const {resetPasswordResponse} = store
            if(notUndefinedAndNull(resetPasswordResponse) && resetPasswordResponse.status==="success"){
            setCurrentStep(2)  
        }
        dispatch(resetLoginData())
            
    },[store.resetPasswordResponse])
    
    function checkUserAuthorized(){
        let params = new URLSearchParams(window.location.search);
        let token  = params.get("token");
        if(empty(token )){
            navigate(LOGIN);
            return
        }
        setFormData((prev) => ({ ...prev, token: token }));        
    }

    const handleChange = (field, value) => {
        let errorMessage=""
        if(field ==="confirmNewPassword" && !empty(formData.newPassword) &&formData.newPassword !==value){
            errorMessage="Confirm password must match with new password"
        }
        setFormData((prev) => ({ ...prev, [field]: value }));
        setConfirmErrorMessage(errorMessage)
    };

    const handleResetPassword = (e) => {
        e.preventDefault()
        let data={
            token:formData.token,
            newPassword:formData.newPassword
        }
        
        dispatch(resetPassword(data))
    };

    
    
    function getDisabledValue(){
        let isDisabled=false
        if(empty(formData.newPassword) || empty(formData.confirmNewPassword)){
            isDisabled=true
        }
        if(!empty(confirmErrorMessage)){
            isDisabled=true
        }
        
        return isDisabled
    }


    const handleBackToLoginClick = () => {
        navigate(LOGIN);
    };
    
    function renderLoader(){
        const {showPageLoader} = store
        if(showPageLoader){
          return <PageLoader opacity={0.7}/>
        }
    }

    const leftContent = (
        <>
            {renderLoader()}
            {currentStep === 1 &&
                <div className="sign-in-form">
                    <h2 className="heading30">Reset Your Password</h2>
                    {/* <p className="text-gray-500">
                        A password reset link has been sent to email address <span className='text-blue-500'>preeti.wadhera@gmail.com.</span>  Please use the link to securely reset your password.
                    </p> */}
                    <form className="mt-4" layout="vertical" autoComplete="false">

                        <Input
                            className="input-styled input-styled-focus"
                            labelClassName="text-gray-700"
                            label="New Password"
                            type={newPasswordVisible ? 'text' : 'password'}
                            value={formData.newPassword}
                            onChange={(e) => handleChange("newPassword", e.target.value)}
                            placeholder="Enter New Password"
                            required={true}
                            showEyeIcon={true}
                            onClickEye={()=>setNewPasswordVisible(!newPasswordVisible)}
                        />

                        <Input
                            className="input-styled input-styled-focus"
                            labelClassName="text-gray-700"
                            label="Confirm New Password"
                            type={confirmPasswordVisible ? 'text' : 'password'}
                            value={formData.confirmNewPassword}
                            onChange={(e) => handleChange("confirmNewPassword", e.target.value)}
                            placeholder="Enter Confirm Password"
                            required={true}
                            showEyeIcon={true}
                            onClickEye={()=>setConfirmPasswordVisible(!confirmPasswordVisible)}
                            errorMessage={confirmErrorMessage}
                        />
                        <div className="text-center mt-4">
                            <Button className="w-full" variant="primary" disabled={getDisabledValue()} onClick={handleResetPassword}>Next</Button>
                        </div>
                    </form>
                </div>
            }

            {currentStep === 2 &&
                <div className="sign-in-form text-center">
                    <img className='mx-auto my-4' src={successIcon} alt="" />
                    <h2 className="heading30">Password changed!</h2>
                    <p className="text-gray-500">Your password has been successfully changed!</p>
                    <div className="text-center mt-4">
                        <Button onClick={handleBackToLoginClick} className="w-full" variant="primary">Login Again</Button>
                    </div>
                </div>
            }
        </>
    );

    return <AuthLayout leftContent={leftContent}  />;
}

export default ResetPassword;

function connectToStore(store){
    return {
        resetPasswordResponse : store.login.resetPasswordResponse,
        showPageLoader:store.login.showPageLoader      
    };
}
