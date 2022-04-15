import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./FeaturedProjects.style.scss";

const Featured = () => {
  const featured = useSelector((state) => state.home);

  const [openModal, setOpenModal] = useState(false);

  const [offsetY, setOffsetY] = useState(0);

  const handleScrollY = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    featured && (
      <section id="project" className="content-full">
        <div className="featured p-h-6 p-v-5">
          <h1
            className="project-section-title smooth-scroll-title"
            style={{ transform: `translateY(-${offsetY * 0.04}px)` }}
          >
            {featured.projectsSection?.projectPresentation.value}
          </h1>

          <div className="projects">
            <div className="project-section-grid ">
              {featured.projectsSection?.projects.map((project) => {
                return (
                  <div className="project-items"
                  key={project.id}>
                    <img
                      style={{ transform: `translateY(-${offsetY * 0.08}px)` }}
                      onClick={() => {
                        featured.selectedProjectID = project.id;
                        setOpenModal(true);
                      }}
                      
                      className="project-img scroll-projects"
                      src={project.projectImg.value}
                      alt="projects images"
                    />
                    <div
                      className="grid-title scroll-projects"
                      style={{ transform: `translateY(-${offsetY * 0.06}px)` }}
                    >
                      <h3 className="project-title"
                      >
                        {project.projectTitle.value}
                        
                      </h3>
                      <h3 className="project-subtitle"
                      >
                        {project.projectSubtitle.value}
                        
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="project-description scroll-description"
              style={{ transform: `translateY(-${offsetY * 0.06}px)` }}
            >
              <h2 className="subtitle">
                {featured.projectsSection?.subtitle.value}
              </h2>
              <p>{featured.projectsSection?.projectDescription.value}</p>
            </div>
            {openModal && <Modal closeModal={setOpenModal} />}
          </div>
        </div>
      </section>
    )
  );
};

export default Featured;
