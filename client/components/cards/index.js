import { Card } from './card'
import { MotionGrid } from '@/components/common'
import { PRODUCTS } from '../../mockData/products'

const parentVariant = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const childrenVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
}

export default function Cards() {
  return (
    <MotionGrid
      bg='tomato'
      sx={{ placeItems: 'center' }}
      templateColumns='repeat(3, 1fr)'
      gap={6}
      variants={parentVariant}
      initial='hidden'
      animate='show'
    >
      {PRODUCTS.result.map((p) => (
        <Card
          key={p._id}
          variants={childrenVariants}
          title={p.title}
          image={p.image}
          price={p.price}
          vendor={p.vendor}
        />
      ))}
    </MotionGrid>
  )
}
