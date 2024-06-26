import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SiteContext } from '../store/context'
import { PDFDownloadLink, usePDF } from '@react-pdf/renderer'
import LifeWillDocument from './pdf/pdf'
import { ArrowForward, Send } from '@mui/icons-material'

function FinishForm() {
    const {
        finishForm,
        returnToEdit,
        sendForm
    } = useContext(SiteContext)

    finishForm()

    const [instance] = usePDF({ document: < LifeWillDocument /> })

    return (
        <StyledFinishForm>
            <Typography variant="subtitle1">
                סיימתם את מילוי הצוואה בהצלחה, כעת תוכלו לצפות בטופס לפני שישלח.
            </Typography>
            {/* <a
                href={instance.url}
                target="_blank"
                rel="noopener noreferrer">
                <Button
                    variant="contained"
                >
                    <Typography variant="subtitle1">
                        צפייה בטופס
                    </Typography>
                </Button>
            </a> */}
            <Typography variant="subtitle1">
                <p>
                    לאחר הצפייה באפשרותכם לחזור לערוך או לשלוח את הטופס.
                </p>
                <p>
                    <u>שימו לב:</u>&nbsp;
                    לאחר השליחה לא ניתן לערוך הטופס.
                </p>
            </Typography>


            <NavigationButtons>
                <StyledButton
                    onClick={returnToEdit}
                    color="secondary"
                    fullWidth
                    variant="outlined">
                    <ArrowForward />
                    <Typography variant="subtitle1">חזרה</Typography>
                </StyledButton>
                <StyledButton
                    color="secondary"
                    fullWidth
                    type="submit"
                    onClick={() => console.log("sent")}
                    variant="contained">
                    <Typography variant="subtitle1">שליחה</Typography>
                    <StyledSendIcon />
                </StyledButton>
            </NavigationButtons>

        </StyledFinishForm>
    )
}

const StyledFinishForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const NavigationButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

const StyledButton = styled(Button)`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

const StyledSendIcon = styled(Send)`
    transform: rotate(180deg);
`

export default FinishForm