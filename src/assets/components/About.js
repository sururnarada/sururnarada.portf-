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
                I am Achmad surur, a front end engineer, my specialist is Javascript, CSS, Html5, Vue js, Tailwind css, React js. i am till green but iam eager to learn something new related to technology.
                <br /> Lorem amet consectetur adipisicing elit. Officia, necessitatibus?
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
