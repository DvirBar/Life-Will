import { NonProfitProvisionDataGender, Step5Gender } from "../../interfaces/step5";
import questions from "./questions";

const nonProfProvisionDataGender: NonProfitProvisionDataGender = {
    ...questions.non_profit_provision_data,
    non_profit_provision_size: 'האם תרצי להפריש לעמותה גדולה או קטנה?',
    non_profit_message: 'תרצי להשאיר הודעה לעמותה?'
}

const step5Female: Step5Gender = {
    ...questions,
    non_profit_provision_data: nonProfProvisionDataGender,
    non_profit_provision: 'האם תרצי להפריש מהירושה שלך לעמותות הפועלות כאן בארץ?',
    money_division: "איך תרצי לחלק את עיזבונך הכספי בין משפחתך?"
}

export default step5Female