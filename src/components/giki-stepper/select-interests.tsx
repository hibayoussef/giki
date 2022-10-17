import { VStack, Box, Text, Center, Circle, Stack, Image, Grid, HStack, Button, Link } from '@chakra-ui/react';
import React from 'react';
import { ImagesListProps } from '../common/interests/data/interfaces';
import InterestCard from '../helper-stepper/interestCard';
import MessageModal from '../helper-stepper/messageModal';
import StepperTitle from '../shared/stepper-title';

export const imagesSrc = [
    { src1: 'images/interest-1.png' },
    { src1: 'images/interest-2.png' },
    { src1: 'images/interest-3.png' },
    { src1: 'images/interest-4.png' },
    { src1: 'images/interest-5.png' },
    { src1: 'images/interest-6.png' },
    { src1: 'images/interest-7.png' },
    { src1: 'images/interest-8.png' }
]

const SelectInterests = () => {
    const [counter, setCounter] = React.useState(0);
    const hasPickedTreeOrMore = counter >= 3;
    const imageClickable = () => {
        setCounter(counter + 1);
        console.log('I am inside counter: ', counter);
    }


    const stopCounter = () => {
        if (counter < 3) {

            return true;
        }

        else return false;
    }


    const getColor = () => {
        if (counter < 3) {
            return '#B3B3B3;'
        }
        else {
            return '#FF8C1E'
        }
    }
    const clickButton = () => {
        console.log('click on meeeeeeee')
    }

    const [isHovering, setIsHovering] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

  

    return (
        <VStack pt='72.35px'>
            <StepperTitle title_part_1=' Tell us what you’re' title_part_2='interested in' />

          
            <Stack>
                <HStack pt='73px'>

                    <Box w="130.7px" rounded="10px"
                        h='125.04px'
                        overflow="hidden"
                        style={{
                            backgroundColor: isHovering ? 'red' : '',
                            color: isHovering ? 'white' : '',
                            borderColor: isHovering ? 'red': '', 
                            borderWidth: isHovering ? '1px' : ''
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}

                    >
                        <Link onClick={imageClickable}>
                            <Image src='images/interest-1.png'
                                alt="Card Image"
                            >
                            </Image>
                        </Link>
                    </Box>
                    <Box w="130.7px" rounded="10px"
                        h='125.04px'
                        overflow="hidden"
                        style={{
                            backgroundColor: isHovering ? 'red' : '',
                            color: isHovering ? 'white' : '',
                            borderColor: isHovering ? 'red': '', 
                            borderWidth: isHovering ? '1px' : ''
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}

                    >
                        <Link onClick={imageClickable}>
                            <Image src='images/interest-2.png'
                                alt="Card Image"
                            >
                            </Image>
                        </Link>
                    </Box>
                    <Box w="130.7px" rounded="20px"
                        h='125.04px'
                        overflow="hidden"

                    >
                        <Link onClick={imageClickable}>
                            <Image src='images/interest-3.png'
                                alt="Card Image"
                            >
                            </Image>
                        </Link>
                    </Box>
                    <Box w="130.7px" rounded="20px"
                        h='125.04px'
                        overflow="hidden"
                    >
                        <Link onClick={imageClickable}>
                            <Image src='images/interest-4.png'
                                alt="Card Image"
                            >
                            </Image>
                        </Link>
                    </Box>
                </HStack><HStack pt='73px'>

                    <Box w="130.7px" rounded="20px"
                        h='125.04px'
                        overflow="hidden"

                    >
                        <Link onClick={imageClickable}>
                            <Image src='images/interest-5.png'
                                alt="Card Image"
                            >
                            </Image>
                        </Link>
                    </Box>
                    <Box w="130.7px" rounded="20px"
                        h='125.04px'
                        overflow="hidden"
                    >
                        <Link onClick={imageClickable}>
                            <Image src='images/interest-6.png'
                                alt="Card Image"
                            >
                            </Image>
                        </Link>
                    </Box>
                    <Box w="130.7px" rounded="20px"
                        h='125.04px'
                        overflow="hidden"
                    >
                        <Link onClick={imageClickable}>
                            <Image src='images/interest-7.png'
                                alt="Card Image"
                            >
                            </Image>
                        </Link>
                    </Box>
                    {/* <span onMouseOver="this.style.color='red'" onMouseOut="this.style.color='black'" > */}
                    <Box w="130.7px" rounded="20px"
                        h='125.04px'
                        overflow="hidden"
                    >
                        <Link onClick={imageClickable}
                            style={{}}
                        >
                            <Image src='images/interest-8.png'
                                alt="Card Image"
                            >
                            </Image>
                        </Link>
                    </Box>
                    {/* </span> */}
                </HStack>

                <Box pt='53.11px' pb='12.87px'>
                    <Center>
                        {hasPickedTreeOrMore ? (
                            <MessageModal counter={counter} />
                        ) : (
                            <Button
                                w='244.71px'
                                h='41.14px'
                                // colorScheme='orange'
                                bg={getColor()}
                                color='white'
                                borderRadius='8px'
                                p='10px' m='10px'
                                onClick={clickButton}
                                isDisabled={stopCounter()}
                            >
                                pick 3 more
                            </Button>
                        )}
                    </Center>
                </Box>
            </Stack>
        </VStack>
    )
}

export default SelectInterests;

