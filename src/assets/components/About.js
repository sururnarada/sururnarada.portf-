import React from 'react';

//import image
import about from '../img/aboutme1.jpg';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full
          w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={about}
            alt="unsplashimg"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block">Achmad Surur</h2>

              <p className="mb-4 text-accent">Freelance Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am a freelance Front-End Developer. With expertise in HTML, CSS, and JavaScript, I create aesthetically pleasing and responsive web designs. I also have experience in integrating with APIs and front-end frameworks like
                React or Vue.js. I continuously update my knowledge and skills in the latest technologies in Front-End Development.
                <br /> I look forward to contributing to your projects. I am always open to discussions and collaborations, so feel free to reach out to me!
              </p>
            </div>
            {/* <button  className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact me 
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
