import React from 'react'
import { MenuIcon, SearchIcon } from '@heroicons/react/outline'
const Header = () => {

    return (
        <div className="rounded-lg border-green-500 max-w-6xl mx-auto flex h-14 items-center justify-between px-2 md:px-4 md:p-0">
            <MenuIcon className="h-10 w-10 text-gray-800  md:hidden" />
            <div className="flex items-center cursor-pointer h-10">
                <img src="/vercel.svg" alt="" className="h-10 w-10" />
                <div className='flex flex-col mx-2'>
                    <h1 className="font-bold uppercase">
                        Stilly Tree
                    </h1>
                    <p className="text-xs font-extralight">
                        upstill with a personal touch
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div className="h-10 border rounded-full cursor-pointer hidden md:flex items-center px-3">
                    <input type="search" name="search" id="search" className='cursor-text outline-none w-60' placeholder="Search A Skill" />
                    <span>
                        <SearchIcon className="h-5 w-5 text-gray-500" />
                    </span>
                </div>
                <div className='flex items-center gap-8'>
                    <MenuIcon className="md:h-8 md:w-8 h-5 w-5 text-gray-800  hidden md:inline-flex cursor-pointer" />
                    <div className='flex items-center justify-around gap-5'>
                        <button className=" hidden md:inline-flex">
                            <span className="font-bold text-black">
                                Login In
                            </span>
                        </button>
                        <button>
                            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-300 md:py-2 font-medium text-white px-2 py-1 md:px-5 rounded-full">
                                Sign Up
                            </span>

                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header