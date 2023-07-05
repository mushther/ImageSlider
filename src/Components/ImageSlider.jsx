import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageSlider = () => {
    const [data] = useState([
        {
            id: 1,
            url: "https://images.pexels.com/photos/1457611/pexels-photo-1457611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            url: "https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 3,
            url: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 4,
            url: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 5,
            url: "https://images.pexels.com/photos/694587/pexels-photo-694587.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ])
    const [viewImage, setViewImage] = useState({ id: data[0].id, url: data[0].url })
    const handleView = (el) => {
        setViewImage({ ...viewImage, "id": el.id, "url": el.url })
    }
    const handleLeft = () => {
        setViewImage({ ...viewImage, "id": viewImage.id - 1, "url": data[viewImage.id - 2].url })
    }
    const handleRight = () => {
        setViewImage({ ...viewImage, "id": viewImage.id + 1, "url": data[viewImage.id].url })
    }
    //console.log(viewImage);
    return (
        <div className='mt-1 ml-5 mr-5 flex justify-between items-center gap-10  p-1'>
            <div className='flex-initial w-34 border'>
                {data.map((el) => (
                    <div className={viewImage.id == el.id ? 'mt-5 p-5 bg-red-400 ' : 'mt-5 p-5 '} key={el.id} onClick={() => { handleView(el) }} >
                        <img className={viewImage.id == el.id ? 'w-20 h-20 rounded-lg ...' : 'w-14 h-14'} src={el.url} />
                    </div>
                ))}
            </div>
            <div className='mr-20 flex justify-between items-center gap-5 w-3/4'>
                <button className={viewImage.id == 1 ? "text-white font-bold bg-orange-200 p-2 rounded-l-lg ... h-96 text-5xl" : "text-white font-bold bg-orange-400 p-2 rounded-l-lg ... h-96 text-5xl"} disabled={viewImage.id == 1} onClick={() => { handleLeft() }}><FaAngleLeft /></button>
                <img className='w-3/5 h-3/5 rounded-3xl border-2 border-sky-500' src={viewImage.url} />
                <button className={viewImage.id == data.length ? "text-white font-bold bg-orange-200 p-2 rounded-r-lg ... h-96 text-5xl" : "text-white font-bold bg-orange-400 p-2 rounded-r-lg ... h-96 text-5xl"} disabled={viewImage.id == data.length} onClick={() => { handleRight() }}><FaAngleRight /></button>
            </div>
        </div>
    )
}

export default ImageSlider