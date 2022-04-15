import React from "react";
import { useSelector } from "react-redux";
import "./Modal.style.scss";

const Modal = ({ closeModal }) => {
  const modal = useSelector((state) => state.home);

  let projects = modal.projectsSection.projects;

  let selectedProject;

  for (let number in projects) {
    if (modal.selectedProjectID === projects[number].id) {
      selectedProject = projects[number];
    }
  }

  console.log("Selected project", selectedProject);

  return (
    modal && (
      <div className="modal-background">
      <div className="bg"></div>
        <div className="modal-container">
          <div className="modal-close-button">
            <button onClick={() => closeModal(false)}>X</button>
          </div>

          <div className="modal-grid">
            <div className="modal-left">
              
              <img
                className="modal-img"
                src={selectedProject.projectImg.value}
              />
              <div className='modal-title'>

              <h1>{selectedProject.projectTitle.value}</h1>
              <h1>{selectedProject.projectSubtitle.value}</h1>


              </div>

              <p className='p-h-5'>{selectedProject.projectSingleDescription.value}</p>
            </div>
            <div className="modal-right">
              <video
                // width="520"
                loop="loop"
                autoPlay 
                muted
              >
                <source
                  src={modal.projectsSection?.projects[2].projectVideo.value}
                  type="video/mp4"
                />
              </video>

              <div className="modal-link">
                <a 
                  href={modal.projectsSection?.projects[2].linkToCode.value}
                  target="_blank"
                  rel="noreferrer"
                >
                  link to code
                </a>
                {/* <button onClick={modal.projectsSection?.projects[2].linkToCode.value}>link to code</button> */}

                <a>link to demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
