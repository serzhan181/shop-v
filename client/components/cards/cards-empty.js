import { Center, Flex, Text, Icon } from '@chakra-ui/react'
import { Frown } from 'react-feather'

export const CardsEmpty = () => {
  return (
    <Center h={'28'} w='100%'>
      <Flex direction='column'>
        <Center>
          <Icon as={Frown} w={'10'} h={'10'} />
        </Center>
        <Text fontSize='large'>No products with that cateogry.</Text>
      </Flex>
    </Center>
  )
}
