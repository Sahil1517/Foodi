import React from 'react'

function Banner() {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>

      <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
        {/* text */}
        <div className='md:w-1/2 space-y-7 px-4'>
          <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights of Delectable <span className='text-green'>Food</span></h2>
          <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery ana Passionate Craftsmanship</p>
          <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
        </div>
        {/* image */}
        <div className='md:w-1/2'>
          <img src="/banner.png" alt=""/>
          <div>
            <div>
              <img src = "/FoodBuzz/public/b-food1.png"/>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Banner