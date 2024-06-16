import { Step2Gender } from "../../interfaces/step2";
import { personalInfo } from "../globals";
import questions from "./questions";

const step2Male: Step2Gender = {
    ...questions,
    partner: {
        ...personalInfo,
        married_gender: "אני נשוי ל-",
        spouse_gender: "אני מנהל זוגיות עם-"
    },
    ex_partner_gain: 'האם תרצה להקצות לגרושך/גרושתך מהצוואה?',
    give_to_family: 'האם יש הורים / אחים / חברים או אחרים שתרצה להפריש להם מצוואתך?'
}

export default step2Male