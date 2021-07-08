import BaseLayout from '@/layout/base'
import Head from 'next/head'
import { Container, Box, Flex } from '@chakra-ui/react'
import PromoteCard from '@/components/promote-card'
import Categories from '@/components/categories'
import Slider from 'react-slick'
import Cards from '@/components/cards'

import { PRODUCTS } from '../mockData/products'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Shop-v</title>
      </Head>
      <BaseLayout>
        <Flex
          height={{ base: 'calc(100vh - 56px)', md: '45vh' }}
          backgroundImage='/background.jpg'
          backgroundPosition='center'
          backgroundSize='cover'
          alignItems='center'
        >
          <Container maxW='container.xl'>
            <Slider {...sliderSettings}>
              <PromoteCard />
              <PromoteCard />
              <PromoteCard />
              <PromoteCard />
              <PromoteCard />
            </Slider>
          </Container>
        </Flex>

        <Container maxW='container.xl'>
          <Box mt='12'>
            <Categories />
          </Box>

          <Box mt='20'>
            <Cards products={products} />
          </Box>
        </Container>
      </BaseLayout>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      products: PRODUCTS.result,
    },
  }
}
