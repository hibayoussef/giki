import { Grid, GridItem } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'


export const ThirdStepperPage: React.FC<{}> = () => {
    return <>
        <Grid templateRows='repeat(2, 30vh)'>
            <GridItem>
                <Center>
                    Tell us what you’re  interested in
                </Center>
            </GridItem>

            <GridItem >
                <Center>

                    <GridItem>

                        <Image
                            // borderRadius='full'
                            // boxSize='150px'
                            src='images/interest-1.png'
                            alt='Dan'
                            width={['24%', '24%', '24%', '20%', '20%']}
                            height='auto'
                        />
                    </GridItem>

                    <GridItem>
                        <Image
                            // borderRadius='full'
                            // boxSize='150px'
                            src='images/interest-2.png'
                            alt='Dan'
                            width={['24%', '24%', '24%', '20%', '20%']}
                            height='auto'
                        />
                    </GridItem>

                    <GridItem>
                        <Image
                            // borderRadius='full'
                            // boxSize='150px'
                            src='images/interest-3.png'
                            alt='Dan'
                            width={['24%', '24%', '24%', '20%', '20%']}
                            height='auto'
                        />
                    </GridItem>

                    <GridItem>
                        <Image
                            // borderRadius='full'
                            // boxSize='150px'
                            src='images/interest-4.png'
                            alt='Dan'
                            width={['24%', '24%', '24%', '20%', '20%']}
                            height='auto'
                        />
                    </GridItem>
                </Center>

            </GridItem>

            <GridItem>
                <Center>
                <GridItem>
                    <Image
                        // borderRadius='full'
                        // boxSize='150px'
                        src='images/interest-5.png'
                        alt='Dan'
                        width={['24%', '24%', '24%', '20%', '20%']}
                        height='auto'
                    />
                </GridItem>
                <GridItem>
                    <Image
                        // borderRadius='full'
                        // boxSize='150px'
                        src='images/interest-6.png'
                        alt='Dan'
                        width={['24%', '24%', '24%', '20%', '20%']}
                        height='auto'
                    />
                </GridItem>
                <GridItem>
                    <Image
                        // borderRadius='full'
                        // boxSize='150px'
                        src='images/interest-7.png'
                        alt='Dan'
                        width={['24%', '24%', '24%', '20%', '20%']}
                        height='auto'
                    />
                </GridItem>
                <GridItem>
                    <Image
                        // borderRadius='full'
                        // boxSize='150px'
                        src='images/interest-8.png'
                        alt='Dan'
                        width={['24%', '24%', '24%', '20%', '20%']}
                        height='auto'
                    />
                </GridItem>
                </Center>
               
            </GridItem>
        </Grid>
    </>
}