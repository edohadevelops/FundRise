import React, { useRef, useState } from 'react';
import './style.css';
import Filter from '../../../assets/Filter2.svg';
import AddIcon from '../../../assets/addLine.svg';
import ForYou from '../../../tabs/Campaign/ForYou/ForYou';
import Following from '../../../tabs/Campaign/Following/Following';
import Modals from '../../../components/modal/Modal';
import { Form, Field } from 'react-final-form'

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
  const handleCreateCampaign = async() => {
    alert("Created")
  };

  const [campaignImg,setCampaignImg] = useState(null);
  const filePicker = useRef(null);

  const handleFilePicker = () => {
    filePicker.current.click()
  }

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader;
      reader.onload= (e) =>{
        setCampaignImg(e.target.result)
      }
      reader.readAsDataURL(file)
    }
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
          description='All fields are required.'
          btnAcceptText='Create Campaign'
          btnCloseText='Cancel'
          btnColor='#187070'
          onClose={()=>setModalOpen(false)}
          modalSize='2xl'
          onAccept={()=>setModalOpen(false)}
          dismissible={true}
        >
          <div className='add-campaign-img'>
            {
              !campaignImg ?
              <button onClick={handleFilePicker}>
                <img src={AddIcon} alt="plus icon" />
                <span>Add Photo</span>
              </button>:
              <img className='new-campaign-img' onClick={handleFilePicker} src={campaignImg && campaignImg} alt="" />
            }
            <input className='hidden' type="file" accept='image/*' onChange={handleImgChange} ref={filePicker}/>
          </div>
          <Form 
            onSubmit={handleCreateCampaign}
            render={({submitting,hasValidationErrors,handleSubmit})=>(
              <form className='add-campaign-form' onSubmit={handleSubmit}>
                <div className="modal-input-group modal-half-input">
                  <label className='modal-input-label' htmlFor="title">Title</label>
                  <Field name='title'>
                    {
                      (meta,input)=>(
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
                      (meta,input)=>(
                        <div>
                          <input className='modal-input' {...input} type="text" placeholder='E.g 10,000' />
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
                      (meta,input)=>(
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
                      (meta,input)=>(
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
                  <label className='modal-input-label' htmlFor="category">Category</label>
                  <Field name='category'>
                    {
                      (meta,input)=>(
                        <div>
                          <input className='modal-input' {...input} type="text" />
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
                  <Field name='beneiciary_type'>
                    {
                      (meta,input)=>(
                        <div>
                          <input className='modal-input' {...input} type="text" />
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
                  <div>
                    <Field name='fundraising_target' type='radio' value={"All or Nothing"} component="input"/>
                    <label htmlFor="fundraising_target">All or nothing</label>
                  </div>
                  <div>
                    <Field name='fundraising_target' type='radio' value={"Sweep it All"} component="input"/>
                    <label htmlFor="fundraising_target">Sweep it all</label>
                  </div>
                  <div>
                    <Field name='fundraising_target' type='radio' value={"All or something"} component="input"/>
                    <label htmlFor="fundraising_target">All or something</label>
                  </div>                     
                </div>
                <div className="modal-input-group">
                  <label className='modal-input-label' htmlFor="story">Story</label>
                  <Field name='story'>
                    {
                      (meta,input)=>(
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
              </form>
            )}
          />
        </Modals>
      }
    </>
  )
}

export default Campaign;
