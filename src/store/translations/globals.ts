import { AssetsData, InheritorsData, ItemNoDecription, PersonalInfo } from "../interfaces/globals"
import { AssestsDataWithType } from "../interfaces/step4"

export const stepNames = [
    "הזדהות",
    "מצב משפחתי ויורשים",
    "מקרקעין",
    "מטלטלין",
    "כספים",
    "לוויה ורצונות"
]

export const globalFields = {
    first_name: "שם פרטי",
    last_name: "שם משפחה",
    birth_date: "תאריך לידה",
    hebrew_birth_date: "תאריך עברי",
    person_id: "תעודת זהות",
    gender: "מגדר"
}

export const personalInfo: PersonalInfo = {
    first_name: globalFields.first_name,
    last_name: globalFields.last_name,
    person_id: globalFields.person_id
}


export const inheritorsData: InheritorsData = {
    ...personalInfo,
    type: "סוג",
    percentage: "אחוז"
}

export const itemNoDescription: ItemNoDecription = {
    remarks: "הערות",
    inheritors: inheritorsData
}

export const assetsData: AssetsData = {
    ...itemNoDescription,
    description: "תיאור"
}

export const assetsDataWithType: AssestsDataWithType = {
    ...assetsData,
    type: "סוג"
}



