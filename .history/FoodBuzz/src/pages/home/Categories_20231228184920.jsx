import React from 'react'
const categoryItems = [
   {id: 1, title: "Main Dish", des: "(86 dishes)", image: "/categories/img1.png"},
   {id: 2, title: "Break Fast", des: "(12 dishes)", image: "/categories/img2.png"},
   {id: 3, title: "Dessert", des: "(48 dishes)", image: "/categories/img3.png"},
   {id: 4, title: "Browse All", des: "(255 dishes)", image: "/categories/img4.png"},
]
function Categories() {
  return (
    <div className='section-container py-16'>
        <div className='text-center'>
        <p className='subtitle'>Customer Favourite</p>
        <h2 className='title'>Popular Categories</h2>
        </div>
        
        {/* category cards */}
        <div>
            {
                categoryItems.map((item, i)=>(
                    <div key={i}>
                        <div>
                            <img src={item.image} alt=""/>
                        </div>

                    </div>

                ))
            }
        </div>
    </div>
  )
}

export default Categories