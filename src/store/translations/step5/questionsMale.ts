import { NonProfitProvisionDataGender, Step5Gender } from "../../interfaces/step5";
import questions from "./questions";

const nonProfProvisionDataGender: NonProfitProvisionDataGender = {
    ...questions.non_profit_provision_data,
    non_profit_provision_size: 'האם תרצה להפריש לעמותה גדולה או קטנה?',
    non_profit_message: 'תרצה להשאיר הודעה לעמותה?'
}

const step5Male: Step5Gender = {
    ...questions,
    non_profit_provision_data: nonProfProvisionDataGender,
    non_profit_provision: 'האם תרצה להפריש מהירושה שלך לעמותות הפועלות כאן בארץ?',
    money_division: "איך תרצה לחלק את עיזבונך הכספי בין משפחתך?"
}

export default step5Male;