import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

const [show,setShow]=useState(false)
const [show2,setShow2]=useState(false)
const [show3,setShow3]=useState(false)
const [open1,setOpen1]=useState(false)
const [open2,setOpen2]=useState(false)
const [open3,setOpen3]=useState(false)
const [openMenu,setOpenMenu]=useState(false)
const openMenuHandler=()=>{
  setOpenMenu(true)
}
const closeMenuHandler=()=>{
  setOpenMenu(false)
}
  const showHandler =(e)=>{
    
    setShow(true)
  }
  const leaveHandler =()=>{

    setShow(false)
   
  }
    const leaveHandler2 =()=>{

    setShow2(false)
   
  }
   const showHandler2 =(e)=>{
    
    setShow2(true)
  }
    const showHandler3 =(e)=>{
    
    setShow3(true)
  }
    const leaveHandler3 =()=>{

    setShow3(false)
   
  }
  const openHandler1 =()=>{

    setOpen1(true)
  }
   const openHandler2 =()=>{

    setOpen2(true)
  }
   const openHandler3 =()=>{

    setOpen3(true)
  }
  const closeHandler1=()=>{
    setOpen1(false)

  }
   const closeHandler2=()=>{
setOpen2(false)
  }
   const closeHandler3=()=>{
setOpen3(false)
  }

  useEffect(() => {
  document.body.classList.toggle('overflow-hidden', openMenu);
}, [openMenu]);
  return (

    <div className='sm:w-full sm:flex sm:justify-between sm:items-center sm:p-5 font-smilbold  text-lg relative'>
    {/* logo */}
    <div className='sm:w-[10%]'>your Logo</div>
    {/* nav */}
    <nav className='sm:w-[60%]'>
                <ul className='sm:flex sm:justify-around uppercase'>
                    <li onMouseEnter={showHandler} onMouseLeave={leaveHandler}  className='relative cursor-default' ><div>what we do</div>
                    
                    {show   ?    <ul className='bg-black sm:flex sm:flex-col sm:p-7 sm:gap-7 font-brandonBold absolute sm:w-[300px] z-50'>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>clinic experience</li></Link>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>cosmetic dentistry</li></Link>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>porcelain veneers</li></Link>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>small makeover process</li></Link>
                        </ul>:""}
                  
                    </li>
                    <li  className='cursor-default relative' onMouseEnter={showHandler2} onMouseLeave={leaveHandler2}><div>who we are</div>
                     {show2   ?    <ul className='bg-black sm:flex sm:flex-col font-brandonBold sm:p-5 sm:gap-7 absolute sm:w-[300px] z-50'>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>about us</li></Link>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>dr behnam</li></Link>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>our team</li></Link>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>our location</li></Link>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>brand partners</li></Link>
                        </ul>:""}
                    
                    </li>
                    <li className='cursor-default' onMouseEnter={showHandler3} onMouseLeave={leaveHandler3}><div>our work</div>
                       {show3   ?    <ul className='bg-black sm:flex sm:flex-col font-brandonBold sm:p-5 sm:gap-7 absolute sm:w-[300px] z-50'>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>before/after photos</li></Link>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>patient testimonials</li></Link>
                          <Link><li className='uppercase hover:text-[#A2D1DC] text-white font-bold'>blog</li></Link>
                        </ul>:""}
                    </li>
                </ul>
    </nav>
    {/* menu icon */}
    <div className='sm:w-auto'>
       <Link className=''> <svg onClick={openMenuHandler} className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></Link>
    </div>

    {/* open menu */}
  
<div className={openMenu? "bg-black sm:translate-x-0 transform transition-all ease-linear  sm:fixed z-50 sm:top-0 sm:right-0 sm:h-dvh sm:w-dvw sm:z-[60] sm:p-10 sm:flex sm:flex-col sm:items-center": "bg-black sm:translate-x-full z-50 transform transition-all  ease-linear  sm:fixed sm:top-0 sm:right-0 sm:h-dvh sm:w-dvw sm:z-[60] sm:p-10 sm:flex sm:flex-col sm:items-center" }>
                        <div className='text-white'>your logo</div>
                        <div className='text-white font-brandonLight sm:flex sm:items-center sm:justify-between sm:w-[60%] sm:p-5 sm:relative'><span className={open1? "cursore-pointer text-[#A2D1DC]":"curser-pointer text-white"}>what we do</span><span>{open1 ===false ?<svg onClick={openHandler1} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>:<svg onClick={closeHandler1} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 11V13H19V11H5Z"></path></svg>}</span>
                     
                        
                        </div>

                     { open1 ===true ?  <div className='sm:w-[60%]'>
                            <ul className='sm:flex sm:flex-col sm:gap-3 p-5'>
                          <Link><li className='capitalize hover:text-[#A2D1DC] text-white font-brandonLight'>clinic experience</li></Link>
                          <Link><li className='capitalize hover:text-[#A2D1DC] text-white font-brandonLight'>cosmetic dentistry</li></Link>
                          <Link><li className='capitalize hover:text-[#A2D1DC] text-white font-brandonLight'>porcelain veneers</li></Link>
                          <Link><li className='capitalize hover:text-[#A2D1DC] text-white font-brandonLight'>small makeover process</li></Link>
                        </ul>
                        </div>:""}
                        <div className='text-white font-brandonLight sm:flex sm:items-center sm:justify-between sm:w-[60%] sm:p-5'><span className={open2? "cursore-pointer text-[#A2D1DC]":"curser-pointer text-white"}>who we are</span>{open2 ===false ?<svg onClick={openHandler2} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>:<svg onClick={closeHandler2} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 11V13H19V11H5Z"></path></svg>}</div>

                        {open2 ?
                       <div className='sm:w-[60%]'>
                         <ul className='sm:flex sm:flex-col sm:gap-3 p-5'>
                          <Link><li className=' hover:text-[#A2D1DC] text-white font-brandonLight'>about us</li></Link>
                          <Link><li className=' hover:text-[#A2D1DC] text-white font-brandonLight'>dr behnam</li></Link>
                          <Link><li className=' hover:text-[#A2D1DC] text-white font-brandonLight'>our team</li></Link>
                          <Link><li className=' hover:text-[#A2D1DC] text-white font-brandonLight'>our location</li></Link>
                          <Link><li className=' hover:text-[#A2D1DC] text-white font-brandonLight'>brand partners</li></Link>
                        </ul>
                       </div>

                        :""}
                        <div className='text-white font-brandonLight sm:flex sm:items-center sm:justify-between sm:w-[60%] sm:p-5'><span className={open3? "cursore-pointer text-[#A2D1DC]":"curser-pointer text-white"}>our work</span>{open3 ===false ?<svg onClick={openHandler3} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>:<svg onClick={closeHandler3} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 11V13H19V11H5Z"></path></svg>}</div>
                      {open3?  <div className='sm:w-[60%]'>
                          <ul className='sm:flex sm:flex-col sm:gap-3 p-5'>
                          <Link><li className=' hover:text-[#A2D1DC] text-white font-brandonLight'>before/after photos</li></Link>
                          <Link><li className=' hover:text-[#A2D1DC] text-white font-brandonLight'>patient testimonials</li></Link>
                          <Link><li className=' hover:text-[#A2D1DC] text-white font-brandonLight'>blog</li></Link>
                        </ul>
                        </div>:""}
                        <div className='absolute top-7 right-7 z-[60]'><svg onClick={closeMenuHandler} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></div>



</div>
    </div>
  )
}

export default Header