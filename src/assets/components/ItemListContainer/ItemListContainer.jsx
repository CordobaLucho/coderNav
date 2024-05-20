import React from 'react'
import Container from 'react-bootstrap/Container';
import { ChakraProvider,  Heading } from '@chakra-ui/react'


const ItemListContainer = ({title}) => {
  return (
    <Container>
      <Heading> {title} </Heading>
    </Container>
  )
}

export default ItemListContainer
