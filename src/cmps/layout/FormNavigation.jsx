import { Box, Step, StepLabel, Stepper, styled } from '@mui/material'
import React, { useContext } from 'react'
import { SiteContext } from '../../store/context'
import { stepNames } from '../../store/translation'
import { stepConnectorClasses } from '@mui/material/StepConnector'

const StyledStepper = styled(Stepper)(({ theme }) => ({
    "& .MuiStepIcon-root": {
        border: "1px solid aqua",
        borderColor: theme.palette.secondary.main,
        borderRadius: "50%",
        color: "#fff",
        transition: "all 300ms ease-in-out",
        fontWeight: "bold",
        transform: "scale(1.7)",
        zIndex: 1,

        "&.Mui-active": {
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            transform: "scale(2.2)"
        },

        "&.Mui-completed": {
            color: theme.palette.secondary.main,
        },

        "&.Mui-active, &.Mui-completed": {
            "& .MuiStepIcon-text": {
                fill: "#fff",
            }
        },
    },

    "& .MuiStepIcon-text": {
        fill: theme.palette.secondary.main,
    },

    [`& .${stepConnectorClasses.line}`]: {
        "border-width": "3px"
    }


}));


function FormNavigation() {
    const {
        selectedStage,
    } = useContext(SiteContext)
    return (
        <StyledBoxWrapper>
            <StyledStepper
                activeStep={selectedStage}
                alternativeLabel>
                {stepNames.map(stepName =>
                    <Step key={stepName}>
                        <StepLabel>{stepName}</StepLabel>
                    </Step>
                )}
            </StyledStepper>
        </StyledBoxWrapper>
    )
}

const StyledBoxWrapper = styled(Box)`
    width: 100%;
`


export default FormNavigation