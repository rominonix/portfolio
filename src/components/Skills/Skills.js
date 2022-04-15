import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import "./Skills.style.scss";

const Skills = () => {
  const skills = useSelector((state) => state.home);

  const [offsetY, setOffsetY] = useState(0);

  const handleScrollY = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    skills && (
      <section className='content-full'>
        <div className='skills p-v-5 p-h-6'>
          <h1 className='skill-title smooth-scroll'
          style={{ transform: `translateY(${offsetY * 0.02}px)` }}
          >
            {skills.skillsSection?.skillsTitle.value}
          </h1>
          <div className='skill-box-icon p-v-5 p-h-6 smooth-scroll'
          style={{ transform: `translateY(${offsetY * 0.01}px)` }}
          >
            {skills.skillsSection?.skillSectionIcon.map((icons) => {
              return (
                <div key={icons.id}
                className='skills-icons'>
                  <img className='icon' src={icons.skillsIcons.value} alt='icons' />
                  <p>{icons.iconsTitles.value}</p>
                </div>)
            })}
          </div>
        </div>
      </section>
    )
  );
};

export default Skills;
