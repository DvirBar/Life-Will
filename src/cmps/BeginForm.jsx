import styled from '@emotion/styled'
import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SiteContext } from '../store/context'

function BeginForm() {
    const {
        isAlone,
        setIsAlone,
        saveLocal,
        setSaveLocal,
        startFill
    } = useContext(SiteContext)
    return (
        <StyledBeginForm>
            <Typography variant="subtitle1">
                ברוכים הבאים למערכת יצירת הצוואות של Lifewill.
            </Typography>
            <StyledTopicBlock>
                <p>
                    עליכם למלא את הצוואה לבדכם.
                </p>
                <FormControlLabel
                    label="אני מאשר/ת שאני עורכ/ת צוואה זו לבדי"
                    control={
                        <Checkbox
                            checked={isAlone}
                            onChange={() => setIsAlone(currIsAlone => !currIsAlone)}
                        />
                    }
                />
            </StyledTopicBlock>

            <StyledTopicBlock>
                <p>
                    באפשרותכם לבחור למלא את טופס הצוואה בחלקו כך שישמר במכשיר זה ולהמשיך מאוחר יותר, ובלבד שהינכם משתמשים באותו מכשיר ודפדפן במשך כל מילוי הצוואה.
                </p>
                <p>
                    כמו כן, על מנת להשתמש באפשרות זו עליכם לוודא שאינכם משתמשים ב״גלישה בסתר״.
                </p>
                <p><u>
                    אנחנו ממליצים להשתמש באפשרות זו רק אם מכשיר זה שייך לכם ואתם המשתמשים היחידים בו.
                </u>
                </p>
                <p>
                    לאחר שתשלחו את הטופס, השמירה תימחק מהמכשיר.
                </p>
                <FormControlLabel
                    label="אני מעוניינ/ת לשמור את נתוני הטופס במכשיר זה"
                    control={
                        <Checkbox
                            checked={saveLocal}
                            onChange={() => setSaveLocal(currSaveLocal => !currSaveLocal)}
                        />
                    }
                />
            </StyledTopicBlock>



            <Button
                onClick={startFill}
                variant="contained"
                color="secondary"
                disabled={!isAlone}
                fullWidth
            >
                <Typography variant="subtitle1">
                    התחלה
                </Typography>
            </Button>
        </StyledBeginForm>
    )
}

const StyledBeginForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const StyledTopicBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;  
`

export default BeginForm