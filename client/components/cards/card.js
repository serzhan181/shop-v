import { chakra, Box, Flex, Link, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { getSanityImg } from '@/helpers/getSanityImg'
import { MotionFlex, MotionButton } from '@/components/common'
import { Tag } from '@/components/common'
import { cart } from '@/stores/cart.state'
import { CardItemQtty } from './card-item-qtty'

export const Card = ({ title, image, price, vendor, id }) => {
  return (
    <MotionFlex
      justify='space-between'
      direction='column'
      maxW='xs'
      w='xs'
      bg={useColorModeValue('white', 'gray.800')}
      shadow='lg'
      rounded='lg'
      boxShadow='xl'
      whileHover={{ y: -10, outline: '1px solid #c9c9c9' }}
      cursor='pointer'
    >
      <chakra.div>
        <Box px={4} py={2}>
          <chakra.h1
            color={useColorModeValue('gray.800', 'white')}
            fontWeight='bold'
            fontSize='3xl'
            textTransform='uppercase'
            isTruncated
          >
            {title}
          </chakra.h1>
          <Tag
            mt={1}
            fontSize='sm'
            color={useColorModeValue('gray.600', 'gray.400')}
            title={vendor.title}
            leftIcon={getSanityImg(vendor.logo)}
          />
        </Box>
      </chakra.div>

      <chakra.div h={48} w='full' mt={2} position='relative'>
        <Image
          src={getSanityImg(image)}
          layout='fill'
          objectFit='contain'
          alt='NIKE AIR'
        />
      </chakra.div>

      <Flex
        alignItems='center'
        justifyContent='space-between'
        px={4}
        py={2}
        roundedBottom='lg'
      >
        <chakra.h1 fontWeight='bold' fontSize='lg'>
          ${price}
        </chakra.h1>

        {/* ? Appears when there's some product of this type in cart */}
        <CardItemQtty id={id} />

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
          onClick={() => cart.addItem({ title, image, price, vendor, id })}
        >
          Add to 🛒
        </MotionButton>
      </Flex>
    </MotionFlex>
  )
}
