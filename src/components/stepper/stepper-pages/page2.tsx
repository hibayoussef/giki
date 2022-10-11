import { Center, Grid, GridItem } from "@chakra-ui/react"
import AutoCompleteCountries from "../../autoCompleteCountries"
import AutoCompleteLanguages from "../../autoCompleteLanguages"

export const SecondStepperPage: React.FC<{}> = () => {
    return <>
        <Grid templateRows='repeat(3, 33vh)'>
            <GridItem>
                <Center><h2>Pick your language and country/region</h2></Center>
            </GridItem>

            <GridItem>
                <Center><AutoCompleteLanguages /></Center>
            </GridItem>

            <GridItem>
                <Center><AutoCompleteCountries/></Center>
            </GridItem>
        </Grid>
    </>
}