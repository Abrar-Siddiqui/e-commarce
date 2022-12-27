import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const myData = createApi({
    reducerPath:"myData",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints:(builder)=>({
        getMyData:builder.query({
            query:()=>({
                url:"products",
                method:"GET"
            }),
        }),
        getMyDataById:builder.query({
            query:(id)=>({
                url:`products/${id}`,
                method:"GET"
            })
        })
    })

})
export const {useGetMyDataQuery, useGetMyDataByIdQuery } = myData