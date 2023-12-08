import { Typography } from '@mui/material';
import styled from '@emotion/styled'
import * as Yup from 'yup';

import FormikTextField from '../formikcomponents/FormikTextField';
import FormikDatePicker from '../formikcomponents/FormikDatePicker';

import FormWrapper from "../utils/FormWrapper"

import translation from '../../store/translation';
import ChooseGender from '../utils/ChooseGender';

import HebrewDatePicker from '../formikcomponents/HebrewDatePicker';
import { getAge } from '../utils/getAge';

export const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('יש להזין שם פרטי').label("שם פרטי"),
    last_name: Yup.string().required('יש להזין שם משפחה').label("שם משפחה"),
    birthDate: Yup.date().required('יש להזין תאריך לידה')
        .test("isAbove18",
            "על מנת לערוך את הצוואה, יש להיות בגיל 18 ומעלה",
            (birthDate) => getAge(birthDate) >= 18
        ),
    gender: Yup.string()
        .required('יש לבחור מגדר')
});

export default function StepOne() {
    return (
        <FormWrapper
            validationSchema={validationSchema}
        >
            <StyledPersonalDetails>
                <FormikTextField
                    label={translation.first_name}
                    name="first_name"
                />
                <FormikTextField
                    label={translation.last_name}
                    name="last_name"
                />
            </StyledPersonalDetails>

            <StyledPersonalBirthdate>
                <Typography variant="subtitle1">מה תאריך הלידה שלך?</Typography>
                <FormikDatePicker name="birthDate" label={translation.birthDate} />
                <HebrewDatePicker name="hebrewBirthDate" label="תאריך עברי (לא חובה)" />

            </StyledPersonalBirthdate>

            <ChooseGender name="gender" />
        </FormWrapper>
    )
}

const StyledPersonalDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
`

const StyledPersonalBirthdate = styled.div`
	padding:1rem 0;
	display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
	align-items: flex-start;
`

