import { request } from '../request'

const productsAPI = {
  products: request(`*[_type == 'product'] {
    _createdAt,
  id,
  categories[]->{_id, "slug": slug.current, title},
  "image": defaultProductVariant.images[0].asset._ref,
  "price": defaultProductVariant.price,
  "slug": slug.current,
  title,
  vendor->{"logo": logo.asset._ref, "slug": slug.current, title}
}`),
}

export { productsAPI }
