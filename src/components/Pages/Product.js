import React from 'react'
import '../../App.css'
import {BsCart4} from 'react-icons/bs'
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../../services/addRemoveSlice';

const Product = ({items}) => {
    const dispatch = useDispatch()
    const {images, id, title, price, rating  ,discountPercentage  } = items
   
  return (
    <>
       
              <div className="card my-3 border border-0 shadow-lg" >
                    <img src={images[0]} className="card-img-top cart_image"  alt={id}/>
                    <div className="card-body">
                        <h5 className="card-title">{`Name : ${title}`}</h5>
                        <div className='d-flex justify-content-between text-align-center'>
                            <h5 className="card-title">{`$ ${parseInt(price-price/100*discountPercentage)}`} <del>{`$${price}`}</del><br/>{`${discountPercentage}% Off`}</h5>
                            <h5 className="card-title"><Rate allowHalf  defaultValue={rating} /></h5>
                        </div>

                        <div className='justify-content-between d-flex'>
                        <Link to="/" className="btn btn-warning " onClick={()=>dispatch(add(items))}>Add To <BsCart4 className='fs-3'/></Link>
                        <Link to={`productDetails/${id}`} className="btn btn-primary"> Read More </Link>
                        </div>
                    </div>
                </div> 
    </>
  )
}

export default Product