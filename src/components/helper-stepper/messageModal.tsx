import { Button, Center, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure, Text } from '@chakra-ui/react';
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
                w={['215.71px', '220.71px', '230.71px', '237.71px', '244.71px']}
                h={['33.41px', '35.41px', '38.41px', '40.41px', '41.41px']}
                fontSize={['11px', '12px', '13px', '13.5px', '14px']}
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
                            <BiCheckShield
                            size= '2rem' 
                            color='green' />
                        </Center>

                        <Center>
                            <Text color='green' fontSize={['15px', '17px', '18px', '19px', '20px']} fontWeight='700'>
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