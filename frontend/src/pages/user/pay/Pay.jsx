import React, { useRef, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import User from '../../../assets/ProfilePicture.png'
import ArrowBack from '../../../assets/BackIcon.svg';
import Campaign from '../../../assets/CampaignImg.webp';
import Naira from '../../../assets/currency.svg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FormControlLabel } from '@mui/material';
import { Form,Field } from 'react-final-form'

import './style.css'
import { axiosQuery } from '../../../utils/api';
import { AppContext }  from '../../../store/AppContext'
import axios from 'axios';



const Pay = () => {

  const { userDetails } = useContext(AppContext)

  const {campaign_id} = useParams();

  const handleFormSubmit = async(values) => {
    console.log("Values is: ",{
      ...values,
      backer_id: userDetails.user_id,
      campaign_id: campaign.campaign_id
    })
    const payload = {
      ...values,
      backer_id: userDetails.user_id,
      campaign_id: campaign.campaign_id
    }
    try{
      const { data } = await axiosQuery.post(`${process.env.BASE_URL}/api/donate`,payload);
      console.log(data);
      if(data){
        window.location.href = data.auth_url
      }
        
    }catch(err){
      console.log("Error occurred is: ",err)
    }
  };
  const handleFormValidation = (values) => {

    const {
      donation_amount,
      donation_message,
      donation_type
    } = values;

    const errors = {}

    if(!donation_amount){
      errors.donation_amount = "Donation amount is required*"
    }
    if(!donation_message){
      errors.donation_message = "Donation message is required"
    }
    if(!donation_type){
      errors.donation_type = "Donation type needs to be selected*"
    }

    return errors
    
  }
  const [campaign,setCampaign] = useState({});

  useEffect(()=>{
    const getCampaigns = () => {
      axiosQuery.get(`/api/campaign/getById/${campaign_id}`)
      .then(({data})=>{
        console.log("Campaign for donation is: ",data.campaign);
        setCampaign(data.campaign)
      })
      .catch((err)=>{
        console.log("Error occured while getting campaign: ", err)
      })
    }

    getCampaigns();
  },[]);



  return (
    <div className="payment-page">
      <div className="pay-header">
        <button>
            <img src={ArrowBack} />
        </button>
        <p>Make Donation</p>
      </div>
      <div className="pay-campaign-summary">
        <div className="pay-campaign-user-img">
            <img src={User} alt="" />
        </div>
        <div className='pay-campaign-summary-details'>
            <p className=''>You're about to support <span className='font-semibold'>{campaign?.title}</span></p>
            <p className='pay-campaign-help'>Your donation would help <span className="font-semibold">{campaign?.User?.first_name + " " + campaign?.User?.last_name}</span></p>
        </div>
      </div>
      <div className="pay-campaign-details">
        <div className="pay-campaign-card">
          <div className="pay-campaign-details-img">
            <img src={campaign?.campaign_img} alt="" />
          </div>
          <div className="pay-campaign-details-img-frame">

          </div>
          <div className="pay-campaign-details-insights">
            <span><FavoriteBorderOutlinedIcon sx={{fontSize: 20}} /> 100</span>
            <span> <FavoriteBorderOutlinedIcon sx={{fontSize: 20}} /> 4</span>
          </div>
          {/* <div className="pay-campaign-details-insights">

          </div> */}
        </div>
        <div className='flex flex-col gap-2'>
          <div className="post-insights-body">
            <div className="post-insights-percentage"></div>
          </div>
          <div className="post-insights-footer">
            <p className="post-insights-amount">
              <span>{ campaign?.current_amount }</span> / 
              <span>{ campaign?.target_amount }</span>
            </p>
            <p className="post-insights-pervent">{Math.floor(campaign?.progressPercent)}%</p>
          </div>
        </div>
        <Form 
          onSubmit={handleFormSubmit}
          initialValues={{
            donation_type: "One off",
            donation_information: false
          }}
          validate={handleFormValidation}
          render={({handleSubmit,form,hasValidationErrors,submitting})=>(
            <form className="pay-campaign-form" onSubmit={handleSubmit}>
              <div className="pay-campaign-form-input">
                <label htmlFor="">Enter Amount *</label>
                <Field
                  name="donation_amount"
                  render={({input,meta})=>(
                    <div className="pay-campaign-amount-input">
                      <img src={Naira} alt="" />
                      <input type="number" {...input} />
                      {
                        meta.error && meta.touched &&
                        <span>{meta.error}</span>
                      }
                    </div>
                  )}
                />
              </div>
              <div className="pay-campaign-form-input">
                <label htmlFor="">Additional Comments</label>
                <Field
                  name="donation_message"
                  render={({input,meta})=>(
                    <div className="pay-campaign-amount-input">
                      <textarea name="" id="" {...input} /> 
                      {
                        meta.error && meta.touched &&
                        <span>{meta.error}</span>
                      }
                    </div>
                  )}
                />
                
              </div>
              <div className="pay-campaign-form-input">
                <label htmlFor="">Donation Information</label>
                <Field 
                  name='donation_information'
                  type='checkbox'
                  render={({input,meta})=>(
                    <div className="pay-campaign-custom-input px-4">
                      <FormControlLabel 
                        control={<input name="donation_info" {...input} />}
                        label={"Keep me anonymous"}
                        sx={{
                          gap: "5px"
                        }}
                      />
                      {
                        meta.error && meta.touched &&
                        <span>{meta.error}</span>
                      }
                    </div>
                  )}
                
                />
              </div>
              <div className="pay-campaign-form-input">
                <label htmlFor="">Donation type</label>
                <Field 
                  name='donation_type'
                  type='radio'
                  value={"One off"}
                  render={({input,meta})=>(
                    <div className="pay-campaign-custom-input px-4">
                      <FormControlLabel 
                        control={<input {...input} />}
                        label={"One off"}
                        sx={{
                          gap: "5px"
                        }}
                      />
                      {
                        meta.error && meta.touched &&
                        <span>{meta.error}</span>
                      }
                    </div>
                  )}
                
                />
                <Field 
                  name='donation_type'
                  type='radio'
                  value={"Monthly recurring"}
                  render={({input,meta})=>(
                    <div className="pay-campaign-custom-input px-4">
                      <FormControlLabel 
                        control={<input {...input} />}
                        label={"Monthly recurring"}
                        sx={{
                          gap: "5px"
                        }}
                      />
                      {
                        meta.error && meta.touched &&
                        <span>{meta.error}</span>
                      }
                    </div>
                  )}
                
                />
              </div>
              <div className="post-action">
                <button 
                  className={`post-donate-btn ${(hasValidationErrors || submitting) && "donate-btn-disabled"}`} 
                  type='submit' 
                  disabled={hasValidationErrors || submitting}
                >
                  Donate
                </button>
              </div>
              
            </form>
          )}
        />
        
        
      </div>
    </div>
  )
}

export default Pay
