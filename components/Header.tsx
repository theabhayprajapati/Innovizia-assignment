import React from 'react'


import { MenuIcon, SearchIcon } from '@heroicons/react/outline'


// import Barchart from '../public/svg/bar-chart.svg'
const Header = () => {

    return (
        <div className="rounded-lg border-green-500 mx-auto flex h-[68px] md:h-[90px] items-center justify-between px-2 md:px-4 md:p-0">
            <img src="/leftbar.svg" alt="leftbar" className='md:hidden' />

            <div className="flex items-center cursor-pointer" >
                <img src="/logomd.svg" alt="logomd" className="hidden md:inline-block" />
                <img src="/logodm.svg" alt="logodm" className="md:hidden" />
            </div>
            <div className="flex items-center gap-8">
                <div className="h-10 rounded-full header-search cursor-pointer hidden md:flex items-center px-3 border justify-around">
                    <input type="search" name="search" id="search" className='cursor-text placeholder:uppercase outline-none w-60' placeholder="Search A Skill" />
                    <img src="/searchicon.svg" alt="" />
                </div>
                <div className='flex items-center gap-8'>
                    <img src="/rightbar.svg" alt="" className='hidden md:inline-block' />
                    <div className='flex items-center justify-around gap-5'>
                        <button className="hidden login-button md:inline-flex">
                            Login In
                        </button>
                        <button className="gradient-style-sm">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header