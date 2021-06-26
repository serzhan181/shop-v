import { Circle, Tag as ChakraTag, TagLabel } from '@chakra-ui/react'
import Image from 'next/image'

export const Tag = ({ title, leftIcon, externalLink, ...restProps }) => {
  const shouldAddLink = externalLink ? { as: 'link', href: externalLink } : {}

  return (
    <ChakraTag
      variant='subtle'
      colorScheme='gray'
      {...restProps}
      {...shouldAddLink}
    >
      <Circle size='10' position='relative'>
        <Image src={leftIcon} layout='fill' alt={title + ' logo'} />
      </Circle>
      <TagLabel>{title}</TagLabel>
    </ChakraTag>
  )
}
