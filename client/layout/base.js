// ? This is layouts for several kinds of pages. (e.g Layout for auth pages, for base pages where header and footer are equal)

import { Box } from '@chakra-ui/react'
import Header from '@/components/header'

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <Box mt='14'>{children}</Box>
    </>
  )
}
