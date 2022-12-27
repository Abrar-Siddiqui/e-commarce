import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../services/addRemoveSlice'
import { useSelector } from 'react-redux'



const Cart = () => {
  const data = useSelector(state=>state.counter)
  console.log(data);
  const dispatch = useDispatch()
  const dataHandler = (dataid) =>{
    dispatch(remove(dataid))
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-12  m-auto'>
          <h3 className='my-5 fw-bold text-center'>Shopping Cart</h3>
          <table className="table text-center border border-1 rounded-4 shadow-lg">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Images</th>
                  <th scope="col">Title</th>
                  <th scope="col">Item Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((items,i)=>(
                    <tr key={i}>
                      <th scope="row">{i}</th>
                      <td><img src={items.images[0]} alt={items.id} width="80px" height="80px" /></td>
                      <td>{`$ ${items.price}`}</td>
                      <td>{items.id}</td>
                      <td></td>
                      <td><button className='btn btn-danger py-0' onClick={()=>dataHandler(items.id)}>X</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className='col-lg-4 col-10  m-auto'>
          <h3 className='my-5 fw-bold text-center'>Shopping Cart Price</h3>
          <table className="table text-center border border-1 rounded-4 shadow-lg ">
              <thead>
                <tr>
                  <th scope="col">Item Quantity</th>
                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart