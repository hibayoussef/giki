import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import StepperComp from './stepper/stepper-1';

const ModalComp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')

    const handleSizeClick = (newSize: any) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = ['full']
    const [isHovering, setIsHovering] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


    return (
        <>
           {sizes.map((size) => (
                <Button  onClick={() => handleSizeClick(size)}
                key={size}
                m={4} bg='#FF8C1E' color='#FFFFFF' width={['170px', '250px', '300px', '350px', '409px']} 
                fontSize={['10px', '12px', '12px', '14px', '14px']} height="41.14px"
                style={{
                    backgroundColor: isHovering ? '#FF8C1E' : '',
                    color: isHovering ? 'white' : '',
                    borderColor: isHovering ? '#FF8C1E': ''
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

                >{`Open Modal`}</Button>
            ))}

            <Modal onClose={onClose} size={size} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody>
                        <StepperComp />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalComp;