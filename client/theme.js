import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      a: {
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})
