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
import SelectForm from "./components/giki-stepper/select-form"
import SelectInterests from "./components/giki-stepper/select-interests"
import { StepperButton } from "./components/stepper/stepper-parts/stepper-button"


export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <LogoPage /> */}
    <RecoilRoot>
      {/* <ModalComp /> */}
      <LogoPage />
      {/* <ImageTraining /> */}
      {/* <StepperButton /> */}
    </RecoilRoot>

    {/* <WelcomeToGiki /> */}

    {/* <SelectForm /> */}
    {/* <SelectInterests /> */}

  </ChakraProvider>
)
