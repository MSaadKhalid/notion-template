import React from 'react'

function index(props) {
  return (
    <div className='flex border-l border-r border-b py-14 border-neutral-200 justify-center items-center flex-col space-y-5 2xl:container 2xl:mx-auto'>
            <h2 className='font-bold text-neutral-90 text-[64px] leading-[64px] tracking-[-0.03em] '>
            {props.heading}
            </h2>
            <p className='text-neutral-500 text-xl tracking-[-0.015em] leading-5'>
            {props.paragraph}
            </p>
    </div>
  )
}

export default index