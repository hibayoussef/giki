import React from "react";
import {
    Box, Image, Badge, Text, Stack,
    useColorMode, Button, Flex, Spacer
}
    from "@chakra-ui/react";

const InterestCard: any= (title: string, src: string) => {

    console.log('title: ', title); 
    console.log('src: ', src);
    // Hook to toggle dark mode
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        
            <Box w="130.7px" rounded="20px"
                h='125.04px'
                overflow="hidden"  mt={10}>
                {/* <Text>Hi</Text> */}
                <Image src={src}
                    alt="Card Image" boxSize="300px">
                </Image>

            </Box>
     
    );
}

export default InterestCard;
