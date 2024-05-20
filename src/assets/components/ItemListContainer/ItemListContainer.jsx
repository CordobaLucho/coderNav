import React from 'react'
import { ChakraProvider, Container, Heading } from '@chakra-ui/react'

const ItemListContainer = ({title}) => {
  return (
    <Container>
      <Heading> {title} </Heading>
    </Container>
  )
}

export default ItemListContainer
