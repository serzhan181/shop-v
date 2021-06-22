import { Box, Flex, HStack, Center, Link } from '@chakra-ui/react'
import { mockCategories } from '../mockData/categories'
import { getSanityImg } from '@/helpers/getSanityImg'
import Slider from 'react-slick'
import Image from 'next/image'

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 1,
}

const IMAGE = getSanityImg(
  'image-20c30e9de240810cd3b154fb7083d7b6f62e6c0a-640x480-svg'
)

export default function Categories() {
  return (
    <Flex flexDir='column'>
      <Slider {...sliderSettings}>
        {mockCategories.result.map((f) => (
          <Field
            key={f.title}
            image={getSanityImg(f.icon.asset._ref)}
            title={f.title}
            slug={f.slug.current}
          />
        ))}
      </Slider>
    </Flex>
  )
}

const Field = ({ image, title, slug }) => {
  return (
    <Box
      h='150px'
      w='120px'
      p='3'
      boxShadow='xl'
      bg='gray.100'
      borderRadius='md'
    >
      <Flex h='100%' flexDir='column'>
        <Flex h='70%'>
          <Center w='100%'>
            <Image src={image} alt='category' width={70} height={70} />
          </Center>
        </Flex>
        <Flex h='30%'>
          <Center w='100%'>
            <Link
              _hover={{ textDecor: 'underline' }}
              href={`/category/${slug}`}
              isExternal
              fontSize='xs'
              fontWeight='bold'
              textAlign='center'
            >
              {title}
            </Link>
          </Center>
        </Flex>
      </Flex>
    </Box>
  )
}
