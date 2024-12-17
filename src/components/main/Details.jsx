import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from '../../context/DataContext';
import { getProductById } from '../../services/api';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { IoIosStarOutline, IoMdHeartEmpty } from 'react-icons/io';

export default function Details() {
    const { probyid, setProById } = useContext(DATA)
    const { proid } = useParams()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [color, setColor] = useState(null)

    // console.log(probyid);

    useEffect(() => {
        if (proid) {
            getProductById(proid)
                .then(res => setProById(res))
        }
    }, [proid])


    return (
        <>
            <div className='m-[20px] flex flex-col md:flex-row items-center md:items-start justify-between'>
                <div className='flex flex-col justify-start md:flex-row w-[100%] md:w-[48%]'>
                    <Swiper
                        direction='vertical'
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper1 w-[7%] transition-all duration-1000 h-0 md:h-[200px] lg:h-[300px]"
                    >
                        {
                            probyid && probyid.images.map((image, i) => (
                                <SwiperSlide key={i} onClick={() => setColor(i)}>
                                    <img
                                        className={`w-[100%] object-cover mb-2 ${color === i ? 'border border-black' : 'border-none'}`}
                                        src={image}
                                        alt={probyid.name}
                                    />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 w-[100%] md:w-[85%] transition-all duration-1000 h-[400px] md:h-[400px] lg:h-[550px] xl:h-[700px]"
                    >
                        {
                            probyid && probyid.images.map((image, id) => (
                                <SwiperSlide key={id}>
                                    <img
                                        className="w-[100%] object-cover object-top"
                                        src={image}
                                        alt={probyid.name}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='flex flex-col items-start w-[100%] lg:w-[48%] my-[10px]'>
                    {probyid && (
                        <div className="flex flex-col bg-transparent gap-3 items-start justify-start">
                            <p className="#212529 text-start text-[24px] overflow-hidden text-ellipsis text-nowrap font-semibold">
                                {probyid.name}
                            </p>
                            <div className='flex items-center gap-2'>
                                <del className='text-black text-[16px]'>
                                    {(probyid.price).toFixed(2)} $
                                </del>
                                <p className='text-black text-[16px]'>
                                    {((probyid.price * (100 - probyid.discount)) / 100).toFixed(2)} $
                                </p>
                            </div>
                            <p className='text-red-600 text-[16px] capitalize'>
                                {probyid.discount}% off applied
                            </p>
                            <div className='flex gap-1 items-center'>
                                {Array(5).fill(null).map((_, id) => (
                                    <IoIosStarOutline key={id} className='text-[17px]' />
                                ))}
                                <a href='#review' className='font-semibold underline pl-[5px]'>Write a review</a>
                            </div>
                            <div className='flex flex-col items-start mt-[40px]'>
                                <p className='text-[16px] font-semibold'>Color</p>
                                <div>
                                    
                                </div>
                            </div>
                            <div className='flex flex-col mt-[40px]'>
                                <p className='text-[16px] font-semibold'>Size</p>
                                <div className='my-[40px] flex flex-wrap gap-2'>
                                    {
                                        probyid?.Size.map((size,i) => (
                                            <button
                                                key={i}
                                                className='w-[100px] border-2 border-[#eee] text-black bg-transparent text-ellipsis text-nowrap uppercase py-[5px]'>{size}
                                            </button>
                                        ))
                                    }
                                </div>
                                <div className='flex w-[100%] gap-2 items-center'>
                                    <button className='border-2 w-[87%] md:w-[68%] text-[13px] border-[#000] text-white bg-black text-ellipsis text-nowrap uppercase py-[15px]'>Add to bag</button>
                                    <button className='border-2 hidden md:block w-[30%] text-[13px] border-[#eee] text-black bg-transparent text-ellipsis text-nowrap uppercase py-[15px]'>Add to wishlist</button>
                                    <button className='border-2 flex md:hidden w-[10%] text-[20px] border-[#eee] text-black bg-transparent justify-center items-center text-ellipsis text-nowrap uppercase py-[15px]'><IoMdHeartEmpty /></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* {
                probyid && Object.values(probyid).map((item, i) => (
                    <div key={i} className={`flex flex-col h-full bg-white items-start justify-start`}>
                        <img
                            className="w-full object-cover mb-2"
                            src={item.images[0]}
                            alt={item.name}
                        />
                        <div className='flex flex-col items-start'>
                            <div>
                                <p className="text-black text-start overflow-hidden text-ellipsis text-nowrap text-[14px] px-[10px] pb-[10px] font-semibold">
                                    {item?.name}
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <del className='text-black text-[14px] pl-[10px] pb-[10px]'>{(item?.price).toFixed(2)} $</del>
                                <p className='text-black text-[14px] pl-[10px] pb-[10px]'>
                                    {((item?.price * (100 - item?.discount)) / 100).toFixed(2)} $
                                </p>
                            </div>
                            <p className='text-red-600 text-[14px] pl-[10px] pb-[10px] capitalize'>
                                {item?.discount}% off applied
                            </p>
                        </div>
                    </div>
                ))
            } */}
        </>
    )
}