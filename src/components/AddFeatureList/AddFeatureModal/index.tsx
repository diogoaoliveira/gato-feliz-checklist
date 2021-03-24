import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Button,
   FormControl,
   FormLabel,
   Input,
   FormHelperText,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useFeature } from '../../../hooks/feature';

interface IAddFeatureModalProps {
   isOpen: boolean;
   onClose: () => void;
}

function AddFeatureModal({ isOpen, onClose }: IAddFeatureModalProps) {
   const { addFeature } = useFeature();
   const [isFormInvalid, setIsFormInvalid] = useState(false);
   const [inputValue, setInputValue] = useState('');

   const onSubmit = useCallback(() => {
      if (!inputValue) {
         setIsFormInvalid(!isFormInvalid);
      } else {
         addFeature(inputValue);
         setInputValue('');
         setIsFormInvalid(false);
         onClose();
      }
   }, [isFormInvalid, addFeature, inputValue, onClose]);
   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Adicionar peça</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <FormControl isInvalid={isFormInvalid} id="description">
                  <FormLabel>Peça</FormLabel>
                  <Input
                     type="text"
                     onChange={(e) => setInputValue(e.target.value)}
                     value={inputValue}
                  />
                  <FormHelperText>Ex. 4 Prateleiras M</FormHelperText>
               </FormControl>
            </ModalBody>

            <ModalFooter>
               <Button variant="ghost" mr={3} onClick={onClose}>
                  Fechar
               </Button>
               <Button color="#AE66C9" onClick={onSubmit}>
                  Salvar
               </Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
}

export default AddFeatureModal;
