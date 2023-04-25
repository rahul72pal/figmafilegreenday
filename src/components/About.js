import React from 'react'
import about1 from './about1.jpg'
import about2 from './about2.jpg'
import about3 from './about3.jpg'
const About = () => {
    return (
        <div className='mt-7 overflow-x-hidden '>
            <h1 className='text-center text-4xl font-semibold'>About Us</h1>
            <p className='text-gray-400 text-center mt-5  '>This site is for those who admire the beauty and harmony of nature</p>

            <div className=' w-[100%] flex m-5 mt-16 p-6 gap-5 '>
                <div className= ' flex flex-col justify-center items-center w-[30%] border text-center'>
                    <img src={about1} alt="" className='w-[120px] m-11' />
                    <p className='text-center text-lg font-semibold mb-6'>Large Assortment</p>
                    <p className='text-sm text-gray-500 m-4'>We offer our customers more than 15,000 items of natural and artificial flowers, trees and
                        many accessories for floristry</p>
                </div>

                <div className= ' flex flex-col justify-center items-center w-[30%] border text-center'>
                    <img src={about2} alt=""className='w-[120px] m-11' />
                    <p className='text-center text-lg font-semibold mb-6'>Free & Fast Shipping</p>
                    <p className='text-sm text-gray-500 m-4'>We will ship your goods after receipt of funds to the current account, choose the most convenient from the offered delivery options.</p>
                </div>

                <div  className= ' flex flex-col justify-center items-center w-[30%] border text-center'>
                    <img src={about3} alt="" className='w-[120px] m-11'/>
                    <p className='text-center text-lg font-semibold mb-6'>24/7 Support</p>
                    <p className='text-sm text-gray-500 m-4'>We work seven days a week and a lunch break. we will be glad to welcome you as our Buyer and thank you for your trust in us!</p>
                </div>
            </div>

        </div>
    )
}

export default About
