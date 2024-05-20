import './App.css'

import { ChakraProvider } from '@chakra-ui/react'
import ButonMicroDesafio from './assets/components/ButonMicroDesafio'
import NavBar from './assets/components/NavBar/NavBar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import Button from 'react-bootstrap/Button';

function App() {
 
  return (
   
    <div>

      <NavBar />
      <ItemListContainer 
        title={'Aca va el carrucel de items'}
      />

    </div>



  )
}

export default App
