import { useState, useEffect, useRef } from "react";
import { Modal } from "flowbite-react";
import PropTypes from "prop-types";
import "./style.css";
import { getModalSize } from "./modalSize";
import Progress from "../ui/progress/Progress";
import CloseButton from "../../assets/btnClose.svg";

// Add the flexButtons prop to arrange buttons horizontally

function Modals({
  title,
  description,
  btnAcceptText,
  btnCloseText,
  btnColor,
  children,
  modalSize,
  onClose,
  onAccept,
  onPrevious,
  dismissible,
  progressPercent,
  flexButtons
}) {
      const modalWidth = getModalSize(modalSize);
      const [windowWidth,setWindowWidth] = useState(window.innerWidth);
      const dismissModal = (e) => {
          (e.target === e.currentTarget) && onClose()
      };
      const modalContentRef = useRef(null);
      useEffect(() => {
          // Listen for changes to the screen width
          const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
      }, []);
      useEffect(()=>{
        const modalContentHeight = modalContentRef.current.scrollHeight;
        // const windowHeight = window.innerHeight;
        if (modalContentHeight > 400) {
          modalContentRef.current.classList.add('overflow-y-scroll');
        } else {
          modalContentRef.current.classList.remove('overflow-y-scroll');
        }
      },[children])
    return (
      <div className="modal-container" onClick={(e)=>{ dismissible && dismissModal(e)}}>
          <div style={{maxWidth: `${modalWidth}px`}} className="modal-content">
              
                  <div className="modal-header">
                      <div className="flex flex-col">
                          <h3 className="modal-title">
                              {title}
                          </h3>
                          <p className="modal-description">{description}</p>
                      </div>
                      <button type="button" className="modal-close-btn" onClick={onClose}>
                          <img src={CloseButton} alt="close-btn" />
                      </button>
                  </div>
                <div ref={modalContentRef} className='modal-content-holder pt-0'>
                  <div className="modal-body">
                      {children}
                  </div>
                </div>
                  <div className="modal-footer">
                        <div className={
                          `w-full flex flex-row-reverse gap-[12px] 
                            ${
                              (!flexButtons || window.innerWidth < 800) &&
                              " flex-col"
                            }`
                        }>
                          <button 
                            type="button" 
                            style={{
                              background: btnColor,
                              color: "#fff",
                              width: (flexButtons && window.innerWidth > 800) 
                                ? "177px" 
                                : "100%"
                              }} 
                              className={`modal-btn`} 
                              onClick={onAccept}
                            >
                              {btnAcceptText}
                            </button>
                          <button 
                            type="button" 
                            style={{
                              width: (flexButtons && window.innerWidth > 800) 
                              ? "228px" 
                              : "100%"
                            }} 
                            className="modal-btn btn-close" 
                            onClick={onPrevious? onPrevious : onClose}
                            >
                              {btnCloseText}
                            </button>
                      </div>
              </div>
              {
                  progressPercent &&
                  <div className="modal-progress">
                      <Progress width={`${progressPercent}%`} />
                  </div>
              }
          </div>
      </div>
    );
}

// PropTypes definition
Modals.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnAcceptText: PropTypes.string.isRequired,
  btnCloseText: PropTypes.string.isRequired,
  btnColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  modalSize: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  onPrevious: PropTypes.func,
  dismissible: PropTypes.bool,
  progressPercent: PropTypes.number,
};

export default Modals;
