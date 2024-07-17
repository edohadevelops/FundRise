import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import Filter from '../../../assets/Filter2.svg';
import AddIcon from '../../../assets/addLine.svg';
import ForYou from '../../../tabs/Campaign/ForYou/ForYou';
import Following from '../../../tabs/Campaign/Following/Following';
import Modals from '../../../components/modal/Modal';
import { Form, Field } from 'react-final-form'
import { FormControlLabel } from '@mui/material';
import { axiosQuery } from '../../../utils/api.js'; 

const Campaign = () => {
  const [currentTab,setCurrentTab] = useState("For You");
  const [campaignItems,setCampaignItems] = useState([
      {
          title: "Kemi's University Tuition",
          category: "Education",
          daysLeft: 2,
          currentAmmount: "50,000",
          totalAmount: "100,000",
          progressPercent: 20,
          totalDonators: 4,
          username: "edohaTheDev",
          totalLikes: 1203
      },
      {
          title: "Dorcas Memorial Fund",
          category: "Memorial",
          daysLeft: 5,
          currentAmmount: "100,000",
          totalAmount: "150,000",
          progressPercent: 60,
          totalDonators: 10,
          username: "uprisenigeria",
          totalLikes: 50
      },
      {
          title: "Robotic School For Kids",
          category: "Education",
          daysLeft: 20,
          currentAmmount: "300,000",
          totalAmount: "400,000",
          progressPercent: 70,
          totalDonators: 8,
          username: "jameson",
          totalLikes: 400
      }
  ]);
  const [modalOpen,setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true)
  }

  const createCampaignBtn = useRef();
  const handleCreateCampaign = async(values) => {
    const payload = {
      ...values,
      campaign_img: campaignImg,
      // category: Number(values.category),
    }
    console.log("Payload is: ",payload)
    axiosQuery.post(`${process.env.BASE_URL}/api/campaign/create`,payload)
    .then((data)=>{
      console.log("Data is",data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  };
  const handleFormSubmit = () => {
    createCampaignBtn.current.click();
  }

  const [campaignImg,setCampaignImg] = useState(null);
  const [imgURL,setImgURL] = useState(null)
  const filePicker = useRef(null);


  const handleFilePicker = () => {
    filePicker.current.click()
  }

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    setCampaignImg(file);
    const url = URL.createObjectURL(file)
    setImgURL(url)
  }

  return (
    <>
      <div className='campaign-page'>
        <div className="campaign-header">
          <p className="page-title">Campaigns</p>
          <div className="campaign-icons">
            <button onClick={openModal} className="campaign-icon">
              <img src={AddIcon} alt='add-icon' />
            </button>
            <button className="campaign-icon">
              <img src={Filter} alt='filter-icon' />
            </button>
          </div>
        </div>
        <div className="campaign-tabs">
          <button 
            className={
              `campaign-tab ${currentTab === "For You" && "active-campaign"}`
            }
            onClick={()=>setCurrentTab("For You")}
          >
            For You
          </button>
          <button 
            className={
              `campaign-tab ${currentTab === "Following" && "active-campaign"}`
            }
            onClick={()=>setCurrentTab("Following")}
          >
            Following
          </button>
        </div>
        <div className="campaign-list">
          {
            currentTab === "For You" ?
            <ForYou campaigns={campaignItems} />:
            <Following campaigns={campaignItems} />
          }
        </div>
      </div>
      {
        modalOpen &&
        <Modals 
          title='Add Campaign'
          description='Start raising the funds you need.'
          btnAcceptText='Create Campaign'
          btnCloseText='Cancel'
          btnColor='#187070'
          onClose={()=>setModalOpen(false)}
          modalSize='2xl'
          onAccept={handleFormSubmit}
          dismissible={true}
        >
          <div className='add-campaign-img' onClick={handleFilePicker}>
            {
              !imgURL ?
              <button>
                <img src={AddIcon} alt="plus icon" />
                <span>Add Photo</span>
              </button>:
              <img className='new-campaign-img' src={"http://loacalhost:5000/assets/campaign/images/campaign_img-1721247636309"} alt="" />
            }
            <input className='hidden' type="file" accept='image/*' onChange={handleImgChange} ref={filePicker}/>
          </div>
          <Form 
            onSubmit={handleCreateCampaign}
            initialValues={{
              fundraising_target: "All or Nothing",
              title: "",
              target_amount: "",
              start_date: "",
              end_date: "",
              category_id: "",
              beneficiary_type: "",
            }}
            render={({submitting,hasValidationErrors,handleSubmit})=>(
              <form className='add-campaign-form' onSubmit={handleSubmit}>
                <div className="modal-input-group modal-half-input">
                  <label className='modal-input-label' htmlFor="title">Title</label>
                  <Field name='title'>
                    {
                      ({meta,input})=>(
                        <div>
                          <input className='modal-input' {...input} type="text" placeholder='E.g Tuition Fees' />
                          {
                            meta.error && meta.touched &&
                            <span className='text-red-500'>{meta.error}</span>
                          }
                        </div>
                      )
                    }
                  </Field>  
                </div>
                <div className="modal-input-group modal-half-input">
                  <label className='modal-input-label' htmlFor="target_amount">Goal (Target Amount)</label>
                  <Field name='target_amount'>
                    {
                      ({meta,input})=>(
                        <div>
                          <input className='modal-input' {...input} type="number" placeholder='E.g 10,000' />
                          {
                            meta.error && meta.touched &&
                            <span className='text-red-500'>{meta.error}</span>
                          }
                        </div>
                      )
                    }
                  </Field>    
                </div>
                <div className="modal-input-group modal-half-input">
                  <label className='modal-input-label' htmlFor="start_date">Start Date</label>
                  <Field name='start_date'>
                    {
                      ({meta,input})=>(
                        <div>
                          <input className='modal-input' {...input} type="date" />
                          {
                            meta.error && meta.touched &&
                            <span className='text-red-500'>{meta.error}</span>
                          }
                        </div>
                      )
                    }
                  </Field>
                    
                </div>
                <div className="modal-input-group modal-half-input">
                  <label className='modal-input-label' htmlFor="end_date">End Date</label>
                  <Field name='end_date'>
                    {
                      ({meta,input})=>(
                        <div>
                          <input className='modal-input' {...input} type="date" />
                          {
                            meta.error && meta.touched &&
                            <span className='text-red-500'>{meta.error}</span>
                          }
                        </div>
                      )
                    }
                  </Field>                   
                </div>
                <div className="modal-input-group modal-half-input">
                  <label className='modal-input-label' htmlFor="category_id">Category</label>
                  <Field name='category_id'>
                    {
                      ({meta,input})=>(
                        <div>
                          <select className='modal-input' {...input}>
                            <option></option>
                            <option value={1}>Education</option>
                            <option value={2}>Medical</option>
                            <option value={3}>Business</option>
                            <option value={4} >Sports</option>
                            <option>Other</option>
                          </select>
                          {
                            meta.error && meta.touched &&
                            <span className='text-red-500'>{meta.error}</span>
                          }
                        </div>
                      )
                    }
                  </Field>
                    
                </div>
                <div className="modal-input-group modal-half-input">
                  <label className='modal-input-label' htmlFor="beneficiary_type">Beneficiary type</label>
                  <Field name='beneficiary_type'>
                    {
                      ({meta,input})=>(
                        <div>
                          <select className='modal-input' {...input}>
                            <option value=""></option>
                            <option value="Organisation">Organisation</option>
                            <option value="Individual">Individual</option>
                            <option value="Team">Team</option>
                          </select>
                          {
                            meta.error && meta.touched &&
                            <span className='text-red-500'>{meta.error}</span>
                          }
                        </div>
                      )
                    }
                  </Field>
                    
                </div>
                <div className="modal-input-group">
                  <label className='modal-input-label' htmlFor="fundraising_target">Fundraising target</label>
                  <div className='px-3 flex flex-col gap-2 w-fit'>
                    <FormControlLabel 
                      label="All or Nothing"
                      control={(
                        <Field name='fundraising_target' type='radio' value={"All or Nothing"} component="input"/>
                      )}
                      sx={{
                        gap: "5px"
                      }}
                    />
                    <FormControlLabel 
                      label="Sweep what is raised"
                      control={(
                        <Field name='fundraising_target' type='radio' value={"Sweep what is raised"} component="input"/>
                      )}
                      sx={{
                        gap: "5px"
                      }}
                    />
                    <FormControlLabel 
                      label="Forever funding"
                      control={(
                        <Field name='fundraising_target' type='radio' value={"Forever funding"} component="input"/>
                      )}
                      sx={{
                        gap: "5px"
                      }}
                    />
                  </div>                    
                </div>
                <div className="modal-input-group">
                  <label className='modal-input-label' htmlFor="description">Story</label>
                  <Field name='description'>
                    {
                      ({meta,input})=>(
                        <div>
                          <textarea {...input} type="text" />
                          {
                            meta.error && meta.touched &&
                            <span className='text-red-500'>{meta.error}</span>
                          }
                        </div>
                      )
                    }
                  </Field>
                    
                </div>
                <button className='hidden' type='submit' ref={createCampaignBtn} ></button>
              </form>
            )}
          />
        </Modals>
      }
    </>
  )
}

export default Campaign;
