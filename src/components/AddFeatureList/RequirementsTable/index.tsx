import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { IFeature } from '../../../interfaces';
import { useFeature } from '../../../hooks/feature';

interface IRequirementsTableProps {
   data: Omit<IFeature, 'description'>[];
}

function RequirementsTable({ data }: IRequirementsTableProps) {
   const { toggleStatus } = useFeature();
   return (
      <Table variant="simple">
         <Thead>
            <Tr>
               <Th>Riscado</Th>
               <Th>Cortado</Th>
               <Th>Arredondado</Th>
               <Th>Furado</Th>
               <Th>Colado</Th>
               <Th>Parafusado</Th>
               <Th>PRONTO</Th>
            </Tr>
         </Thead>
         <Tbody>
            {data.map((feature) => (
               <Tr key={feature.id}>
                  <Td textAlign="center">
                     {feature.status.riscado ? (
                        <CheckCircleIcon
                           cursor="pointer"
                           as="button"
                           onClick={() => toggleStatus(feature.id, 'riscado')}
                           w={5}
                           h={5}
                           color="green.500"
                        />
                     ) : (
                        <WarningIcon
                           cursor="pointer"
                           as="button"
                           onClick={() => toggleStatus(feature.id, 'riscado')}
                           w={5}
                           h={5}
                           color="red.500"
                        />
                     )}
                  </Td>
                  <Td textAlign="center">
                     {feature.status.cortado ? (
                        <CheckCircleIcon
                           cursor="pointer"
                           as="button"
                           onClick={() => toggleStatus(feature.id, 'cortado')}
                           w={5}
                           h={5}
                           color="green.500"
                        />
                     ) : (
                        <WarningIcon
                           as="button"
                           cursor="pointer"
                           onClick={() => toggleStatus(feature.id, 'cortado')}
                           w={5}
                           h={5}
                           color="red.500"
                        />
                     )}
                  </Td>
                  <Td textAlign="center">
                     {feature.status.arredondado ? (
                        <CheckCircleIcon
                           as="button"
                           cursor="pointer"
                           onClick={() =>
                              toggleStatus(feature.id, 'arredondado')
                           }
                           w={5}
                           h={5}
                           color="green.500"
                        />
                     ) : (
                        <WarningIcon
                           as="button"
                           cursor="pointer"
                           onClick={() =>
                              toggleStatus(feature.id, 'arredondado')
                           }
                           w={5}
                           h={5}
                           color="red.500"
                        />
                     )}
                  </Td>
                  <Td textAlign="center">
                     {feature.status.furado ? (
                        <CheckCircleIcon
                           as="button"
                           cursor="pointer"
                           onClick={() => toggleStatus(feature.id, 'furado')}
                           w={5}
                           h={5}
                           color="green.500"
                        />
                     ) : (
                        <WarningIcon
                           as="button"
                           cursor="pointer"
                           onClick={() => toggleStatus(feature.id, 'furado')}
                           w={5}
                           h={5}
                           color="red.500"
                        />
                     )}
                  </Td>
                  <Td textAlign="center">
                     {feature.status.colado ? (
                        <CheckCircleIcon
                           as="button"
                           cursor="pointer"
                           onClick={() => toggleStatus(feature.id, 'colado')}
                           w={5}
                           h={5}
                           color="green.500"
                        />
                     ) : (
                        <WarningIcon
                           as="button"
                           cursor="pointer"
                           onClick={() => toggleStatus(feature.id, 'colado')}
                           w={5}
                           h={5}
                           color="red.500"
                        />
                     )}
                  </Td>
                  <Td textAlign="center">
                     {feature.status.parafusado ? (
                        <CheckCircleIcon
                           as="button"
                           cursor="pointer"
                           onClick={() =>
                              toggleStatus(feature.id, 'parafusado')
                           }
                           w={5}
                           h={5}
                           color="green.500"
                        />
                     ) : (
                        <WarningIcon
                           as="button"
                           cursor="pointer"
                           onClick={() =>
                              toggleStatus(feature.id, 'parafusado')
                           }
                           w={5}
                           h={5}
                           color="red.500"
                        />
                     )}
                  </Td>
                  <Td textAlign="center">
                     {feature.status.pronto ? (
                        <CheckCircleIcon
                           as="button"
                           cursor="pointer"
                           onClick={() => toggleStatus(feature.id, 'pronto')}
                           w={5}
                           h={5}
                           color="green.500"
                        />
                     ) : (
                        <WarningIcon
                           as="button"
                           cursor="pointer"
                           onClick={() => toggleStatus(feature.id, 'pronto')}
                           w={5}
                           h={5}
                           color="red.500"
                        />
                     )}
                  </Td>
               </Tr>
            ))}
         </Tbody>
      </Table>
   );
}

export default RequirementsTable;
