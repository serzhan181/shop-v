import imageUrlBuilder from '@sanity/image-url'

export const getSanityImg = (
  image,
  projectId = 'gk4lw0hn',
  dataset = 'production'
) => {
  const builder = imageUrlBuilder({ projectId, dataset })

  return builder.image(image).url()
}
