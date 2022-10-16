import { Button } from '@chakra-ui/button';
import React from 'react';

export const StepperButton: React.FC<{ title: string, num: number; onClick: (...args: any) => void }> = ({ title, num, onClick }) => {

    const [show, setShow] = React.useState(false);


    const disabledButton = () => {
        if (title === 'Previous' && num === 0) {
            return true;
        }
    }

    const hideButton = () => {
        if (title === 'Next' && num === 2 || title === 'Previous' && num === 0) {
            return false;
        }
    }



    return <>
        <Button
            style={{
                width: '244.71px',
                height: '41.41px',
                backgroundColor: '#FF8C1E',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '21px',
                color: '#FFFFFF',
                textTransform: 'uppercase'
            }}
            isDisabled={disabledButton()}
            // onClick={()=>{ onClick; onOpen; }}
            onClick={() => { onClick(); hideButton(); }}
        >
            {title}</Button>

    </>
}
