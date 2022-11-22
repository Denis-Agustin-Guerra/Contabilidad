import React from 'react'
import { useSelector } from 'react-redux'
import Element from '../components/Element'
import FormAdd from '../components/FormAdd'
import Navbar from '../components/Navbar'

const AppScreen = () => {
    const name = useSelector(state => state.auth.displayname)

    const data = useSelector((state) => state.nomina.data)



    return (
        <div className='container'>
            <Navbar />
            <h6 className='right-align'>user: {name} </h6>
            <div className='container'>
                <h3 className='center'>Libro diario y libro Mayor</h3>
                <hr />
                <FormAdd />
            </div>
            <table className="highlight">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Debe o Haber</th>
                        <th>Cuenta</th>
                        <th>Monto</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((elemento) => {
                            return <Element data={elemento} key={elemento.id} />
                        })
                    }
                </tbody>


            </table>
        </div>
    )
}

export default AppScreen