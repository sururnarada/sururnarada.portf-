import React, { useState, useEffect } from 'react';

// import Components
import myname from '../img/myname.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Social from '../components/Social';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        {/*logo*/}
        <a href="#">
          <img src={myname} alt="" />
        </a>
        {/*nav*/}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/*socials */}
        <div className="hidden lg:block">
          <Social />
        </div>
        {/*nav mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
