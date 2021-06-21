import BaseLayout from '@/layout/base'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Button, Box, Flex, Center } from '@chakra-ui/react'
import PromoteCard from '@/components/promote-card'

import { products } from '../mockData/promotedProducts.js'

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
          <Container maxW='container.lg'>
            <PromoteCard />
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
