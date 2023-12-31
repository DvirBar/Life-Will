import React, { useEffect, useState } from 'react'
import StepOne from "../cmps/stepone/step-one";
import StepOneContinue from "../cmps/stepone/step-one-continue";
import StepTwo from "../cmps/steptwo/step-two";
import StepTwoContinue from "../cmps/steptwo/step-two-continue";
import StepTwoContinue2 from "../cmps/steptwo/step-two-continue2";
import StepThree from "../cmps/stepthree/step-three";
import FutureInheritedItem from "../cmps/utils/InheritedItem/FutureInheritedItem";
import InheritedTopicForm from "../cmps/utils/InheritedItem/InheritedTopicForm";
import StepFiveMoney from "../cmps/stepfive/StepFiveMoney/StepFiveMoney";
import StepFiveNonProfit from "../cmps/stepfive/StepFiveNonProfits/StepFiveNonProfits";
import StepSix from "../cmps/stepsix/StepSix";
import { inheritanceKeysStep4 } from './translation';
import StepFiveFamily from '../cmps/stepfive/StepFiveFamily/StepFiveFamily';
import ChooseItemTypes from '../cmps/stepfour/ChooseItemTypes';

const MIN_STAGE = 0
const MIN_STEP = 0
function useSteps(chosenItems) {
    const initialLocation = {
        selectedStage: MIN_STAGE,
        selectedStep: MIN_STEP
    }

    const [selectedLocation, setSelectedLocation] = useState(JSON.parse(localStorage.getItem("location")) || initialLocation)

    useEffect(() => {
        localStorage.setItem("location", JSON.stringify(selectedLocation))
    }, [selectedLocation])

    const Step4InheritancePages = []
    for (const key in inheritanceKeysStep4) {
        if (chosenItems[key]) {
            Step4InheritancePages.push(<InheritedTopicForm name={key} />)
        }
    }

    Step4InheritancePages.push(<InheritedTopicForm name={inheritanceKeysStep4.other_inheritance} />)
    Step4InheritancePages.push(<FutureInheritedItem name={inheritanceKeysStep4.future_items} />)

    const stages = [
        [
            <StepOne />,
            <StepOneContinue />,
        ],
        [
            <StepTwo />,
            <StepTwoContinue />,
            <StepTwoContinue2 />,
        ],
        [
            <StepThree />,
            <FutureInheritedItem name="future_real_estate" />
        ],
        [
            <ChooseItemTypes />,
            ...Step4InheritancePages
        ],
        [
            <StepFiveMoney />,
            <StepFiveNonProfit />,
            <StepFiveFamily />
        ],
        [
            <StepSix />
        ]
    ]

    const isFinalStep = (currentLocation) => {
        return (currentLocation.selectedStep === stages[currentLocation.selectedStage].length - 1)
    }

    const moveNextStep = () => {
        setSelectedLocation(currLocation => {
            const {
                selectedStage,
                selectedStep
            } = currLocation

            if (isFinalStep(currLocation)) {
                return {
                    selectedStage: selectedStage + 1,
                    selectedStep: MIN_STEP
                }
            }

            return {
                ...currLocation,
                selectedStep: selectedStep + 1
            }
        })
    }

    const movePrevStep = () => {
        setSelectedLocation(currLocation => {
            const {
                selectedStage,
                selectedStep
            } = currLocation

            if (selectedStep === MIN_STEP) {
                if (selectedStage > MIN_STAGE) {
                    return {
                        selectedStage: selectedStage - 1,
                        selectedStep: stages[selectedStage - 1].length - 1
                    }
                }

                return currLocation
            }

            return {
                ...currLocation,
                selectedStep: selectedStep - 1
            }
        })
    }


    const selectStage = (stage) => {
        if (stage > MIN_STAGE && stage < stages.length) {
            setSelectedLocation({
                selectedStage: stage,
                selectedStep: MIN_STEP
            })
        }
    }

    const returnToEdit = () => {
        movePrevStep()
    }

    const {
        selectedStage,
        selectedStep
    } = selectedLocation

    return {
        selectedStage,
        selectedStep,
        stages,
        moveNextStep,
        movePrevStep,
        returnToEdit,
        selectStage
    }

}

export default useSteps