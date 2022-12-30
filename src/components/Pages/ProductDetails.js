import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetMyDataByIdQuery } from "../../services/fetchDataFromApi";
import { add } from "../../services/addRemoveSlice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { Rate } from 'antd';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const productId = useParams();
  const ids = productId.id;
  const { data, isFetching } = useGetMyDataByIdQuery(ids);
  useEffect(() => {
    console.log(data);
    console.log(isFetching);
  });

  return (
    <>
      <div className="container my-5">
        {isFetching ? (
          <h3 className="text-center my-5 py-5 border border-0">
            <Spin tip="Loading" />
          </h3>
        ) : (
          <div className="card mb-3 m-auto" style={{ width: "100%",alignItems:'center' }}>
            <div className="row g-0">
              <div className="col-md-4 col-lg-4 py-4 px-3 ">
                <img
                  src={data.images[0]}
                  className="img-fluid rounded-start" 
                  alt="..."
                  
                />
              </div>
              <div className="col-md-8 col-lg-8 py-4 pt-5">
                <div className="card-body align-middle">
                  <h3 className="card-title fs-4 fw-bold">{data.title}</h3>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text ">
                    <small className="text-muted fw-bold">
                      {`$ ${parseInt(
                        data.price -
                          (data.price / 100) * data.discountPercentage
                      )}`}{" "}
                      <del style={{ fontSize: "12px", color: "red" }}>
                        {data.price}
                      </del>
                    </small>
                  </p>
                  <div className="d-flex py-4">
                    <p style={{ fontSize: "14px","fontWeight":"bold" }}>
                      {data.discountPercentage}% Off
                    </p>
                    <h5 className="card-title ms-4 align-items-center "><Rate allowHalf  defaultValue={data.rating} /></h5>
                  </div>
                  <button className="btn btn-warning text-bold" onClick={() => dispatch(add(data))}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
