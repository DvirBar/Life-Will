import React, { useContext } from 'react';
import FormWrapper from '../utils/FormWrapper';
import YesNoRadio from '../formikcomponents/YesNoRadio';
import { answers, giveToFamilyTypesKeys } from '../../store/translation';
import GiveToFamily from './GiveToFamily';
import * as Yup from "yup"
import { basePersonInfoValidation } from '../utils/validation';
import { SiteContext } from '../../store/context';

const giveToFamilyTypeSchema = {
    [giveToFamilyTypesKeys.parents]: Yup.array().of(Yup.object().shape(basePersonInfoValidation)),
    [giveToFamilyTypesKeys.siblings]: Yup.array().of(Yup.object().shape(basePersonInfoValidation)),
    [giveToFamilyTypesKeys.friends]: Yup.array().of(Yup.object().shape(basePersonInfoValidation)),
    [giveToFamilyTypesKeys.grandChildren]: Yup.array().of(Yup.object().shape(basePersonInfoValidation)),
}

const validationSchema = Yup.object({
    give_to_family: Yup.string().required("יש לבחור באפשרות המתאימה"),
    give_to_family_type: Yup.object().when("give_to_family", {
        is: answers.yes,
        then: (schema) => schema.shape(giveToFamilyTypeSchema)
    })
})


export default function StepTwoContinue2() {
    const {
        translation
    } = useContext(SiteContext)
    return (
        <FormWrapper
            validationSchema={validationSchema}
        >
            <YesNoRadio name="give_to_family" question={translation.give_to_family} />
            <GiveToFamily />
        </FormWrapper>
    )
}