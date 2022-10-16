import { Center, Editable, EditableInput, EditablePreview, Spacer } from '@chakra-ui/react';
import React from 'react';
import { RiPencilLine } from "react-icons/ri";

export const EditableComp = () => {
    return (
        <>
            <Editable
                bg='#F6F6F6'
                defaultValue='Arica'
                w='244.71px'
                h='41.14px'
                borderRadius='8px'
            >
                <Center>
                    <EditablePreview
                        fontSize={['21px', '24px', '24px', '26px', '28px']}
                        fontWeight='700'
                        lineHeight='33px'
                        color='#FF8C1E'
                    // marginLeft='5rem'
                    />
                </Center>
                <EditableInput
                    pl='5px'
                    bg='#F6F6F6'
                // marginRight='2rem'
                />
            </Editable>
        </>
    )
}
