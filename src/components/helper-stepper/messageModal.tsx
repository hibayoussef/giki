import { Button, Center, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from '@chakra-ui/react';
import React from 'react';
import { BiCheckShield } from "react-icons/bi";

const MessageModal = (counter: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const getColor = () => {
        if (counter < 3) {
            return '#B3B3B3;'
        }
        else {
            return '#FF8C1E'
        }
    }

    return (
        <>
            <Button
                mt='53.11px'
                mb='53.11px'
                w='244.71px'
                h='41.14px'
                borderRadius='8px'
                p='10px' m='10px'
                bg={getColor()}
                color='white'
                onClick={onOpen}
            >
                Send
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>




                    <ModalCloseButton />


                    <ModalBody>
                        <Center alignSelf='center' pt='20px'>
                            <BiCheckShield size='46px' color='green' />
                        </Center>

                        <Center>
                            <Text color='green' fontSize='20px' fontWeight='700'>
                                Success
                            </Text>
                        </Center>
                        <Center pt='16px'>
                            <Text fontSize='15px' fontWeight='500' >
                                The request has been sent successfully
                            </Text>
                        </Center>
                    </ModalBody>

                    <ModalFooter>
                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default MessageModal;