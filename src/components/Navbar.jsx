import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaInstagram  } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { VscCode } from "react-icons/vsc";

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className="flex flex-shrink-0 items-center">
        <VscCode size={40}/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href="https://www.linkedin.com/in/atul-malviya/" target='_blank'>
        <FaLinkedin />
      </a>
      <a href="https://github.com/Atmalviya" target='_blank'>
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/at_malviya/" target='_blank'>
        <FaInstagram />
      </a>
      <a href="https://x.com/atulmal42805881" target='_blank'>
        <FaSquareXTwitter />
      </a>
    </div>
  </nav>
}

export default Navbar
