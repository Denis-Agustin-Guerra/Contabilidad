import { useState } from "react"

const AsientosContables = () => {
    const [suma, setsuma] = useState(0)

  return (
    <div>
        <h1>Esto es el componente</h1>
        <label htmlFor="">
            Numero 1: <input type="text" />
        
        </label>
        <label htmlFor="">
            Numero 2: <input type="text" />
        
        </label>
        <span>Suma:</span>
    </div>
  )
}

export default AsientosContables
