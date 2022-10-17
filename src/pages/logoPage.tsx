
import { Grid, Image, GridItem } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import ModalComp from '../components/Modal';


const LogoPage = () => {
    return (
        <>
            <Grid style={{ backgroundColor: '#434E61' }} templateRows='repeat(2, 50vh)' height='100vh' width='100%'>
                <GridItem>
                    <Center >
                        <Image
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
                        <ModalComp />
                    </Center>
                </GridItem>
            </Grid>

        </>
    )
}

export default LogoPage