import React from 'react'
import { Result } from 'antd';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <>
        <div>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link type="primary" className='btn btn-primary' to="/">Back Home</Link>}/>
        </div>
    </>
  )
}

export default NotFoundPage