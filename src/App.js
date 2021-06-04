import Card from './components/Card';
import './App.css';
import { ChakraProvider, Center } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Center h="100vh" w="100%" bgGradient="linear(to-r,gray.300,yellow.300,pink.200)">
        <Card />
      </Center>
    </ChakraProvider>
  )
}

export default App;
