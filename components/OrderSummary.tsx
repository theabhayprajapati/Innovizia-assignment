import { AcademicCapIcon, BadgeCheckIcon } from '@heroicons/react/outline'
import React from 'react'

const OrderSummary = () => {
    return (
        <div className="bg-white shadow-lg md:shadow-none md:bg-[#f5f4f4] p-5  rounded-3xl border md:border-none h-full mt-2 md:rounded-none">
            <h1 className='font-bold uppercase cursor-pointer text-[#665F60]'>
                Order Summary <span className='camelcase text-xs text-[#4863ED] font-medium'>
                    Edit
                </span>
            </h1>
            <div className=' flex  p-5  border-y border-[#665F60] border-collapse my-2'>
                <img src="/profile.svg" alt="" />
                <div className='w-full flex flex-col justify-between p-3'>
                    <div className='font-bold text-[#665f60] gap-2 flex items-center'>
                        <h1 className='cursor-pointer text-[#665F60] text-[20px]'>
                            Ella.H
                        </h1>
                        {/* verfied logo and counry logo */}
                        <img src="/verfied.svg" alt="" />
                        {/* enland flag logo */}
                        <img src="/flag.svg" alt="flag" />
                    </div>
                    <p className='text-sm flex gap-2'>
                        <AcademicCapIcon className='h-5 cursor-pointer w-5 text-gray-500' />

                        <span className='text-gray-500 font-semibold'>
                            English
                        </span>
                    </p>

                </div>
            </div>

            <div className='p-5 flex flex-col border-b border-[#665f60] border-opacity-60'>
                <h1 className='date-time-text'>
                    Date and Time
                </h1>
                <h1 className='date-text mt-1'>
                    Friday, February 4, 18:30
                </h1>
                <h1 className='time-text'>
                    GMT+5:30
                </h1>
            </div>
            {/* //todo: APPLY COUPON CODE */}
            <div className='p-5 flex  border-b items-center border-[#665f60] border-opacity-60 gap-1'>
                <label htmlFor='coupon' className='w-[40%] apply-coupons'>
                    Apply Coupon
                </label>
                <input type="text" name="coupon" id="coupon" maxLength={12} className="bg-white uppercase outline-none w-[60%] rounded-lg border p-1" />
            </div>
            {/* make html showing services and taxes */}
            <div className='p-5 flex flex-col border-b border-[#665f60] border-opacity-60 '>
                <table>
                    <thead>
                        <tr>
                            <th className='text-sm text-left  font-semibold text-[#665f60]'>
                                Service Details
                            </th>
                            <th className='text-sm text-right font-semibold text-[#665f60]'>
                                Price Per Hour
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-sm text-opacity-60 text-[#665f60]'>
                                1 Hour lesson
                            </td>
                            <td className='text-sm font-semibold text-right text-[#665f60]'>
                                ₹3000.80
                            </td>
                        </tr>
                        <tr className=''>
                            <td className='text-sm  text-opacity-60  text-[#665f60]'>
                                Transcation fees
                            </td>
                            <td className='text-sm font-semibold  text-right text-[#665f60]'>
                                ₹22.51
                            </td>
                        </tr>
                        <tr className=''>
                            <td className='text-sm text-opacity-60   text-[#665f60]'>
                                Lession Cancellatoin
                            </td>
                            <td className='text-sm font-semibold text-right text-green-500'>
                                Free
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className='px-5 flex flex-col border-b mt-5'>
                <table>
                    <thead>
                        <tr>
                            <th className='text-sm text-left  text-[#665f60]'>
                                Total
                            </th>
                            <th className='text-sm text-right text-[#665f60]'>
                                ₹3496.31
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className='px-5 flex justify-end  items-center gap-4 border-b mt-5'>
                <span>
                    {/* tick box */}
                    {/* update color of checkbox */}

                    <input type="checkbox" name="checkbox" id="" className="bg-white checked:accent-green-500 border-red-400 peer-checked:text-green-500 outline-none" />
                </span>
                <p className="tnc">
                    I want a <span className="text-green-500">
                        free lesson</span> or a refund if the tutor doesn’t meet my needs
                </p>
            </div>
        </div>
    )
}

export default OrderSummary