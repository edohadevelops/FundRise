import React, { useRef } from 'react';
import User from '../../../assets/ProfilePicture.png'
import ArrowBack from '../../../assets/BackIcon.svg';
import Campaign from '../../../assets/CampaignImg.webp';
import Naira from '../../../assets/currency.svg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FormControlLabel } from '@mui/material';
import { Form,Field } from 'react-final-form'

import './style.css'



const Pay = () => {

  const handleFormSubmit = async(values) => {
    console.log(values)
  }

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
            <p className=''>You're about to support <span className='font-semibold'>Donate to support and evacuate 10 families in Gaza</span></p>
            <p className='pay-campaign-help'>Your donation would help <span className="font-semibold">Amen Edoha</span></p>
        </div>
      </div>
      <div className="pay-campaign-details">
        <div className="pay-campaign-card">
          <div className="pay-campaign-details-img">
            <img src={Campaign} alt="" />
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
              <span>50,000</span> / 
              <span>1,000,000</span>
            </p>
            <p className="post-insights-pervent">20%</p>
          </div>
        </div>
        <Form 
          onSubmit={handleFormSubmit}
          // initialValues={{
          //   donation_type: "One off"
          // }}
          render={({handleSubmit,form})=>(
            <form className="pay-campaign-form" onSubmit={handleSubmit}>
              <div className="pay-campaign-form-input">
                <label htmlFor="">Enter Amount *</label>
                <Field
                  name="donation_amount"
                  render={({input,meta})=>(
                    <div className="pay-campaign-amount-input">
                      <img src={Naira} alt="" />
                      <input type="text" {...input} />
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
                  name='donation_info'
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
                <button className="post-donate-btn" type='submit'>
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
