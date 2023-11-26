import * as Yup from 'yup'
import { answers } from '../../../store/translation'

const NonProfitProvisionSchema = Yup.object().shape({
    non_profit_name: Yup.string().required("יש להזין שם עמודה"),
    non_profit_provision_percentage: Yup.string().required("דרוש"),
    non_profit_message: Yup.string().required("יש לסמן שדה זה"),
    non_profit_message_content: Yup.string().when("non_profit_message", {
        is: answers.yes,
        then: (schema) => schema.required("יש לכתוב את תוכן ההודעה")
    })
})

const StepFiveNonProfitSchema = Yup.object().shape({
    non_profit_provision: Yup.string().required("יש לסמן שדה זה"),
    non_profit_provision_data: Yup.array().when("non_profit_provision", {
        is: answers.yes,
        then: (schema) => schema.of(NonProfitProvisionSchema)
    }).min(1, "יש להוסיף לפחות ערך אחד.")
})

export default StepFiveNonProfitSchema