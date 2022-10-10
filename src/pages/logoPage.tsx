import React from 'react';
import { Grid, Image, Box, GridItem, Container, Stack } from '@chakra-ui/react';
import logo from '../../public/logo.png';
import { Center } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';


// 2. Update the breakpoints as key-value pairs
const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })


const LogoPage = () => {
    return (
        <>
            <Grid style={{ backgroundColor: '#434E61' }} templateRows='repeat(2, 50vh)' height='100vh' width='100%'>
                <GridItem>
                    <Center >
                        <Image
                            // borderRadius='full'
                            // boxSize='150px'
                            src='logo.png'
                            alt='Dan'
                            width={['40%', '25%', '25%', '20%', '19%']}
                            height='auto'
                            marginTop='130px'
                        />
                    </Center>
                </GridItem>

                <GridItem style={{ margin: 'auto' }}>
                    <Center>
                        {/* Width
                            409px
                            Height
                            41.14px */}
                        <Button bg='#FF8C1E' color='#FFFFFF' width={['170px', '250px', '300px', '350px', '409px']} fontSize={['10px', '12px', '12px', '14px', '14px']} height="41.14px" >Button</Button>
                    </Center>
                </GridItem>
            </Grid>

        </>
    )
}

export default LogoPage