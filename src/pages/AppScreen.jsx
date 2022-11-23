import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Element from '../components/Element'
import FormAdd from '../components/FormAdd'
import Navbar from '../components/Navbar'
import './styles_pages.css'

const AppScreen = () => {
    const name = useSelector(state => state.auth.displayname)

    const data = useSelector((state) => state.nomina.data)
    useEffect(() => {
        setData(data)
    }, [data])
    const [data2, setData] = useState(data)

    return (
        <div className='container '>
            <Navbar />
            <h6 className='right-align'>user: {name} </h6>
            <div className='container'>
                <h3 className='center'>Libro Diario</h3>
                <hr />
                <FormAdd />
            </div>
            <h3 className='center'>Libro Mayor</h3>
            <div className='overFlow'>
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
                            data2.map((elemento) => {
                                return <Element data={elemento} key={elemento.id} />
                            })
                        }
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default AppScreen