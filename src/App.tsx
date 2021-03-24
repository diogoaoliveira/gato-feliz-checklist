import { Box } from '@chakra-ui/react';
import AddFeatureList from './components/AddFeatureList';
import Header from './components/Header';

function App() {
   return (
      <Box>
         <Box maxW="1080px" mx="auto">
            <Header />
            <AddFeatureList />
         </Box>
      </Box>
   );
}

export default App;
