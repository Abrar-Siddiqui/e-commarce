import React from 'react'
import { Link } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'
import {FaHome} from 'react-icons/fa'
import { Badge } from 'antd';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const count = useSelector((state)=>state.counter)
    console.log(count);
    
  return (
   <>
    <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary px-4 rounded mt-2 text-center">
        <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">E-Com<span className='text-danger'>marce</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><FaHome className='fs-3 text-warning'/></Link>
                </li>
                <li className="nav-item dropdown ">
                <Link className="nav-link dropdown-toggle text-white" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item " to="/">Shooz</Link></li>
                    <li><Link className="dropdown-item" to="/">T-Shirt</Link></li>
                    <li><Link className="dropdown-item" to="/">Jackets</Link></li>
                </ul>
                </li>
            </ul>
            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className='nav-link'><Link className='text-white ' to="signup">Signup</Link></li>
                <li className="nav-item">
                
                <Link className="nav-link active" aria-current="page" to="cart"><Badge count={count.length}><BsCart4 className='fs-2 text-white'/></Badge></Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
   </div>
  
   </>
  )
}

export default Navbar