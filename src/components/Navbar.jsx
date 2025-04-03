import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {github, linkedin, menu, close} from '../assets/exportAssets'

function Navbar() {
  const [toggleMenuOpen,setToggleMenuOpen]=useState(false)
  const handleClick = ()=>setToggleMenuOpen(!toggleMenuOpen)

  return (
    <div className='w-screen h-[60px] bg-white drop-shadow-lg relative'>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        <div>
          <Link to="/"><h1 className='ml-3 w-full'>SweetTigerTea's DevBlog</h1></Link>
        </div>

        <div className='flex items-center'>
          <ul className='hidden md:flex'>
            <li className='mr-2'>Categories</li>
            <li>Search</li>
          </ul>
        </div>

        <div className='hidden md:flex mr-3'>
          <img src={github} alt="Github Logo" className='h-[30px] p-1'/>
          <img src={linkedin} alt="LinkedIn Logo" className='h-[30px] p-1'/>
        </div>

        <div className='md:hidden' onClick={handleClick}>
          <img src={!toggleMenuOpen?menu:close} alt="Menu Bar" className='h-[30px] p-1 object-contain mr-3'/>
        </div>
      </div>
      <div>
        <ul className={toggleMenuOpen?'absolute bg-white w-full px-3 md:hidden':'hidden'}>
            <div className='flex'>
              <li className='mr-2'>Categories</li>
              <li>Search</li>
            </div>
            <div className='flex my-2'>
              <img src={github} alt="Github Logo" className='h-[30px] p-1'/>
              <img src={linkedin} alt="LinkedIn Logo" className='h-[30px] p-1'/>
            </div>
          </ul>
      </div>
    </div>
  )
}

export default Navbar
