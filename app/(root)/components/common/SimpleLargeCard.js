import Image from 'next/image';
import React from 'react'
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";

export default function SimpleLargeCard({ products }) {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={12}
            grabCursor={true}
            modules={[Navigation,Autoplay,Scrollbar]}
            // navigation={true}
            // pagination={true}
            scrollbar={{
                draggable: true,
                dragSize: 25,
            }}
            breakpoints={{
                767: {
                    slidesPerView: "auto",
                    spaceBetween: 12
                }
            }}

            className="mt-[30px] gap-3 max-md:mt-[16px] max-md:!px-[13px] max-md:!pb-[20px]"
        >
            {products.map((product) => {
                return (
                    <SwiperSlide className="border-[#CACACA] border-[1px] border-solid !flex gap-[13px] rounded-[20px] max-md:mt-8 flex-col h-fit !w-[calc(25%-9px)] aspect-[234/369] overflow-hidden max-md:!w-full max-md:min-w-[234px] max-md:max-w-[310px]">
                        <div className='w-full aspect-[234/287]'>
                            <Image
                                src={product.img}
                                width={100}
                                height={100}
                                unoptimized
                                loading="lazy"
                                className="max-md:mx-auto !h-fit w-full"
                            />
                        </div>
                        <div className='h-[82px] flex justify-center items-center text-[calc(12px+.8vw)] md:text-[17px]'>
                            {product.title}
                        </div>
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    )
}