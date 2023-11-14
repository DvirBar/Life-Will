import * as Yup from "yup"
import { answers, itemDetails } from "../../store/translation"
import hasField from "./InheritedItem/hasField"


export const inheritedItemValidation = (name, isFuture) => {
    const DataValidation = Yup.object().shape({
        type: hasField("type", name)
            ? Yup.string().required("יש לבחור סוג.")
            : Yup.string(),

        own_percentage: hasField("own_percentage", name)
            ? Yup.string().required("דרוש")
            : Yup.string(),

        details: hasField("details", name)
            ? Yup.object().when("type", ([type], schema) => {
                const fieldsObject = {}

                for (const fieldKey in itemDetails[name]) {
                    fieldsObject[fieldKey] = Yup.string().required("שדה דרוש")
                }

                return schema.shape(fieldsObject)
            })
            : Yup.object(),
        description: hasField("description", name)
            ? Yup.string().required("יש למלא תיאור")
            : Yup.string(),
        inheritors: Yup.array()
            .of(
                Yup.object()
                    .shape({
                        percent: Yup.number().required("דרוש")
                    })
            )
            .min(1, "רשימת היורשים לא יכולה להיות ריקה")
        // .test("sumOfPercentage",
        //     "סכום החלוקה חייב להיות 100",
        //     (inheritors) => {
        //         const sum =
        //             inheritors?.reduce((acc, inheritor) => {
        //                 return acc + inheritor.percentage;
        //             }, 0) || 0
        //         return sum
        //     })
    })



    const validationObject = Yup.object().shape({
        [name]: isFuture ? Yup.string() : Yup.string().required("יש לסמן שדה זה."),
        [`${name}_data`]: isFuture
            ? DataValidation
            : Yup.array().when([name], {
                is: answers.yes,
                then: (schema) => schema.of(DataValidation)
                    .min(1, "יש להוסיף לפחות ערך אחד.")
            })
    })

    return validationObject
}