import { Center, Grid } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PlaceHolderComponent } from './stepper-parts/place-holder';
import { infoValue, pageNumberState, stepperPages } from './store/stepper-recoil';
import { ThreeDots } from './stepper-parts/three-dots';
import { StepperButton } from './stepper-parts/stepper-button';

const StepperComp = () => {
    const [stepperPagess, _] = useRecoilState(stepperPages)
    const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);

    const info = useRecoilValue(infoValue);

    return (
        <>
            <Grid>
                <PlaceHolderComponent Content={() => stepperPagess[pageNumber]} />
                {
                    pageNumber === 2 &&
                    <Center>
                        <StepperButton
                            isDisabled={!info?.allowedToProceed}
                            onClick={() => setPageNumber(pageNumber + 1)}
                            title={'Next'}
                            backgroundColor={'#FF8C1E'}
                        />
                    </Center>
                }
                {
                    pageNumber > 0 &&
                    <Center>
                        <StepperButton
                            isDisabled={false}
                            onClick={() => setPageNumber(pageNumber - 1)}
                            title={'Back'}
                            backgroundColor={'Transparent'} />
                    </Center>
                }
                <ThreeDots activePoint={pageNumber} />
            </Grid>
        </>
    )
}

export default StepperComp; 