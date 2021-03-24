import { Center, Text } from '@chakra-ui/react';

function Header() {
   return (
      <Center mt="8">
         <Text
            bgGradient="linear(to-l, #7928CA, #9E3AE4)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
         >
            Check List
         </Text>
      </Center>
   );
}

export default Header;
