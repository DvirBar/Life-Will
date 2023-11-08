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
        transition: "all 200ms ease-in-out",
        transform: "scale(1)",
        fontWeight: "bold",

        "&.Mui-active, &.Mui-completed": {
            color: theme.palette.secondary.main,

            "& .MuiStepIcon-text": {
                fill: "#fff",
            }
        },

        "&.Mui-active": {
            transform: "scale(1.3)",
        }
    },

    "& .MuiStepIcon-text": {
        fill: theme.palette.secondary.main,
    },

    [`& .${stepConnectorClasses.line}`]: {
        "border-width": "2px"
    }


}));


function FormNavigation() {
    const {
        selectedStage,
    } = useContext(SiteContext)
    return (
        <Box>
            <StyledStepper
                activeStep={selectedStage}
                alternativeLabel>
                {stepNames.map(stepName =>
                    <Step key={stepName}>
                        <StepLabel>{stepName}</StepLabel>
                    </Step>
                )}
            </StyledStepper>
        </Box>
    )
}


export default FormNavigation