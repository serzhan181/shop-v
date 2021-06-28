import { Circle, Tag as ChakraTag, TagLabel } from '@chakra-ui/react'
import Image from 'next/image'

export const Tag = ({ title, leftIcon, externalLink, ...restProps }) => {
  return (
    <ChakraTag variant='subtle' colorScheme='gray' {...restProps}>
      <TagLabel title={title}>
        <Image
          src={leftIcon}
          width={30}
          height={20}
          alt={title + ' logo'}
          objectFit='contain'
        />
      </TagLabel>
    </ChakraTag>
  )
}
