import { Flex, Box, Button, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { getSanityImg } from '@/helpers/getSanityImg'

const IMAGE = getSanityImg(
  'image-3650330510b34f2e86ccba4b816680a2fe6061f1-1920x1280-jpg'
)

export default function PromoteCard() {
  return (
    <Flex
      justifyContent='space-between'
      w='lg'
      h='52'
      minW='lg'
      minH='52'
      bg='white'
      borderRadius='md'
      p='5'
    >
      <Flex w='50%' alignItems='center' flexDir='column' mr='3'>
        <Flex
          flexDir='column'
          justifyContent='space-between'
          w='100%'
          h='40'
          position='relative'
        >
          <Box h='70%' overflow='hidden'>
            <Heading size='lg'>
              Really long and meaningful text Really long and meaningful text
            </Heading>
          </Box>

          <Box position='absolute' bottom='0' left='0'>
            <Button colorScheme='blue' mt={7}>
              Order this
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Box bg='purple.500' position='relative' w='50%'>
        <Image src={IMAGE} alt='product' objectFit='cover' layout='fill' />
      </Box>
    </Flex>
  )
}
