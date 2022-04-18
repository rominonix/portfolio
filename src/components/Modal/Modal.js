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
      <div className="modal-background" >
        <div className="modal-container">
        <div className="bg"></div>
          {/* <div className="modal-close-button"> */}
            <button className="close-x" onClick={() => closeModal(false)}></button>
          {/* </div> */}

          {/* <div className="modal-grid"> */}
            <div className="modal-left">
            {/* <button className="close-x" onClick={() => closeModal(false)}></button> */}
              <img
                className="modal-img"
                src={selectedProject.projectImg.value}
                alt="project"
              />
              <div className="modal-title">
                <h1 className="project-title">{selectedProject.projectTitle.value}</h1>
                <h1 className="project-subtitle">{selectedProject.projectSubtitle.value}</h1>
              </div>

              <p className="p-h-5">
                {selectedProject.projectSingleDescription.value}
              </p>

              <a
                  href={selectedProject.linkToCode.value}

                  // href={modal.projectsSection?.projects[2].linkToCode.value}
                  target="_blank"
                  rel="noreferrer"
                >
                  link to code
                </a>
            </div>
            {/* <div className="modal-link">
                <a
                  href={selectedProject.linkToCode.value}

                  // href={modal.projectsSection?.projects[2].linkToCode.value}
                  target="_blank"
                  rel="noreferrer"
                >
                  link to code
                </a>
              </div> */}
            {/* <div className="modal-right"> */}
              {/* <video loop="loop" autoPlay muted>
                <source
                  src={modal.projectsSection?.projects[2].projectVideo.value}
                  type="video/mp4"
                />
              </video> */}

              {/* <div className="modal-link">
                <a
                  href={selectedProject.linkToCode.value} */}

                  {/* // href={modal.projectsSection?.projects[2].linkToCode.value}
                //   target="_blank"
                //   rel="noreferrer"
                // >
                //   link to code
                // </a> */}

                {/* <a>link to demo</a> */}
              </div>
            </div>
          // </div>
        // </div>
      // </div>
    )
  );
};

export default Modal;
