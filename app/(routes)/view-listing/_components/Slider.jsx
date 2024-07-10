import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'


function Slider({ imageList }) {
    return (
        <div>
            {imageList ?
                <Carousel>
                    <CarouselContent>
                        {imageList.map((item, index) => (
                            <CarouselItem key={index}><Image src={item.url} height={300} width={800} className='rounded-xl object-cover h-[360px] w-full' alt='image' /></CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                : <div className='w-full h-[200px] rounded-lg animate-pulse bg-slate-100'></div>}
        </div>
    )
}

export default Slider