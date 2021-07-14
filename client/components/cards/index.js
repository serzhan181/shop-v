import { Grid } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { products as productsState } from '@/stores/products.state'
import { Card } from './card'
import { CardsEmpty } from './cards-empty'

const filterProducts = (products, categoryName) => {
  if (categoryName === 'all') return products

  return products.filter((product) =>
    product.categories.some((c) => c.slug === categoryName)
  )
}

const Cards = observer(({ products }) => {
  const filteredProducts = filterProducts(
    products,
    productsState.selectedCategory
  )
  return (
    <>
      {filteredProducts.length ? (
        <Grid
          sx={{ placeItems: 'center' }}
          templateColumns='repeat(3, 1fr)'
          gap={6}
        >
          {filteredProducts.map((p) => (
            <Card
              key={p._id}
              id={p._id}
              image={p.image}
              price={p.price}
              title={p.title}
              vendor={p.vendor}
            />
          ))}
        </Grid>
      ) : (
        <CardsEmpty />
      )}
    </>
  )
})

export default Cards
