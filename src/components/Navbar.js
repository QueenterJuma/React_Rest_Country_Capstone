import React from 'react';
import {
  BsGithub, BsLinkedin, BsTwitter, BsGearWide,
} from 'react-icons/bs';
import { IoMdMic } from 'react-icons/io';

const Navbar = () => (
  <nav>
    <div className="myhandles">
      <a href="https://twitter.com/QueenJumah">
        <BsTwitter />
      </a>
      <a href="https://www.linkedin.com/in/queenteranyangojuma/">
        <BsGithub />
      </a>
      <a href="https://github.com/QueenterJuma">
        <BsLinkedin />
      </a>
    </div>
    <div className="nav-iconc">
      <IoMdMic />
      <BsGearWide />
    </div>
  </nav>
);

export default Navbar;
