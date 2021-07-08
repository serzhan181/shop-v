import { useState, useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import { Card } from './card'
import { observer } from 'mobx-react-lite'
import { products as productsState } from '@/stores/products.state'

const filteredProducts = (products, categoryName) => {
  if (categoryName === 'all') return products

  return products.filter((product) =>
    product.categories.some((c) => c.slug === categoryName)
  )
}

const Cards = observer(({ products }) => {
  return (
    <Grid
      sx={{ placeItems: 'center' }}
      templateColumns='repeat(3, 1fr)'
      gap={6}
    >
      {filteredProducts(products, productsState.selectedCategory).map((p) => (
        <Card
          key={p._id}
          title={p.title}
          image={p.image}
          price={p.price}
          vendor={p.vendor}
          id={p._id}
        />
      ))}
    </Grid>
  )
})

export default Cards
