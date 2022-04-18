import {useContext} from 'react'
import BebidasContext from '../context/BebidasProvider'

const useCategorias = () => {
  return useContext(BebidasContext)
}

export default useCategorias