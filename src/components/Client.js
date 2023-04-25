import React from 'react'
import react27 from './Rectangle 27.png'
import start1 from './start1 (1).png'
import start2 from './start1 (2).png'

const Client = () => {
    return (
        <div className=' w-[100%] h-[700px] relative'>
            <img src={react27} alt="" className='absolute z-10 w-[300px] top-[100px] left-[300px] ' />
            <div className=' flex flex-col w-[50%] h-[400px] bg-[#e8ffed] z-1 absolute top-[200px] right-[300px] mb-6 '>

                <h1 className='absolute left-[250px] top-[60px] text-2xl font-semibold mt-6'>Client Say</h1>

                <p className='absolute left-[250px] top-[130px] text-sm text-gray-500 w-[50%]'>“Possibility to purchase at any time. Regardiess of the season. weather and time of day, any flowers can be
                    used to decorate a room or compose festive
                    compositions.”
                </p>

                <div className='flex absolute left-[400px] top-[200px] mt-2  '>
                    <img src={start1} alt="" className='w-8 h-8 ' />
                    <img src={start1} alt="" className='w-8 h-8 ' />
                    <img src={start1} alt="" className='w-8 h-8 '/>
                    <img src={start1} alt="" className='w-8 h-8 ' />
                    <img src={start2} alt="" className='w-8 h-8 ' />
                </div>

                <div className='absolute left-[250px] top-[270px] mt-2 '>
                    <p className='font-semibold'>Rahul Pal</p>
                    <span className='text-sm text-gray-500'>4 april 2023</span>
                </div>


            </div>

            <div className='absolute -bottom-5 left-[600px] mt-7'>
                <input className= ' rounded-md border-2  border-gray-600 w-[300px]' type="text" name="email" id="email" placeholder='Enter Email' />
                <label className='bg-black text-white px-2 py-2 rounded-md ml-1' htmlFor="email">Subscribe</label>
            </div>
        </div>
    )
}

export default Client
