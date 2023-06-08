import React from 'react';

//import image
import myimg from '../img/banner hero1.jpg';

const Hero = () => {
  return (
    <section id="home" className="lg:h-[90vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/*left side */}
          <div className="flex-1 flex flex-col mt-12 items-center lg:items-start">
            <p className="text-lg text-accent mt-5 mb-[22px]">Hey, I'm Surur</p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">Creating web designs and crafting dynamic and responsive web interfaces.</p>
            <a href="#contact" className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              Work with me
            </a>
          </div>

          {/*right side */}
          <div
            className="hidden lg:flex flex-1
          justify-end items-end h-full"
          >
            <img src={myimg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
