import { GiveToFamilyTypesKeys, Step2 } from "../../interfaces/step2"
import { globalFields, personalInfo, stepNames } from "../globals"

const {
    gender,
    birth_date,
    hebrew_birth_date
} = globalFields

const questions: Step2 = {
    title: `שלב ב׳ - ${stepNames[1]}`,
    status: "סטטוס",
    has_ex_partner: 'האם היו לך נישואים קודמים?',
    ex_partner: 'גרוש/ה',
    ex_partners: {
        ...personalInfo,
        title: "פרטי הגרוש/ה",
        gender,
    },
    kids: 'ילדים',
    kidNameText: 'שם הילד',
    num_of_kids: 'מספר ילדים',
    kids_data: {
        ...personalInfo,
        gender,
        birthDate: birth_date,
        hebrewBirthDate: hebrew_birth_date,
        has_disability: 'מוגבלות',
        guardian_text: 'מי יהיה האפוטרופוס עליו/עליה',
        guardian_data: {
            type: 'סוג',
            ...personalInfo
        }
    },
    guardianDetailsText: 'פרטי אפוטרופוס',
    give_to_family_type: {
        [GiveToFamilyTypesKeys.parents]: personalInfo,
        [GiveToFamilyTypesKeys.siblings]: personalInfo,
        [GiveToFamilyTypesKeys.friends]: personalInfo,
        [GiveToFamilyTypesKeys.grandChildren]: personalInfo
    }, 
}

export default questions