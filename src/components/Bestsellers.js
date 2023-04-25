import React from 'react'
import react1 from './Rectangle 23.png'
import react2 from './Rectangle 24.png'
import react3 from './Rectangle 25.png'
import react4 from './Rectangle 26.png'

const Bestsellers = () => {
    return (
        <div>
<br />
            <h1 className='text-3xl ml-8 mt-5'>Bestsellers</h1>
            <br />
            <div className='flex justify-evenly ml-5 mr-5 mt-6 pt-7 pb-4 mb-3 gap-5'>

                <div>
                    <img src={react1} alt="" width={250} height={100} />
                    <p className='text-center font-semibold mt-5 mb-4'>Artifical Plants</p>
                    <p className='text-sm text-gray-600 opacity-80 text-center'>20$</p>
                </div>

                <div>
                    <img src={react2} alt="" width={250} height={100} />
                    <p className='text-center font-semibold mt-5 mb-4'>Artifical Plants</p>
                    <p className='text-sm text-gray-600 opacity-80 text-center'>20$</p>
                </div>

                <div>
                    <img src={react3} alt="" width={250} height={100} />
                    <p className='text-center font-semibold mt-5 mb-4'>Artifical Plants</p>
                    <p className='text-sm text-gray-600 opacity-80 text-center'>20$</p>
                </div>

                <div>
                    <img src={react4} alt="" width={250} height={100} />
                    <p className='text-center font-semibold mt-5 mb-4'>Artifical Plants</p>
                    <p className='text-sm text-gray-600 opacity-80 text-center'>20$</p>
                </div>

            </div>
        </div>
    )
}

export default Bestsellers
