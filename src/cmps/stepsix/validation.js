import * as Yup from 'yup'
import { answers } from '../../store/translation'


const StepSixSchema = Yup.object().shape({
    burial_location: Yup.string().required("יש להזין מקום קבורה"),
    funeral_in_charge_details: Yup.object().when("funeral_in_charge", {
        is: answers.yes,
        then: (schema) => schema.shape(
            {
                first_name: Yup.string().required("שם פרטי דרוש"),
                last_name: Yup.string().required("שם משפחה דרוש"),
                person_id: Yup.string()
                    .required("תעודת זהות דרושה")
                    .min(9, "מספר תעודת הזהות לא תקין")
                    .max(9, "מספר תעודת הזהות לא תקין")
            }
        )
    })
})


export default StepSixSchema