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
import ModalComp from "./components/Modal"
import { RecoilRoot } from "recoil"

export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <LogoPage /> */}
    <RecoilRoot>
      {/* <ModalComp /> */}
      <LogoPage />
    </RecoilRoot>

  </ChakraProvider>
)
