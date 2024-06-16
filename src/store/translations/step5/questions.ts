import { Step5 } from "../../interfaces/step5";
import { personalInfo, stepNames } from "../globals";

const questions: Step5 = {
    title: `שלב ה׳ - ${stepNames[4]}`,
    money_title: 'סכום',
    money: 'כמה כסף בערך קיים ברשותך או בבנק?',
    money_ils: 'ש״ח',
    bank_accounts_title: 'חשבונות בנק',
    bank_accounts:
    {
        bank_name: 'שם הבנק',
        account_number: 'מספר חשבון',
        branch_number: 'מספר סניף'
    },
    provident_funds: 'האם קיימת ברשותך קופת גמל?',
    provident_funds_title: 'קופת גמל',
    provident_funds_data: {
        fund_name: 'שם הקופה',
        fund_number: 'מספר הקופה'
    },
    study_funds: 'האם קיימת ברשותך קרן השתלמות?',
    study_funds_title: 'קרן השתלמות',
    study_funds_data: {
        fund_name: 'שם הקרן',
        fund_number: 'מספר הקרן'
    },
    non_profit_provision_title: 'הפרשה לעמותה',
    non_profit_provision_data: {
        non_profit_name: 'שם העמותה',
        non_profit_provision_percentage: 'אחוז',
        non_profit_message_content: 'תוכן ההודעה'
    },
    money_division_inheritors: {
        ...personalInfo,
        percentage: "אחוז"
    },

}

export default questions