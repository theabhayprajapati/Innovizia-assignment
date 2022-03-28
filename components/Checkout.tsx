import { ArrowSmLeftIcon } from '@heroicons/react/outline'
import React from 'react'
import Card from './Card'

const Checkout = () => {
    // array of paymento options
    const paymentOptions = [
        'Debit/Credit Card', 'Net Banking', 'UPI'
    ]
    return (
        <div className="max-w-2xl   ">
            <div className="border-b-2 p-5 gap-5 hidden md:flex items-center">
                {/* unordered list with dots */}

                <ol type='A' className="flex gap-5 ">
                    <li className="cursor-pointer  payment-section flex items-center">
                        Payment Details
                    </li>
                    <div className="flex justify-around gap-2 items-center cursor-pointer text-[#FC4D6D] border-b-2 border-red-500 payment-section">
                        <span>
                            &#xB7;
                        </span>
                        <h1>
                            Payment Section
                        </h1>
                    </div>
                </ol>
            </div>
            <div className="p-5">
                <h1 className='uppercase heading'>
                    PAYMENT SECTION
                </h1>
                <h3 className='mt-5 sub-heading font-semibold'>
                    SAVED CARDS
                </h3>
                <div className='flex gap-10 md:flex-row flex-col place-items-center'>
                    <Card cardtype={'visa'} />
                    <Card cardtype={"mastercard"} />
                </div>
                <div className='mt-5'>
                    <h2 className='sub-heading camelcase'>
                        Other Payment Methods
                    </h2>
                    <div     className='flex gap-4 overflow-scroll md:overflow-hidden h-14 items-center w-full'>
                        {
                            paymentOptions.map((option, index) => {
                                return (
                                    <button key={index} className='min-w-[50%] cursor-pointer md:min-w-fit md:w-full max-w-full grid 
                                    focus:border-red-500
                                    place-items-center border-2 border-gray-400 items-center text-sm px-4 py-2  focus:scale-95  hover:scale-95 transform transition-all duration-300 hover:border-red-500 outline-none rounded-xl'>
                                        {option}
                                    </button>
                                )
                            })

                        }
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <label htmlFor="cardnumber" className="sub-heading">
                            Card Number
                        </label>
                        <div className="flex justify-between card-line items-center ">
                            <input type="tel" pattern="[0-9]" inputMode='numeric' maxLength={16} name="cardnumber" id="cardnumber" placeholder="0000 0000 0000 0000" className='outline-none w-full placeholder:text-[#505050] font-semibold' />
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

                        </div>
                    </div>
                    <div>
                        <label htmlFor="nameoncard" className="sub-heading">
                            Name on card
                        </label>
                        <input type="text" name="nameoncard" id="nameoncard" placeholder="Enter your name" className='outline-none w-full card-line placeholder:uppercase font-semibold ' />
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:gap-2 col-span-2 md:col-span-1 justify-between mt-2">
                        <div className='card-line'>
                            <label htmlFor="expirydate">
                                Expiry Date
                            </label>
                            <input type="text" maxLength={4} name="expirydate" id="expirydate" placeholder="MM/YY" className='outline-none w-full ' />
                        </div>
                        <div className='card-line'>
                            <label htmlFor="cvv">
                                CVV
                            </label>
                            <div className='flex'>
                                <input maxLength={3} type="password" name="cvv" id="cvv" placeholder="---" className='outline-none w-full ' />
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00001 1.33337C4.31811 1.33337 1.33334 4.31814 1.33334 8.00004C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z" stroke="#536DEE" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 5.33337V8.00004" stroke="#536DEE" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 10.6666H8.00667" stroke="#536DEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="p-5 md:mt-10 mt-5">
                <hr />
                <div className="my-5 flex md:justify-between justify-center items-center place-items-center" >
                    <h1 className='text-blue-700 hidden md:flex font-semibold place-items-center items-center cursor-pointer gap-3 make-payment-font'>
                        <ArrowSmLeftIcon className="h-5 w-5 text-blue-700" />
                        Back to Personal Details
                    </h1>
                    <button tabIndex={0} className='md:px-5 px-2 md:py-3 py-1 make-payment text-white rounded-full outline-none  font-bold text-[15px] md:text-[14px] h-[42px] w-[173px] hover:scale-95 transform transition-all duration-300'>
                        Make Payment
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Checkout