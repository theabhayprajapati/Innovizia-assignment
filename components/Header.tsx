import React from 'react'


import { MenuIcon, SearchIcon } from '@heroicons/react/outline'


// import Barchart from '../public/svg/bar-chart.svg'
const Header = () => {

    return (
        <div className="rounded-lg border-green-500 max-w-7xl mx-auto flex h-[68px] md:h-[100px] items-center justify-between px-2 md:px-4 md:p-0">
            <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.58331C0 2.45414 0.721698 3.16663 1.60377 3.16663H28.3962C29.2783 3.16663 30 2.45414 30 1.58331C30 0.712492 29.2783 0 28.3962 0H1.60377C0.721698 0 0 0.712492 0 1.58331ZM2.58779 19H9.00288C9.88496 19 10.6067 18.2875 10.6067 17.4167C10.6067 16.5459 9.88496 15.8334 9.00288 15.8334H2.58779C1.70572 15.8334 0.984018 16.5459 0.984018 17.4167C0.984018 18.2875 1.70572 19 2.58779 19ZM18.2809 11.0833H2.24314C1.36107 11.0833 0.639371 10.3708 0.639371 9.49998C0.639371 8.62916 1.36107 7.91666 2.24314 7.91666H18.2809C19.163 7.91666 19.8847 8.62916 19.8847 9.49998C19.8847 10.3708 19.163 11.0833 18.2809 11.0833Z" fill="#656565" />
            </svg>

            <div className="flex items-center cursor-pointer" >
                <img src="/vercel.svg" alt="" className="md:h-[62px] md:w-[56px] h-[36px] w-[30px] " />
                <div className='items-center flex flex-col mx-2  justify-center'>
                    <h1 className="header-text text-[12px] w-full items-center justify-self-center md:text-[26px]">
                        Stilly Tree
                    </h1>
                    <p className="md:text-[9px] header-small-text text-[4px] font-extralight">
                        upstill with a personal touch
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-8 ">
                <div className="h-10 border rounded-full header-search cursor-pointer hidden md:flex items-center px-3">
                    <input type="search" name="search" id="search" className='cursor-text outline-none w-60' placeholder="Search A Skill" />
                    <span>
                        <SearchIcon className="h-5 w-5 text-gray-500" />
                    </span>
                </div>
                <div className='flex items-center gap-8'>
                    {/* <Barchart /> */}
                    <svg width="44" height="44" className='menu-icons hidden md:inline-block    ' viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.6667 22L18.3334 22" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M36.6667 11L7.33337 11" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M36.6667 33L29.3334 33" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div className='flex items-center justify-around gap-5'>
                        <button className=" hidden login-button md:inline-flex">
                            Login In
                        </button>
                        <button className="gradient-style-sm  md:gradient-style-md">
                            Sign Up
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header