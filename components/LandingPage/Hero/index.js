import React from 'react'

function index() {
  return (
    <div className='flex flex-row bg-neutral-50 justify-start items-center 2xl:container 2xl:mx-auto border-b border-l  border-neutral-200'>
        <img className='ml-[75px] h-full' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/react-ui-again-hero4.png " alt="hero-img" />
        <div className='absolute px-16 flex flex-col justify-start items-start'>
                <h1 className='gradientText leading-[96px] text-8xl tracking-[-0.06em] font-bold'>Notion</h1>
               <div>
                   <h1 className='text-8xl leading-[96px] tracking-[-0.06em] text-neutral-900 font-bold'>
                   Templates <br/> Marketplace
                   </h1>
               </div>
               <p className='mt-6 w-[446px] text-xl leading-[30px] text-neutral-500 tracking-[-0.03em]'>
               Ship your web products faster and never miss a deadline again with drop-in ready React UI Components at your disposal.
               </p>
               <div className='flex justify-start items-center space-x-5 mt-8'>
                <button type='button' className='py-5 px-12 tracking-[-0.03em] text-base font-medium leading-5 bg-neutral-900 border border-neutral-900 text-neutral-50 hover:bg-neutral-800'>
                View Components
                </button>
                <button type='button' className='py-5 px-12 tracking-[-0.03em] text-base font-medium border border-neutral-900 leading-5 text-neutral-900 bg-transparent hover:bg-neutral-100'>
                See Pricing
                </button>
               </div>
        </div>
    </div>
  )
}

export default index