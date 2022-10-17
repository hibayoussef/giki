import { Box, Circle, Stack, VStack, Text, Center } from '@chakra-ui/react';
import { EditableComp } from '../helper-stepper/editableComp';

const WelcomeToGiki = () => {
    return (
        <VStack pt='72.35px' pl='40px' pr='40px'>
            <Box>
                <Circle
                    bg='#434E61'
                    size={['100.77px', '108.77px', '113.77px', '119.77px', '123.77px']}
                    borderRadius='8PX'
                >
                    <Text fontSize={['30px', '35px', '40px', '45px', '50px']} fontWeight='700' color='#FFFFFF' lineHeight='61px'>
                        A
                    </Text>
                </Circle>
            </Box>
            <Box pt='17px' ml='10'>
                <Text color='#B3B3B3' fontSize='14px' fontWeight='500' lineHeight='21px' >
                    alice@wonderland.space
                </Text>
            </Box>



            <Box mt='33.29'>
                <Text
                    fontWeight={['700', '700', '700', '700', '700']}
                    fontSize={['18px', '20px', '24px', '26pxpx', '28px']}
                    lineHeight='42px'
                    color='#434E61'
                    mt='33.29px'
                >Welcome to Giki</Text>
            </Box>



            <EditableComp />

            <Box mt='14.45px' pb='28.4px'>
                <Stack>
                    <Text
                        fontWeight='500'
                        fontSize={['12px', '12px', '12.5px', '13px', '13px']}
                        lineHeight='19px'
                        textAlign='center'
                        color='#262626'
                    >
                        Your answers to the next few questions will help
                    </Text>
                    <Center>
                        <Text
                            fontWeight='500'
                            fontSize={['12px', '12px', '12.5px', '13px', '13px']}
                            lineHeight='19px'
                            textAlign='center'
                            color='#262626'
                        >
                            us find the right communities for you
                        </Text>
                    </Center>
                </Stack>

            </Box>
        </VStack>
    )
}

export default WelcomeToGiki;