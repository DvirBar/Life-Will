import { Step4, VehicleDetails } from "../../interfaces/step4";
import { assetsData, assetsDataWithType, stepNames } from "../globals";

const vehicleDetails: VehicleDetails = {
    license_plate: 'זיהוי',
    manufacturer: 'יצרן',
    model: 'דגם',
    year: 'שנה',
    color: 'צבע',
}


const questions: Step4 = {
    title: `שלב ד׳ - ${stepNames[3]}`,
    vehicle_title: 'רכב',
    vehicle: 'האם קיים ברשותך כלי תחבורה?',
    vehicle_data:
    {
        type: 'סוג',
        details: vehicleDetails,
        ...assetsData
    },
    jewelry_title: 'תכשיטים',
    jewelry: 'האם קיים ברשותך תכשיטים שהיית רוצה להוריש?',
    jewelry_data: assetsData,
    tool_title: 'כלים',
    tool: 'האם קיים ברשותך כלים שהיית רוצה להוריש?',
    tool_data:
    {
        // TODO: enum
        type: 'סוג',
        ...assetsData
    },

    art_title: 'אומנות',
    art: 'האם קיים ברשותך פרטי אומנות?',
    art_data: assetsData,

    musical_instruments_title: 'כלי נגינה',
    musical_instruments: 'האם קיים ברשותך כלי נגינה שהיית רוצה להוריש?',
    musical_instruments_data: assetsData,

    unique_collection_title: 'אוסף מיוחד',
    unique_collection: 'האם קיים ברשותך אוסף חפצים/ פריטים?',
    unique_collection_data: assetsData,

    furniture_title: 'רהיטים',
    furniture: 'האם קיים ברשותך רהיטים?',
    furniture_data: assetsData,

    books_title: 'ספרים',
    books: 'האם קיים ברשותך ספרים? ',
    books_data: assetsData,

    clothes_title: 'פרטי לבוש',
    clothes: 'האם קיים ברשותך פרטי לבוש?',
    clothes_data: assetsData,

    appliances_title: 'מכשירי חשמל',
    appliances: 'האם קיים ברשותך מכשירי חשמל שהיית רוצה להוריש?',
    appliances_data: assetsData,

    sport_equipment_title: 'מכשירי ספורט',
    sport_equipment: 'האם קיים ברשותך מכשירי ספורט שהיית רוצה להוריש?',
    sport_equipment_data: assetsData,

    pets_title: 'בעלי חיים',
    pets: 'האם קיים ברשותך בעלי חיים שהיית רוצה להוריש?',
    pets_data: assetsData,

    digital_assets_title: 'דיגיטל',
    digital_assets: 'האם קיימים ברשותך נכסים דיגיטליים?',
    digital_assets_data: assetsData,

    items_title: 'פרטים וחפצים',
    items: 'האם קיים ברשותך פריט או חפץ ספציפי שהיית רוצה להוריש?',
    items_data: assetsData,

    other_inheritance_title: 'פריטים נוספים להורשה',
    other_inheritance: 'האם קיים ברשותך דבר שלא נגענו בו שהיית רוצה להוריש?',
    other_inheritance_data: assetsDataWithType,
    future_items_title: 'הורשה בעתיד',
    future_items: 'מטלטלין, בין אם יש לך עכשיו ובין אם יהיה לך בעתיד, ששכחת או לא ציינת למי היית רוצה להוריש אותו?',
    future_items_data: assetsData,
}

export default questions;