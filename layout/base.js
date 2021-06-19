// ? This is layouts for several kinds of pages. (e.g Layout for auth pages, for base pages where header and footer are equal)

import { Box } from '@chakra-ui/react'

export default function BaseLayout({ children }) {
  return (
    <>
      <Box>Header</Box>
      <Box>{children}</Box>
    </>
  )
}
