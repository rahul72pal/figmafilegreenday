import React from 'react'
import img1 from './unsplash_miziNqvJx5M.png'
import vect1 from './Vector.png'
import vect2 from './Vector (1).png'
import vect3 from './Vector (2).png'

const Home = () => {
    return (
        <div className='relative h-[600px] w-[100vw] overflow-x-hidden '>
            <div className='absolute w-[65%] h-[100%] bg-[#e8ffed] left-0 -top-[9px] '>


                <div className='absolute w-[186px] h-[56px] left-[120px] top-6 greenday '>greenday</div>

                <div className='absolute w-[20%] h-[30px] left-[500px] top-9 navicon '>
                    <ul className='flex gap-x-12 top-3 '>
                        <li className=' text-gray-500 hover:text-black hover:border-b-4 border-black '>Home</li>
                        <li className=' text-gray-500 hover:text-black  hover:border-b-4 border-black  '>Product</li>
                        <li className=' text-gray-500 hover:text-black  hover:border-b-4 border-black  '>Contact</li>
                    </ul>
                </div>

                <div className='absolute w-[20%] h-[30px] -right-[400px] top-9  '>
                    <ul className='flex gap-x-9 top-5'>
                        <li className='w-5  '> <img src={vect1} alt="" /></li>
                        <li className='w-5'> <img src={vect2} alt="" /></li>
                        <li className='w-5'> <img src={vect3} alt="" /></li>
                        <div className=' bg-gray-400 w-[2px] h-[20px]'></div>
                    </ul>
                </div>

                <div>
                    <li> <img src={img1} alt="" className='w-[50%] h-[70%] absolute top-[20%] left-[800px]' /> </li>
                </div>

                <div className='w-[35%] h-[30%] absolute top-[30%] left-[20%]'>
                    <p className='homepara '>We offer you a wide range of artifical and natural flowers</p>

                    <h1 className='heading'>Plant for your interior</h1>

                    <div className='flex  gap-x-4 mt-3 mb-5'>
                        <button
                        className='bg-black text-white px-3 py-2'
                        >Shop Now</button>
                        <button className='px-2'>Watch Videos</button>
                    </div>

                    <div className='flex gap-x-3'>

                        <di className="flex flex-col">
                            <p className='text-3xl font-semibold'>160+</p>
                            <p className='text-sm text-gray-500'>Plants species</p>
                        </di>
                        <div></div>
                        <div>
                            <p className='text-3xl font-semibold'>100+</p>
                            <p className='text-sm text-gray-500'>Clients</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
