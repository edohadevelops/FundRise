import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../../assets/fundriseLogo.png';
import NoProfile from '../../../assets/no-profile-icon.png';
import EditIcon from '../../../assets/edit-icon.png';
import PreviewIcon from '../../../assets/preview-icon.svg';
import { Form,Field } from 'react-final-form';
import { axiosInstance, axiosQuery } from '../../../utils/api';
import './style.css'
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const [stage,setStage] = useState(1);
    const [imgFile,setImgFile] = useState(null);
    const [imgUrl,setImgUrl] = useState(null);

    const [preview,setPreview] = useState({});
    const formButton = useRef();
    const navigate = useNavigate();

    const axios = axiosInstance();

    const handleDataSubmit = async(values) => {
        console.log("Values is: ",values);
        setPreview(values)
    }

    const filePicker = useRef();

    const handleNextStage = () => {
        if(stage < 3){
            formButton.current.click()
            setStage((prev)=>{
                if(prev < 3)
                    return prev + 1;
                return prev
            })
        }else{
            axios.post("/api/onboarding",
                {
                    ...preview,
                    profile_picture: imgFile
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            .then((data)=>{
                console.log("Successful: ",data);
                window.location.href = "http://localhost:7000/profile"
                // navigate("/profile")
            })
            .catch((err)=>{
                console.log("Error occurred: ",err)
            })
        }
        
    }
    const handlePreviousStage = () => {
        setStage((prev)=>{
            if(prev !== 1)
                return prev - 1
            return prev
        })
    }
    const handleFilePicker = () => {
        filePicker.current.click()
    }
    const handleFileSelect = (e) => {
        const file = e.target.files[0];

        setImgFile(file);

        const url = URL.createObjectURL(file);
        setImgUrl(url);
    }


  return (
    <div className='onboarding-page'>
        <div className="onboarding-navbar">
            <img src={Logo} alt="" />
        </div>
        <div className="onboarding-progress">
            <div className={`
                 onboarding-progress-step 
                 ${
                    stage >= 1 &&
                    "onboarding-active-step"
                 }
            `}>
                <p className="onboarding-step-title">Personal Information</p>
                <p className="onboarding-step-description">Tell us about your personal information</p>
                <div className="onboarding-progress-bar">
                    <div className="onboarding-progress-inner-bar bg-[#187070]"></div>
                </div>
            </div>
            <div className={`
                 onboarding-progress-step 
                 ${
                    stage >= 2 &&
                    "onboarding-active-step"
                 }
            `}>
                <p className="onboarding-step-title">Profile Information</p>
                <p className="onboarding-step-description">Update your profile photo and your bio</p>
                <div className="onboarding-progress-bar">
                    <div className="onboarding-progress-inner-bar"></div>
                </div>
            </div>
            <div className={`
                 onboarding-progress-step 
                 ${
                    stage === 3 &&
                    "onboarding-active-step"
                 }
            `}>
                <p className="onboarding-step-title">Preview & Save</p>
                <p className="onboarding-step-description">Confirm profile details and save</p>
                <div className="onboarding-progress-bar">
                    <div className="onboarding-progress-inner-bar"></div>
                </div>
            </div>
        </div>
        <div className="onboarding-content">
            <div className='onboarding-card'>
                <p className="onboarding-card-title">
                    {
                        stage === 1 ?
                        "Update your personal information":
                        stage === 2 ?
                        "Update your profile information" :
                        "Preview & Save"
                    }
                </p>
                <Form 
                    onSubmit={handleDataSubmit}
                    render={({form,submitting,handleSubmit})=>(
                        <form onSubmit={handleSubmit} className='onboarding-input-form'>
                            {
                                stage === 1 ?
                                <>
                                    <div className="onboarding-input-group">
                                        <label htmlFor="">First Name</label>
                                        <Field 
                                            name="first_name"
                                            type='text'
                                            render={({input,meta})=>(
                                                <div>
                                                    <input {...input} type="text" placeholder='E.g John' />
                                                    {
                                                        meta.error && 
                                                        <span>{meta.error}</span>
                                                    }
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="onboarding-input-group">
                                        <label htmlFor="">Last Name</label>
                                        <Field 
                                            name="last_name"
                                            type='text'
                                            render={({input,meta})=>(
                                                <div>
                                                    <input {...input} type="text" placeholder='E.g Doe' />
                                                    {
                                                        meta.error && 
                                                        <span>{meta.error}</span>
                                                    }
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="onboarding-input-group">
                                        <label htmlFor="">Phone Number</label>
                                        <Field 
                                            name="phone_number"
                                            type='text'
                                            render={({input,meta})=>(
                                                <div>
                                                    <input {...input} type="text" placeholder='E.g 09100000011' />
                                                    {
                                                        meta.error && 
                                                        <span>{meta.error}</span>
                                                    }
                                                </div>
                                            )}
                                        />
                                    </div>
                                </> :
                                stage === 2 ?
                                <>
                                    <div className="onboarding-profile-picture">
                                        {/* <label htmlFor="">Profile Picture</label> */}
                                        <div className="onboarding-profile-img">
                                            <img src={imgUrl ? imgUrl : NoProfile} alt="" />
                                            <button onClick={handleFilePicker}>
                                                <img src={EditIcon} alt="" />
                                            </button>
                                        </div>
                                        <input type="file" ref={filePicker} className='hidden' onChange={handleFileSelect} />
                                    </div>
                                    <div className="onboarding-input-group">
                                        <label htmlFor="">Bio</label>
                                        <Field 
                                            name="bio"
                                            type='text'
                                            render={({input,meta})=>(
                                                <div>
                                                    <textarea {...input} type="text" placeholder='Say something about yourself' />
                                                    {
                                                        meta.error && 
                                                        <span>{meta.error}</span>
                                                    }
                                                </div>
                                            )}
                                        />
                                    </div>
                                </> :
                                <>
                                    <div className="onboarding-profile-picture">
                                        <div className="onboarding-profile-img">
                                            <img src={imgUrl ? imgUrl : NoProfile} alt="" />
                                        </div>
                                    </div>
                                    <div className="onboarding-preview-card">
                                        <div className="onboarding-preview-personal">
                                            <div className="onboarding-preview-title">
                                                <img src={PreviewIcon} alt="" />
                                                <p>Personal Information</p>
                                            </div>
                                            <div className='flex flex-wrap justify-between gap-2'>
                                                <div className="onboarding-preview-personal-data">
                                                    <p className="onboarding-preview-label">First Name</p>
                                                    <p className="onboarding-preview-value">{preview?.first_name}</p>
                                                </div>
                                                <div className="onboarding-preview-personal-data">
                                                    <p className="onboarding-preview-label">Last Name</p>
                                                    <p className="onboarding-preview-value">{preview?.last_name}</p>
                                                </div>
                                                <div className="onboarding-preview-personal-data">
                                                    <p className="onboarding-preview-label">Phone Number</p>
                                                    <p className="onboarding-preview-value">{preview?.phone_number}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="onboarding-preview-profile">
                                            <div className="onboarding-preview-title">
                                                <img src={PreviewIcon} alt="" />
                                                <p>Profile Information</p>
                                            </div>
                                            
                                            <div className="onboarding-preview-data">
                                                <p className="onboarding-preview-label">Bio</p>
                                                <p className="onboarding-preview-value">{preview?.bio}</p>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            }
                            <button type='submit' ref={formButton} className='hidden'>Submit</button>
                        </form>
                    )}
                />
            </div>
        </div>
        <div className="onboarding-footer">
            <p className="onboarding-steps">
                Step <span>{stage}</span> of <span>3</span>
            </p>
            <div className="onboarding-controls">
                {
                    stage > 1 &&
                    <button className='onboarding-previous' onClick={handlePreviousStage}>Previous</button>
                }
                <button className='onboarding-next' onClick={handleNextStage}>
                    {
                        stage < 3 ?
                        "Next":
                        "Save"
                    }
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default Onboarding
