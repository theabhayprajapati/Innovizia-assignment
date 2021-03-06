import React from 'react'

interface cardProps {
    // enum type
    cardtype: "visa" | "mastercard"
}
const Card = ({ cardtype }: cardProps) => {
    return (
        <div className="shadow-lg rounded-2xl relative" >
            <div className="absolute circle-style -bottom-1 -left-1 -z-50 w-16 h-16 rounded-full bg-orange-500">
            </div>
            <div className="absolute circle-style -top-1 -right-1 -z-50 w-16 h-16 rounded-full bg-orange-500">
            </div>
            <div className="h-full w-full card-style flex items-center  rounded-2xl  backdrop-blur-xl  bg-white/75 ">
                <div className='flex items-center justify-around w-full p-5 gap-5'>
                    <h1>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1005 17.3808C14.4194 17.3808 17.9206 13.8796 17.9206 9.56069C17.9206 5.24177 14.4194 1.7406 10.1005 1.7406C5.78157 1.7406 2.2804 5.24177 2.2804 9.56069C2.2804 13.8796 5.78157 17.3808 10.1005 17.3808ZM10.1005 18.6841C15.1392 18.6841 19.2239 14.5994 19.2239 9.56069C19.2239 4.52196 15.1392 0.437256 10.1005 0.437256C5.06175 0.437256 0.977051 4.52196 0.977051 9.56069C0.977051 14.5994 5.06175 18.6841 10.1005 18.6841Z" fill="#F92249" />
                        </svg>

                    </h1>
                    <h1 className='card-number  '>
                        XXXX 4023
                    </h1>
                    <h1>{
                        cardtype === "visa" ?
                            <svg width="31" height="10" viewBox="0 0 31 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_191)">
                                    <path d="M20.2925 0.664673C18.1662 0.664673 16.266 1.69777 16.266 3.60651C16.266 5.79546 19.6361 5.94665 19.6361 7.04632C19.6361 7.50935 19.07 7.92383 18.1031 7.92383C16.731 7.92383 15.7055 7.34467 15.7055 7.34467L15.2667 9.2708C15.2667 9.2708 16.4481 9.76001 18.0166 9.76001C20.3413 9.76001 22.1707 8.67618 22.1707 6.73481C22.1707 4.42178 18.7865 4.27509 18.7865 3.25441C18.7865 2.89169 19.2512 2.49427 20.2153 2.49427C21.3031 2.49427 22.1906 2.91547 22.1906 2.91547L22.62 1.05516C22.62 1.05516 21.6544 0.664673 20.2925 0.664673V0.664673ZM0.838444 0.805074L0.786957 1.08588C0.786957 1.08588 1.68152 1.23934 2.48722 1.54547C3.52462 1.89651 3.59852 2.10086 3.77323 2.73558L5.6771 9.61522H8.22925L12.161 0.805074H9.61473L7.08833 6.79514L6.05741 1.71768C5.96286 1.13657 5.48396 0.805074 4.89777 0.805074H0.838444V0.805074ZM13.1849 0.805074L11.1874 9.61522H13.6155L15.606 0.805074H13.1849V0.805074ZM26.7273 0.805074C26.1418 0.805074 25.8316 1.09891 25.6039 1.61238L22.0466 9.61522H24.5929L25.0856 8.28141H28.1877L28.4872 9.61522H30.734L28.7739 0.805074H26.7273V0.805074ZM27.0585 3.1853L27.8132 6.4913H25.7912L27.0585 3.1853V3.1853Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_191">
                                        <rect width="29.977" height="9.12343" fill="white" transform="translate(0.771973 0.650635)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            :
                            <svg className='card-svg' width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_193)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.80127 1.59493H14.7314V12.8502H8.80127V1.59493Z" fill="#FF8136" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17794 7.22253C9.17794 9.50596 10.1902 11.5397 11.7665 12.8502C10.6136 13.8088 9.15911 14.3806 7.57812 14.3806C3.83536 14.3806 0.801392 11.1758 0.801392 7.22253C0.801392 3.26928 3.83536 0.0644512 7.57812 0.0644512C9.15911 0.0644512 10.6136 0.636303 11.7665 1.59489C10.1902 2.90561 9.17794 4.93911 9.17794 7.22253Z" fill="#EB001B" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5199 2.78703V3.0648H22.4512L22.3723 2.87372L22.2932 3.0648H22.2245V2.78703H22.2729V2.9966L22.3471 2.81586H22.3974L22.4715 2.997V2.78703H22.5199ZM22.0848 2.78703V3.01748H22.173V3.0644H21.9489V3.01748H22.0368V2.78703H22.0848ZM22.7315 7.22265C22.7315 3.2694 19.6974 0.0645704 15.9548 0.0645704C14.3738 0.0645704 12.9191 0.636421 11.7664 1.59501C13.3427 2.90553 14.355 4.93923 14.355 7.22265C14.355 9.50588 13.3427 11.5396 11.7664 12.8503C12.9191 13.8089 14.3738 14.3807 15.9548 14.3807C19.6974 14.3807 22.7315 11.1759 22.7315 7.22265Z" fill="#EDE51F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_193">
                                        <rect width="22.1569" height="14.3368" fill="white" transform="matrix(1 0 0 -1 0.80127 14.3807)" />
                                    </clipPath>
                                </defs>
                            </svg>
                    }
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default Card