import { Button } from '@chakra-ui/button';
import React from 'react';

export const StepperButton: React.FC<{ title: string, num: number; onClick: (...args: any) => void }> = ({ title, num, onClick }) => {


    const bgColor = () =>{
        if(title==='Back'){
            return 'Transparent'
        }

        else {
            return '#FF8C1E'
        }
    }

    const colorText = () =>{
        if(title === 'Next'){
            return '#FFFFFF'
        }
        else {
            return 'black'
        }
    }

    return <>
        {(num === 0 && title === "Back") || (num === 2 && title === "Next")
            ?
            ""
            :
            (
                <Button
                
                    bg= {bgColor()}
                    color={colorText()}
                    style={{
                        width: '244.71px',
                        height: '41.41px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '21px',
                        // color: '#FFFFFF',
                        textTransform: 'uppercase', 
                        marginTop: '12.87px'
                    }}
                    // onClick={()=>{ onClick; onOpen; }}
                    onClick={() => { onClick();}}
                >
                    {title}</Button>
            )
        }

    </>
}
