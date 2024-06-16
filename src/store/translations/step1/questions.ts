import { stepNames, globalFields} from "../globals";
import { Step1 } from "../../interfaces/step1"

const {
    first_name,
    last_name,
    birth_date,
    hebrew_birth_date,
    person_id,
    gender
} = globalFields

const questions: Step1 = {
    title: `שלב א׳ - ${stepNames[0]}`,
    first_name,
    last_name,
    birthDate: birth_date,
    hebrewBirthDate: hebrew_birth_date,
    gender,
    person_id,
    email: "כתובת מייל",
    phone: "טלפון נייד",
    address: {
        text: "כתובת",
        street: "רחוב",
        houseNum: "מספר בית",
        city: "עיר"
    },
    citizenship: "אזרחות - האם יש בבעלותך אזרחות נוספת?",
    passport_id: "מספר דרכון"
};

export default questions