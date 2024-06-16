import { Step6Gender } from "../../interfaces/step6";
import questions from "./questions";

const step6Male: Step6Gender = {
    ...questions,
    not_applied_before_spouse: 'תרצה להוסיף סעיף שכל האמור בצוואה לא יחול לפני פטירת אשתך/בעלך?',
    burial_location: 'איפה תרצה להיקבר?',
    funeral_in_charge: 'תרצה שמישהו יהיה אחראי על טקס ההלוויה?',
    organ_donation: 'האם תרצה לתרום איברים בעזיבתך?',
    relatives_message: 'האם תרצה לכתוב משהו ליקירך?',
}

export default step6Male