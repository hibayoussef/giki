import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import LogoPage from "./pages/logoPage"

export const App = () => (
  <ChakraProvider theme={theme}>
    <LogoPage />
  </ChakraProvider>
)
