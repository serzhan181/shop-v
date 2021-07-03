import { Grid } from '@chakra-ui/react'
import { Card } from './card'
import { PRODUCTS } from '../../mockData/products'

export default function Cards() {
  return (
    <Grid
      sx={{ placeItems: 'center' }}
      templateColumns='repeat(3, 1fr)'
      gap={6}
    >
      {PRODUCTS.result.map((p) => (
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
}
