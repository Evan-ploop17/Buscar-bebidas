import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'


const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const [alerta, setAlerta] = useState('')
    const { categorias } = useCategorias()
    const { consultarBebida } = useBebidas()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebida(busqueda)
    }
  return (
    <Form
        onSubmit={handleSubmit}
    >
        {
            alerta && 
            <Alert
                variant='danger'
                className="text-center"
            >
                {alerta}
            </Alert>
        }
        <Row>
            <Col md={6} >
                <Form.Group>
                    <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
                    <Form.Control
                        id='nombre'
                        type='text'
                        placeholder='Ej: Tequila, Vodka, etc... '
                        name='nombre'
                        value={busqueda.nombre}
                        onChange={ e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    />
                </Form.Group>
            </Col>

            <Col md={6} >
            <Form.Group>
                    <Form.Label htmlFor="categoria">Categoría Bebida</Form.Label>
                    <Form.Select
                        id='categoria'
                        name='categoria'
                        value={busqueda.categoria}
                        onChange={ e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    >
                        <option >Selecciona Categoria</option>
                        {
                            categorias.map( categoria =>(
                                <option
                                    value={categoria.strCategory}
                                    key={categoria.strCategory}
                                >  
                                {categoria.strCategory}
                                </option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>

        <Row className='justify-content-end' >
            <Col md={4} >
                <Button
                    type='submit'
                    variant='danger'
                    className='text-uppercase w-100 mt-4'
                >
                    Buscar Bebidas
                </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario