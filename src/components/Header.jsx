import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <div className='sm:w-full sm:flex sm:justify-between sm:items-center sm:p-5 font-smilbold  text-lg '>
    {/* logo */}
    <div className='sm:w-[10%]'>your Logo</div>
    {/* nav */}
    <nav className='sm:w-[60%]'>
                <ul className='sm:flex sm:justify-around uppercase'>
                    <li><Link>what we do</Link></li>
                    <li><Link>who we are</Link></li>
                    <li><Link>our work</Link></li>
                </ul>
    </nav>
    {/* menu icon */}
    <div className='sm:w-auto'>
       <Link className=''> <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></Link>
    </div>


    </div>
  )
}

export default Header