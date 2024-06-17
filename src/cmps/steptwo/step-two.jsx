import React, { useContext } from 'react';
import * as Yup from "yup";
import { Typography } from '@mui/material';
import FormikButtonSelect from '../formikcomponents/FormikButtonSelect'
import ButtonSelectItem from '../formikcomponents/buttonSelect/ButtonSelectItem'

import { answers, statusTypes } from '../../store/translation'
import FormWrapper from '../utils/FormWrapper';
import FamilyStatusDetails from './FamilyStatusDetails';
import { personInfoValidation } from '../utils/validation';
import { SiteContext } from '../../store/context';

const stepTwoValidationSchema = Yup.object({
    status: Yup.string().required("יש לבחור סטטוס"),
    partner: Yup.object().when("status", {
        is: (status) => (status === statusTypes.married || status === statusTypes.partnership),
        then: (schema) => schema.shape(personInfoValidation)
    }),
    has_ex_partner: Yup.string().required("יש לבחור באפשרות המתאימה"),
    ex_partner_gain: Yup.string().when(["has_ex_partner", "status"], {
        is: (has_ex_partner, status) => has_ex_partner === answers.yes || status === statusTypes.divorced,
        then: (schema) => schema.required("יש לבחור האם ברצונך להקצות לגרושך/גרושתך")
    }),
    ex_partners: Yup.array().when("ex_partner_gain", {
        is: answers.yes,
        then: (schema) => schema.of(Yup.object(personInfoValidation))
            .min(1, "יש לבחור את פרטי הגרוש/ה")
    })
})

export default function StepTwo() {
    const {
        translation
    } = useContext(SiteContext)
    return (
        <FormWrapper
            validationSchema={stepTwoValidationSchema}
        >
            <Typography variant="subtitle1">{translation.status}</Typography>
            <FormikButtonSelect
                name="status"
            >
                {Object.keys(statusTypes).map(key =>
                    <ButtonSelectItem
                        key={statusTypes[key]}
                        value={statusTypes[key]}
                    >
                        {statusTypes[key]}
                    </ButtonSelectItem>
                )}
            </FormikButtonSelect>
            <FamilyStatusDetails />
        </FormWrapper>
    )
}
