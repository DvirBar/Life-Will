import React, { useContext } from 'react';
import { SiteContext } from '../store/context'
import FinishForm from './FinishForm';
import BeginForm from './BeginForm';


function FormStepsWrapper() {
    const {
        selectedStep,
        selectedStage,
        stages,
        startedFill
    } = useContext(SiteContext);

    if (!startedFill) {
        return <BeginForm />
    }

    return (
        <>
            {selectedStage < stages.length ? stages[selectedStage][selectedStep] : <FinishForm />}
        </>
    )
}

export default FormStepsWrapper