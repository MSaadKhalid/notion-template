import React from 'react'

export default function index(props) {
  return (
         <div className="group flex flex-col space-y-4">
                <div className=" cursor-pointer relative flex justify-start items-start">
                <div className="relative flex items-stretch justify-center ">
                <img className="w-full h-full  opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/slider-react-again-gradient2.png" alt="boy" />
                  <img className="absolute z-10 p-6 " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/reactui-again-slider-image-1.png" alt="boy" />
                  </div>
                </div>
                <div className="px-6 w-full   flex justify-center space-y-3 items-start flex-col ">
                <h3 className="text-2xl tracking-[-0.015em] font-medium leading-5 text-center text-white">{props.heading}</h3>
                <p className="text-base h-20 tracking-[-0.015em] font-light leading-normal text-neutral-400">{props.paragraph}</p>
                </div>
              </div>
  )
}
