import React from 'react'

const ImageSlider = () => {
    return (
        <div className='mt-5 ml-5 mr-5 flex justify-between items-center gap-10 border-2  p-1'>
            <div className='flex-initial w-34 border-2 border-black'>
                <div className='mt-5 p-5'>
                    <img className='w-14 h-14' src='https://images.pexels.com/photos/1457611/pexels-photo-1457611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>
                <div className='mt-5 p-5'>
                    <img className='w-14 h-14' src='https://images.pexels.com/photos/1457611/pexels-photo-1457611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>
                <div className='mt-5 p-5'>
                    <img className='w-14 h-14' src='https://images.pexels.com/photos/1457611/pexels-photo-1457611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>
                <div className='mt-5 p-5'>
                    <img className='w-14 h-14' src='https://images.pexels.com/photos/1457611/pexels-photo-1457611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>
                <div className='mt-5 p-5'>
                    <img className='w-14 h-14' src='https://images.pexels.com/photos/1457611/pexels-photo-1457611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>
            </div>
            <div>Left</div>
            <div>
                <img className='w-78 h-72' src='https://images.pexels.com/photos/1457611/pexels-photo-1457611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </div>
            <div>Right</div>
        </div>
    )
}

export default ImageSlider