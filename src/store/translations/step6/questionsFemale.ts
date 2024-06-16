import { Step6Gender } from "../../interfaces/step6";
import questions from "./questions";

const step6Female: Step6Gender = {
    ...questions,
    not_applied_before_spouse: 'תרצי להוסיף סעיף שכל האמור בצוואה לא יחול לפני פטירת אשתך/בעלך?',
    burial_location: 'איפה תרצי להיקבר?',
    funeral_in_charge: 'תרצי שמישהו יהיה אחראי על טקס ההלוויה?',
    organ_donation: 'האם תרצי לתרום איברים בעזיבתך?',
    relatives_message: 'האם תרצי לכתוב משהו ליקירך?',
}

export default step6Female