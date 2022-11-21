import React from 'react'
import { useSelector } from 'react-redux'
import FormAdd from '../components/FormAdd'
import Navbar from '../components/Navbar'

const AppScreen = () => {
    const name = useSelector(state => state.auth.displayname) 


    return (
        <div>
            <Navbar />
            <h6 className='right-align'>user: {name} </h6>
            <div className='container'>
            <h3 className='center'>Libro diario y libro Mayor</h3>
            <hr />
            <FormAdd />

            </div>

        </div>
    )
}

export default AppScreen