import React, { useContext } from 'react';
import { SiteContext } from '../store/context'
import FinishForm from './FinishForm';


function FormStepsWrapper() {
    const {
        selectedStep,
        selectedStage,
        stages
    } = useContext(SiteContext);
    return (
        <>
            {selectedStage < stages.length ? stages[selectedStage][selectedStep] : <FinishForm />}
        </>
    )
}

export default FormStepsWrapper