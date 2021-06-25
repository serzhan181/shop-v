import { Flex, Center, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { mockCategories } from '../mockData/categories'
import { getSanityImg } from '@/helpers/getSanityImg'
import Slider from 'react-slick'
import Image from 'next/image'
import { MotionBox } from '@/components/common/motion-box'

const sliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 3,
  arrows: false,
  dots: true,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
  ],
}

// TODO make so that selectedField will have an id instead of title.

export default function Categories() {
  const [selectedField, setSelectedField] = useState(
    mockCategories.result[0].title
  )
  return (
    <Flex flexDir='column'>
      <Slider {...sliderSettings}>
        {mockCategories.result.map((f) => (
          <Field
            key={f.title}
            image={getSanityImg(f.icon.asset._ref)}
            title={f.title}
            slug={f.slug.current}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
        ))}
      </Slider>
    </Flex>
  )
}

const Field = ({ image, title, slug, selectedField, setSelectedField }) => {
  return (
    <MotionBox
      h='150px'
      w='120px'
      p='3'
      boxShadow={selectedField === title ? '2xl' : 'xl'}
      bg={selectedField === title ? 'whiteAlpha.200' : 'gray.100'}
      borderRadius='md'
      _hover={{ backgroundColor: 'whiteAlpha.200' }}
      whileHover={{ scale: 1.1 }}
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
              cursor='pointer'
              onClick={() => setSelectedField(title)}
              fontSize='xs'
              fontWeight='bold'
              textAlign='center'
            >
              {title}
            </Link>
          </Center>
        </Flex>
      </Flex>
    </MotionBox>
  )
}
