import { ErrorMessage } from 'formik'
import React from 'react'

const ErrorMessageComponents = ({name}) => {
  return (
    <div style={{color:'red',fontSize:'12px',paddingTop:'5px'}}>
        <ErrorMessage name={name} />
    </div>
  )
}

export default ErrorMessageComponents