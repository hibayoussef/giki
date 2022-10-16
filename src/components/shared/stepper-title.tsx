import { Center, VStack, Text, Box } from '@chakra-ui/react';

const StepperTitle = ({ title_part_1, title_part_2 }: { title_part_1: string, title_part_2?: string }) => {
    return (
        <>
            <Box>
                <VStack>
                    <Text
                        fontWeight='700'
                        fontSize={['18px', '23px', '23px', '25px', '28px']}
                        lineHeight='34px'
                        color='#434E61'

                    >
                        {title_part_1}
                    </Text>

                    <Center>
                        <Text
                            fontWeight='700'
                            fontSize={['18px', '23px', '23px', '25px', '28px']}
                            lineHeight='34px'
                            color='#434E61'
                        >
                            {title_part_2}
                        </Text>
                    </Center>
                </VStack>
            </Box>
        </>
    )
}

export default StepperTitle;