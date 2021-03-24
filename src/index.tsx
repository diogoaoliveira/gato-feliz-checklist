import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FeatureProvider } from './hooks/feature';

ReactDOM.render(
   <React.StrictMode>
      <FeatureProvider>
         <ChakraProvider>
            <App />
         </ChakraProvider>
      </FeatureProvider>
   </React.StrictMode>,
   document.getElementById('root')
);

reportWebVitals();
