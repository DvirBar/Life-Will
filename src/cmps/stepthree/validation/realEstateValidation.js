import * as Yup from 'yup'
import { answers, realEstateDetailsFieldTypes, realEstateTypesDetailsMap } from '../../../store/translation'


const RealEstateDataValidation = Yup.object().shape({
    type: Yup.string().required("יש לבחור סוג."),
    own_percentage: Yup.string().required("דרוש"),
    details: Yup.object().when("type", ([type], schema) => {
        const fieldsObject = {}

        for (const fieldKey in realEstateDetailsFieldTypes) {
            const fieldValue = realEstateDetailsFieldTypes[fieldKey]
            if (realEstateTypesDetailsMap(type).includes(fieldValue)) {
                fieldsObject[fieldKey] = Yup.string().required("שדה דרוש")
            }
        }

        return schema.shape(fieldsObject)
    }),
    inheritors: Yup.array()
        .of(
            Yup.object()
                .shape({
                    percent: Yup.number().required("דרוש")
                })
        )
        .min(1, "רשימת היורשים לא יכולה להיות ריקה")
})

const RealEstateSchema = Yup.object().shape({
    real_estate: Yup.string().required("יש לסמן שדה זה."),
    real_estate_data: Yup.array().when("real_estate", {
        is: answers.yes,
        then: (schema) => schema.of(RealEstateDataValidation)
            .min(1, "יש להוסיף לפחות ערך אחד.")
    })
})

export default RealEstateSchema