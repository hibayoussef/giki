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
import WelcomeToGiki from "./components/giki-stepper/welcome-to-giki"

export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <LogoPage /> */}
    {/* <RecoilRoot> */}
    {/* <ModalComp /> */}
    {/* <LogoPage />
    </RecoilRoot> */}

    <WelcomeToGiki />
    
  </ChakraProvider>
)
