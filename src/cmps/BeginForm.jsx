import styled from '@emotion/styled'
import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SiteContext } from '../store/context'
import ts, { Gender } from "../store/translations/index"
import ButtonSelect from './formikcomponents/buttonSelect/ButtonSelect'
import ButtonSelectItem from './formikcomponents/buttonSelect/ButtonSelectItem'


const genderOptions = {
    [Gender.Male]: "צוואת יחיד בלשון זכר",
    [Gender.Female]: "צוואת יחיד בלשון נקבה"
}

function BeginForm() {
    const {
        isAlone,
        setIsAlone,
        saveLocal,
        setSaveLocal,
        startFill,
        selectedGender,
        selectGender
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
            <div>{ts.data}</div>
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


            <Typography variant="subtitle2">
                לשון הצוואה
            </Typography>
            <ButtonSelect
                onChange={selectGender}
                value={String(selectedGender)}
            >
                {Object.keys(genderOptions).map((key) =>
                    <ButtonSelectItem
                        key={key}
                        value={key}
                    >
                        {genderOptions[key]}
                    </ButtonSelectItem>
                )}
        
            </ButtonSelect>

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