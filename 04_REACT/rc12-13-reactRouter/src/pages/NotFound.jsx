import React from 'react'
import { Button, Container } from 'react-bootstrap'
import notFound from '../img/notFound.jpeg'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <Container className='text-center'>
        <img src={notFound} alt="" width="500px" />
        <Button variant='danger' className='mt-3' onClick={() => navigate('/')}>Go Home</Button>
    </Container>
  )
}

export default NotFound