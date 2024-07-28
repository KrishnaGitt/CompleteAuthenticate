import React from 'react'
import './HomeProduct.css'
const HomeProduct = () => {
  const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <>
          <div className='heading-text'>Restaurants with online food delivery in Hyderabad</div>
          <div className='product-filter'>
            <div className='filter-div'>
              <div className=''></div>
              <div className=''>Filter</div>
            </div>
            <div className='filter-div'>
              <div className=''></div>
              <div className=''>Sort By</div>
            </div>
            <div className='filter-div'>
              <div className=''></div>
              <div className=''>Fast Delivery</div>
            </div>
            <div className='filter-div'>
              <div className=''></div>
              <div className=''>New on Swiggy</div>
            </div>
            <div className='filter-div'>
              <div className=''></div>
              <div className=''>Rating 4.0+</div>
            </div>
            <div className='filter-div'>
              <div className=''></div>
              <div className=''>Pure Veg</div>
            </div>
            <div className='filter-div'>
              <div className=''></div>
              <div className=''>Offer</div>
            </div>
          </div>
         <div className='main-product-list'>
      {arr.map((e)=>(
        <div className='product-div'>
        <div className='product-img'></div>
        <div className='info-sec'>
          <h4 className='rest-name'>Resturant name</h4>
          <div className='rating-time'>
            <div className='rating'>12</div>
            <div className='deliver-time'>Time to deliver</div>
          </div>
          <p className='item-sold'>Item we sold</p>
          <p className='item-sold'>Address</p>
        </div>
    </div>
      ))}
     
    </div>
    </>
   
  )
}

export default HomeProduct