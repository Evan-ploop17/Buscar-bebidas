import {createContext, useEffect, useState, useMemo} from 'react'
import axios from 'axios'
const CategoriasContext = createContext()

const CategoriasProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])

    // const obtenerCategorias = useMemo( async () => {
    //     try {
    //         const urlCategorias = 'https://thecocktaildb.com/api/json/v1/1/list.php?c=list'
    //         const {data} = await axios(urlCategorias)
    //         setCategorias(data.drinks)
    //     } catch (error) {
            
    //     }
    // }, [categorias])

    const obtenerCategorias = async () => {
        try {
            const urlCategorias = 'https://thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const {data} = await axios(urlCategorias)
            setCategorias(data.drinks)
        } catch (error) {
            console.log('error: ', error)
        }
    }

    useEffect(() => {
        obtenerCategorias()
    })

  return (
    <CategoriasContext.Provider
        value={{
            categorias
        }}
    >
        {children}
    </CategoriasContext.Provider>
  )
}

export {
    CategoriasProvider
}
export default CategoriasContext