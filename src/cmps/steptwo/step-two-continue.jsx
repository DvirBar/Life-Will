import React, { useContext } from 'react';
import YesNoRadio from '../formikcomponents/YesNoRadio';
import { answers } from '../../store/translation'
import FormWrapper from "../utils/FormWrapper"
import ChildrenDetails from './ChildrenDetails';
import * as Yup from "yup"
import { basePersonInfoValidation, personInfoValidation } from '../utils/validation';
import { getAge } from '../utils/getAge';
import { MAX_AGE_FOR_GUARDIAN } from './GuardianDetails';
import { SiteContext } from '../../store/context';


const guardianValidation = {
    ...basePersonInfoValidation,
    type: Yup.string().required("שדה דרוש")
}

const childData = {
    ...personInfoValidation,
    birthDate: Yup.string().required("יש להזין תאריך לידה"),
    has_disability: Yup.string().required("יש לציין האם הילד בעל מוגבלות"),
    guardian: Yup.object().when(["birthDate", "hasDisability"], {
        is: (birthDate, hasDisability) => {
            return (getAge(birthDate) < MAX_AGE_FOR_GUARDIAN || hasDisability)
        },
        then: (schema) => schema.shape(guardianValidation)
    })
}

const validationSchema = Yup.object({
    kids: Yup.string().required("יש לבחור האם יש ילדים"),
    kids_data: Yup.array().when("kids", {
        is: answers.yes,
        then: (schema) => schema.of(Yup.object(childData))
            .min(1, "יש להזין את פרטי הילדים")
    })
})

export default function StepTwoContinue() {
    const {
        translation
    } = useContext(SiteContext)

    return (
        <FormWrapper
            validationSchema={validationSchema}
        >
            <YesNoRadio name="kids" question={translation.kids} />
            <ChildrenDetails />
        </FormWrapper>
    )
}

