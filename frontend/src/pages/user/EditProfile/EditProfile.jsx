import React, { useContext, useRef, useState } from 'react'
import EditIcon from '../../../assets/edit-icon.png';
import ArrowBack from '../../../assets/BackIcon.svg'
import './style.css'
import { AppContext } from '../../../store/AppContext'
import { Field, Form } from 'react-final-form';
import { axiosInstance } from '../../../utils/api';

const EditProfile = () => {
    const {userDetails,setUserDetails} = useContext(AppContext);

    const axios = axiosInstance()

    const imgSelector = useRef(null);

    const [selectedImage,setSelectedImage] = useState(null);
    const [imgUrl,setImgUrl] = useState(null);

    const handleImageClick = () => {
        imgSelector.current.click()
        alert("Clicked")
    }

    const handleChooseImage = (e) => {
        const file = e.target.files[0];

        setSelectedImage(file)

        const url = URL.createObjectURL(file);

        setImgUrl(url)

    }

    const handleSubmit = (values) => {

        console.log("Edit values are: ",values);

        const { profile_picture,...payloadNoPhoto } = values;

        if(!selectedImage){
            axios.put('/api/user/update',payloadNoPhoto)
            .then(({data})=>{
                console.log("Response no photo: ",data)
            })
            .catch((err)=>{
                console.log("Error occurred is: ",err)
            })
        }else{
            axios.put('/api/user/update',values,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(({data})=>{
                console.log("Response: ",data)
            })
            .catch((err)=>{
                console.log("Error occurred is: ",err)
            })
        }

        setUserDetails((prev)=>{
            return {
                ...prev,
                ...values,
                profile_picture: imgUrl ? imgUrl : prev.profile_picture
            }
        })

    }
  return (
    <div className='h-full relative'>
      <div className="edit-profile-header">
        <button onClick={()=>history.back()}><img src={ArrowBack} alt='' /></button>
        <p>Edit Profile</p>
      </div>
      <div className="edit-profile-body">
        <div className="edit-profile-picture">
            <img src={imgUrl ? imgUrl : userDetails?.profile_picture} alt="" />
            <button onClick={handleImageClick}>
                <img src={EditIcon} alt="" />
            </button>
            <input type="file" accept='image/*' className='hidden' ref={imgSelector} onChange={handleChooseImage} />
        </div>
        <div className='w-full'>
            <p className='text-lg font-semibold'>Personal Details</p>
        </div>
        <Form 
            onSubmit={handleSubmit}
            initialValues={{
                first_name: userDetails?.first_name,
                last_name: userDetails?.last_name,
                username: userDetails?.username,
                email: userDetails?.email,
                bio: userDetails?.bio,
                profile_picture: selectedImage ? selectedImage : null
            }}
            render={({form,handleSubmit,submitting})=>(
                <form className='edit-profile-form' onSubmit={handleSubmit}>
                    <div className="edit-form-group">
                        <label htmlFor="">First Name</label>
                        <Field 
                            name='first_name'
                            type='text'
                            render={({meta,input})=>(
                                <div >
                                    <input {...input} />
                                    {
                                        meta.error &&
                                        <span className='text-red-500' >{meta.error}</span>
                                    }
                                </div>
                            )}
                        />
                    </div>
                    <div className="edit-form-group">
                        <label htmlFor="">Last Name</label>
                        <Field 
                            name='last_name'
                            type='text'
                            render={({meta,input})=>(
                                <div >
                                    <input {...input} />
                                    {
                                        meta.error &&
                                        <span className='text-red-500' >{meta.error}</span>
                                    }
                                </div>
                            )}
                        />
                    </div>
                    <div className="edit-form-group">
                        <label htmlFor="">Username</label>
                        <Field 
                            name='username'
                            type='text'
                            render={({meta,input})=>(
                                <div >
                                    <input {...input} />
                                    {
                                        meta.error &&
                                        <span className='text-red-500' >{meta.error}</span>
                                    }
                                </div>
                            )}
                        />
                    </div>
                    <div className="edit-form-group">
                        <label htmlFor="">Email</label>
                        <Field 
                            name='email'
                            type='text'
                            render={({meta,input})=>(
                                <div >
                                    <input {...input} />
                                    {
                                        meta.error &&
                                        <span className='text-red-500' >{meta.error}</span>
                                    }
                                </div>
                            )}
                        />
                    </div>
                    <div className="edit-form-group w-full">
                        <label htmlFor="">Bio</label>
                        <Field 
                            name='bio'
                            type='text'
                            render={({meta,input})=>(
                                <div >
                                    <textarea className='h-[100px]' {...input} />
                                    {
                                        meta.error &&
                                        <span className='text-red-500' >{meta.error}</span>
                                    }
                                </div>
                            )}
                        />
                    </div>
                    <div className='w-full flex justify-end py-3'>
                        <button className='submit-edit-profile'>
                            Save Changes
                        </button>
                    </div>
                </form>
            )}
        />
        
      </div>
    </div>
  )
}

export default EditProfile
