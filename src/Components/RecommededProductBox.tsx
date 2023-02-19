import React from 'react'
import './mainComponent.css'
import product from '../assets/Images/product.png'
import IProducts from '../types/product';

type Props = {
  recommendedProduct : IProducts[]
};

const RecommededProductBox = (props: Props) => {

  const {recommendedProduct} = props
  return (
    <>
     {recommendedProduct.map((data) => {
            return (
              <div className="col-md-3 col-6">
    <div className='recommendedItemContainer'>
        <img width={200} height= {200} src={data.image}/>
        <div className='productTitle'>{data.title}</div>
        <div className='priceValue'>${data.price}</div>
    </div>
    </div>
            )
          })}
    </>
  )
}

export default RecommededProductBox