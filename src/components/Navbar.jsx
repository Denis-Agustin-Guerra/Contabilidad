import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth'

const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <nav>
            <div className="nav-wrapper grey">
                <span href="#" className="brand-logo ">Sistema de contabilidad UTN-frm</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><button onClick={handleLogout} className='waves-effect waves-light btn red' >Logout</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar