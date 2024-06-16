import { Step2Gender } from "../../interfaces/step2";
import { personalInfo } from "../globals";
import questions from "./questions";

const step2Female: Step2Gender = {
    ...questions,
    partner: {
        ...personalInfo,
        married_gender: "אני נשואה ל-",
        spouse_gender: "אני מנהלת זוגיות עם-"
    },
    ex_partner_gain: 'האם תרצי להקצות לגרושך/גרושתך מהצוואה?',
    give_to_family: 'האם יש הורים / אחים / חברים או אחרים שתרצי להפריש להם מצוואתך?'
}

export default step2Female