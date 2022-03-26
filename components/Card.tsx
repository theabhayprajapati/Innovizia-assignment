import React from 'react'

const Card = () => {
    return (
        <div className="absolute -bottom-3 -left-3 -z-50 w-16 h-16 rounded-full bg-orange-500">
                <div className="border-2 shadow-lg   rounded-2xl relative h-[150px] w-[300px] cursor-pointer" >
            </div>
            <div className="absolute -top-3 -right-3 -z-50 w-16 h-16 rounded-full bg-orange-500">
            </div>
            <div className="h-full w-full flex items-center  rounded-2xl  backdrop-blur-xl  bg-white/75 ">
                <div className='flex items-center justify-around w-full p-5 gap-5'>
                    <h1>
                        3294820934812034
                    </h1>
                    <h1>
                        VISA
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default Card