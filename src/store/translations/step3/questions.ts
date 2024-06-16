import { Step3 } from "../../interfaces/step3";
import { assetsData, itemNoDescription, stepNames } from "../globals";

const questions: Step3 =  {
    title: `שלב ג׳ - ${stepNames[2]}`,
    real_estate_title: 'נדלן',
    real_estate: 'האם קיימים ברשותך נכסי נדלן?',
    real_estate_data:
    {
        type: 'סוג',
        own_percentage: 'כמה אחוז בבעלותך?',
        details: {
            country: 'מדינה',
            city: 'עיר',
            street: 'רחוב',
            house_number: 'מספר',
            block: 'גוש',
            lot: 'חלקה',
            sub_lot: 'תת חלקה',
            size: 'גודל',
            description: 'תיאור'
        },
        ...itemNoDescription
    },
    future_real_estate_title: 'הורשה בעתיד',
    future_real_estate: 'נכס נדלני, בין אם יש לך עכשיו ובין אם יהיה לך בעתיד, ששכחת או לא ציינת למי היית רוצה להוריש אותו?',
    future_real_estate_data: assetsData,

    inheritorsText: 'יורשים',
}

export default questions;