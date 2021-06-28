import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'
import { AuthProvider } from '@/context/auth-provider'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}
