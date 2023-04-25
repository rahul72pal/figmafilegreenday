import React from 'react'
import img1 from './Rectangle 19.jpg'
import img2 from './Rectangle 20.jpg'
import img3 from './Rectangle 21.jpg'

const Products = () => {
    return (
        <div className='mt-9 bg-[#e8ffed] pt-5 pb-9 overflow-x-hidden'>
            <h1 className='text-center text-4xl font-semibold'>Product Categories</h1>

            <div className='flex gap-4 justify-evenly mt-8 pt-6 bg-[#e8ffed]'>

                <div className='w-[20%] gap-4'><img src={img1} alt="" className='bg-[#e8ffed]' />
                <p className='text-center text-sm font-semibold mt-6'>Natural Plants</p></div>
                <div className='w-[20%] gap-4 mt-[100px]'><img src={img2} alt="" />
                <p className='text-center text-sm font-semibold mt-6'>Artificial Plants</p>
                <p className='text-[14px] mt-10 text-gray-500 '>Plastic and textile products are a practical solutions for everyone who loves. flowering plants, but does not have the time or
 desire to care for them</p></div>
                <div className='w-[20%] gap-4'><img src={img3} alt="" />
                <p className='text-center text-sm font-semibold mt-6'>Accessories</p></div>

            </div>

            
        </div>
    )
}

export default Products
