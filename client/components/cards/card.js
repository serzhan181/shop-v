import React from 'react'
import { chakra, Box, Flex, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { getSanityImg } from '@/helpers/getSanityImg'
import { MotionBox, MotionButton } from '@/components/common'

const IMAGE = getSanityImg(
  'image-3650330510b34f2e86ccba4b816680a2fe6061f1-1920x1280-jpg'
)

export function Card({ variants }) {
  return (
    <MotionBox
      maxW='xs'
      bg={useColorModeValue('white', 'gray.800')}
      shadow='lg'
      rounded='lg'
      boxShadow='xl'
      whileHover={{ y: -10, outline: '1px solid #c9c9c9' }}
      variants={variants}
    >
      <Box px={4} py={2}>
        <chakra.h1
          color={useColorModeValue('gray.800', 'white')}
          fontWeight='bold'
          fontSize='3xl'
          textTransform='uppercase'
        >
          Hamburger
        </chakra.h1>
        <chakra.p
          mt={1}
          fontSize='sm'
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          quidem sequi illum facere recusandae voluptatibus
        </chakra.p>
      </Box>

      <Box h={48} w='full' fit='cover' mt={2} position='relative'>
        <Image src={IMAGE} layout='fill' alt='NIKE AIR' />
      </Box>

      <Flex
        alignItems='center'
        justifyContent='space-between'
        px={4}
        py={2}
        roundedBottom='lg'
      >
        <chakra.h1 fontWeight='bold' fontSize='lg'>
          $129
        </chakra.h1>
        <MotionButton
          px={2}
          py={1}
          bg='gray.200'
          fontSize='xs'
          color='gray.900'
          fontWeight='bold'
          rounded='md'
          whileHover={{
            backgroundColor: '#CBD5E0',
          }}
          whileTap={{ scale: 1.05 }}
        >
          Add to 🛒
        </MotionButton>
      </Flex>
    </MotionBox>
  )
}
