import { Step6 } from "../../interfaces/step6";
import { personalInfo, stepNames } from "../globals";

const questions: Step6 = {
    title: `שלב ו׳ - ${stepNames[5]}`,
    funeral_in_charge_details: personalInfo,
    edi_card: 'האם קיים ברשותך כרטיס "אדי" הנותן אפשרות לתרומת איברים מגופך?',

    relatives_message_content: 'תוכן ההודעה'
}

export default questions;