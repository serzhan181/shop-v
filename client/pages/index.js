import BaseLayout from '@/layout/base'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Box, Flex, HStack } from '@chakra-ui/react'
import PromoteCard from '@/components/promote-card'
import Slider from 'react-slick'

import { products } from '../mockData/promotedProducts.js'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
}

export default function Home({ pros, imageSource }) {
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
      </BaseLayout>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      pros: products.result[0],
      imageSource: products.result[0].promoted.previewImg.asset._ref,
    },
  }
}
