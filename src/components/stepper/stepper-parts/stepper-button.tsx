import { Button } from '@chakra-ui/button';
import React, { MouseEventHandler } from 'react';

export const StepperButton: React.FC<{
    title: string,
    num: number,
    onClick: MouseEventHandler;
    isDisabled: boolean;
    backgroundColor?: string;
    style?: Record<string, string>
}> = ({ title, num, onClick, isDisabled, backgroundColor}) => {

const bgColor = () => {
        if (title === 'Back') {
            return 'Transparent'
        }

        else {
            return '#FF8C1E'
        }
    }



    const colorText = () => {
        if (title === 'Next') {
            return '#FFFFFF'
        }
        else {
            return 'black'
        }
    }

    const [isHovering, setIsHovering] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

   
    return <>
        {(num === 0 && title === "Back") || (num === 2 && title === "Next")
            ?
            ""
            :
            (
                <Button
                    
                    // *********************
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}

                    // *********************
                    style={{
                        backgroundColor: isHovering ? '#FF8C1E' : bgColor(),
                        color: isHovering ? 'white' : colorText(),
                        width: '244.71px',
                        height: '41.41px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '21px',
                        textTransform: 'uppercase',
                        marginTop: '12.87px'
                    }}
                    // onClick={()=>{ onClick; onOpen; }}
                    onClick={onClick}
                    isDisabled={isDisabled}
                >
                    {title}</Button>
            )
        }

    </>
}
