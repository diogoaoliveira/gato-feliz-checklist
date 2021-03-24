import {
   Table,
   Tbody,
   Tr,
   Td,
   Editable,
   EditableInput,
   EditablePreview,
} from '@chakra-ui/react';
import { useFeature } from '../../../hooks/feature';
import { IFeature } from '../../../interfaces';

interface IFeatureListProps {
   data: IFeature[];
}

function FeatureList({ data }: IFeatureListProps) {
   const { editFeature } = useFeature();
   return (
      <Table variant="simple">
         <Tbody>
            {data.map((feature) => (
               <Tr key={feature.id}>
                  <Td
                     border="none"
                     textAlign="center"
                     color="white"
                     fontWeight="bold"
                  >
                     <Editable
                        onSubmit={(newDescription) =>
                           editFeature({
                              id: feature.id,
                              description: newDescription,
                           })
                        }
                        defaultValue={feature.description}
                     >
                        <EditablePreview />
                        <EditableInput />
                     </Editable>
                  </Td>
               </Tr>
            ))}
         </Tbody>
      </Table>
   );
}

export default FeatureList;
