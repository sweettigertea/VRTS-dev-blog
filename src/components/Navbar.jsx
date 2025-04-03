import React from 'react'
import {Link} from 'react-router-dom'
import {github, linkedin} from '../assets/Assets'


function Navbar() {
  return (
    <div className='w-screen h-[80px] bg-white fixed drop-shadow-lg'>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        <div>
          <Link to="/"><h1 className='ml-3 w-full'>SweetTigerTea's DevBlog</h1></Link>
        </div>
        <div className='flex items-center'>
          <ul className='hidden md:flex'>
            <li className='p-4'>Categories</li>
            <li className='p-4'>Search</li>
          </ul>
        </div>
        <div className='hidden md:flex mr-3'>
          <img src={github} alt="Github Logo" className='h-[25px]'/>
          <img src={linkedin} alt="LinkedIn Logo" className='h-[25px]'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
