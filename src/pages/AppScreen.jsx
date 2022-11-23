import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Balance from '../components/Balance'
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
            <table className="highlight">
                <thead>
                    <tr>
                        <th className='width-th'>Fecha</th>
                        <th className='width-cu'>Cuenta</th>
                        <th className='width-th'>Debe</th>
                        <th className='width-th'>Haber</th>
                        <th className='width-th'>Editar</th>
                    </tr>
                </thead>
            </table>
            <div className='overFlow'>
                <table className="highlight">
                    <tbody >
                        {
                            data2.map((elemento) => {
                                return <Element data={elemento} key={elemento.id} />
                            })
                        }
                    </tbody>
                </table>
            </div>
            <hr />
            <div className='row'>
                <table>
                    <tfoot>
                        <Balance data={data} key={data.id} />
                    </tfoot>
                </table>
            </div>

        </div>
    )
}

export default AppScreen