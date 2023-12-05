import React, { useContext } from 'react';
import { SiteContext } from '../store/context'


function FormStepsWrapper() {
    const {
        selectedStep,
        selectedStage,
        stages
    } = useContext(SiteContext);

    return (
        <>
            {stages[selectedStage][selectedStep]}
        </>
    )
}

export default FormStepsWrapper