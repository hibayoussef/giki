import { Grid } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { PlaceHolderComponent } from './stepper-parts/place-holder';
import { pageNumberState, stepperPages } from './store/stepper-recoil';
import { ThreeDots } from './stepper-parts/three-dots';
import { StepperButton } from './stepper-parts/stepper-button';

const StepperComp = () => {
    const [stepperPagess, _] = useRecoilState(stepperPages)
    const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);

    // TODO
    // Handle eadge cases for 0 and above 3
    const handleSetPageNumber = () => {

    }
    return (
        <>
            <Grid>
                <PlaceHolderComponent Content={() => stepperPagess[pageNumber]} />
                <StepperButton onClick={() => setPageNumber(pageNumber + 1)} title={'Next'} />
                <StepperButton onClick={() => setPageNumber(pageNumber - 1)} title={'Previous'} />
                <ThreeDots activePoint={pageNumber} />
            </Grid>
        </>
    )
}

export default StepperComp; 