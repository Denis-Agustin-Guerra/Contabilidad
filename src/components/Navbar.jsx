import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth'
import { limpirar } from '../actions/nomina'
import './styles_component.css'

const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(limpirar())
        dispatch(startLogout())
    }

    return (
        <nav>
            <div className="nav-wrapper grey nav-padi">
                <h6 href="#" className="brand-logo ">Sistema de contabilidad UTN-frm</h6>
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