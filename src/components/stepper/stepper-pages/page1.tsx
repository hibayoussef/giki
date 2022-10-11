import { Button, Center, Grid, GridItem, Link } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'

export const FirstStepperPage: React.FC<{}> = () => {
    return <>
        <Grid templateRows='repeat(5, 15vh)' height='100vh' width='100%' mt='72.35px'>
            <GridItem>
                <Center>
                    <Image
                        borderRadius='6'
                        boxSize='100px'
                        src='rectangle.png'
                        alt='A'
                        mb='10px'
                    />
                </Center>

            </GridItem>

            <GridItem marginTop='17px'>
                <Center>
                    <Link
                    ><p
                        style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '21px',
                            /* identical to box height */


                            /* giki/grey-04 */

                            color: '#B3B3B3',

                        }}
                    >alice@wonderland.space</p></Link>
                </Center>
            </GridItem>
            <GridItem>
                <Center>
                    <p
                        style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '28px',
                            lineHeight: '42px', 
                            color: '#434E61'
                        }}
                    >Welcome to Giki</p>
                </Center>
            </GridItem>
            <GridItem>
                <Center>
                    <Button width='20%'>Alice</Button>
                </Center>
            </GridItem>
            <GridItem>
                <Center>
                    <p>Your answers to the next few questions will help us find the right communities for you</p>
                </Center>
            </GridItem>
        </Grid>
    </>
}