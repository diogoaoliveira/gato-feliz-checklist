import { HStack, Box, Button, useDisclosure } from '@chakra-ui/react';
import { useFeature } from '../../hooks/feature';

import RequirementsTable from './RequirementsTable';
import FeatureList from './FeatureList';
import AddFeatureModal from './AddFeatureModal';

function AddFeatureList() {
   const { features } = useFeature();
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <>
         <HStack spacing="24px" mt="16">
            <Box minW="230" textAlign="center" position="relative" top="5">
               <Box bg="#AE66C9" borderRadius="24" position="relative">
                  <FeatureList data={features} />
               </Box>
               <Box position="absolute" bottom="auto" left="28%" mt="4">
                  <Button onClick={onOpen}>Adicionar</Button>
               </Box>
            </Box>
            <RequirementsTable data={features} />
         </HStack>
         <AddFeatureModal isOpen={isOpen} onClose={onClose} />
      </>
   );
}

export default AddFeatureList;
