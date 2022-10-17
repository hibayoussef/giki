import { Button } from '@chakra-ui/button';
import React, { MouseEventHandler } from 'react';

export const StepperButton: React.FC<{
    title: string,
    onClick: MouseEventHandler;
    isDisabled: boolean;
    backgroundColor?: string;
    style?: Record<string, string>
}> = ({ title, onClick, isDisabled, backgroundColor, style = {
    width: '244.71px',
    height: '41.41px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '21px',
    // color: '#FFFFFF',
    textTransform: 'uppercase',
    marginTop: '12.87px'
} }) => {

        return <>
            (
            <Button
                bg={backgroundColor}
                color={'white'}
                style={style}
                onClick={onClick}
                isDisabled={isDisabled}
            >
                {title}</Button>
            )

        </>
    }
