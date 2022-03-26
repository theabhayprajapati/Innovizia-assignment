import { ArrowSmLeftIcon } from '@heroicons/react/outline'
import React from 'react'
import Card from './Card'

const Checkout = () => {
    // array of paymento options
    const paymentOptions = [
        'Debit/Credit Card', 'Net Banking', 'UPI'
    ]
    return (
        <div className="max-w-2xl">
            <div className="border-b-2 p-5 gap-5 flex items-center">
                {/* unordered list with dots */}

                <ol type='A' className="flex gap-5">
                    <li className="cursor-pointer flex items-center">
                        Payment Details
                    </li>
                    <li className="flex items-center cursor-pointer text-red-500 border-b-2 border-red-500">
                        Payment Section
                    </li>
                </ol>
            </div>
            <div className="p-5">
                <h1 className='uppercase heading'>
                    PAYMENT SECTION
                </h1>
                <h3 className='mt-5 sub-heading'>
                    SAVED CARDS
                </h3>
                <div className='flex gap-10 md:flex-row flex-col place-items-center'>
                    <Card />
                    <Card />
                </div>
                <div className='mt-5'>
                    <h2 className='sub-heading'>
                        Other Payment Methods
                    </h2>
                    <div className='flex gap-4 overflow-scroll md:overflow-hidden h-14 items-center w-full'>
                        {
                            paymentOptions.map((option, index) => {
                                return (
                                    <h1 key={index} className='min-w-[50%] cursor-pointer md:min-w-fit md:w-full max-w-full  border-2 border-gray-400 items-center text-sm px-4 py-2 rounded-xl'>
                                        {option}
                                    </h1>
                                )
                            })

                        }
                    </div>
                </div>
                <div>

                    <div className='flex justify-between gap-5'>
                        <div>
                            <label htmlFor="cardnumber" className="sub-heading">
                                Card Number
                            </label>
                            <input type="tel" pattern="[0-9]" inputMode='numeric' maxLength={16} name="cardnumber" id="cardnumber" placeholder="Card Number" className='outline-none w-full border-b-2 border-orange-500' />
                        </div>
                        <div>
                            <label htmlFor="nameoncard" className="sub-heading">
                                Name on card
                            </label>
                            <input type="text" name="nameoncard" id="nameoncard" placeholder="Name on Card" className='outline-none w-full border-b-2 border-orange-500 ' />
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between md:w-[50%] mt-2">
                        <div>
                            <label htmlFor="expirydate">
                                Expiry Date
                            </label>
                            <input type="text" maxLength={4} name="expirydate" id="expirydate" placeholder="MM/YY" className='outline-none w-full border-b-2 border-orange-500' />
                        </div>
                        <div className=''>
                            <label htmlFor="cvv">
                                CVV
                            </label>
                            <input maxLength={3} type="password" name="cvv" id="cvv" placeholder="CVV" className='outline-none w-full border-b-2 border-orange-500' />
                        </div>
                    </div>


                </div>

            </div>
            <div className="p-5 md:mt-10 mt-5">
                <hr />
                <div className="my-5 flex md:justify-between justify-center items-center place-items-center" >
                    <h1 className='text-blue-700 hidden md:flex font-semibold place-items-center items-center cursor-pointer gap-3'>
                        <ArrowSmLeftIcon className="h-5 w-5 text-blue-700" />
                        Back to Personal Details
                    </h1>
                    <button className='md:px-5 px-2 md:py-3 py-1 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full font-bold'>
                        Make Payment
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Checkout