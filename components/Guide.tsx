import React from 'react'
import Image from 'next/image'
const Guide = () => {
  return (
    <section className="">
        <div className=" padding-container max-container
         w-full pb-24">
            <Image 
              src="/camp.svg"
              alt="camp" width={50} height={50}
            />
            <p className="uppercase regular-18 -mt-1 mb text-green-50">
              We are here for you
            </p>
            <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
              <h2 className="bold-40 lg:bold-60 xl:max-w-[390px]">Gudie You to Easy Path</h2>
              <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in 
                the wilderness through the valley and reach the top of the mountaink</p>
            </div>
        </div>
          <div className="flexCenter max-container relative w-full">
              <Image 
                src="/boat.png"
                alt="boat"
                width={1440}
                height={580}
                className="w-full object-cover object-center rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl 2xl:rounded-5xl"
              />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3
        rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />

          <div className="flex flex-col justify-between">
            <div className="flex justify-between items-center w-full mb--1">
              <p className="regular-16 text-gray-20 mb-0">Destination</p>
              <p className="bold-16 text-green-50 ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12">50 min</p>
            </div>
            <p className="bold-20 mt-2">Thoothukudi</p>
            <div className="mt-6">
              <p className="regular-16 text-gray-20">Start Track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Kovilpatti</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
