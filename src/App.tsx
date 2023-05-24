import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import DataFetchingComponent from './components/DataFetchingComponent';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <DataFetchingComponent />
      </div>
    </ChakraProvider>
  );
}

export default App;
