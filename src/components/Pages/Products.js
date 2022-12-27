import React from 'react'
import { useGetMyDataQuery } from '../../services/fetchDataFromApi'
import { Spin } from 'antd';
import Product from './Product';

const Products = () => {
    const {data , isFetching } = useGetMyDataQuery()
    console.log(data);
  return (
    <>
    <div className='container'>
    <h3>All Products</h3>
    <div className='row'>
    {
        isFetching?( <h3 className='text-center'><Spin tip="Loading"/></h3>):(data.products.map((items,i)=>(
          <div className='col-lg-4' key={i}>
                <Product items={items} />
          </div>
        )))
    }
    </div>
    </div>
    </>
  )
}

export default Products