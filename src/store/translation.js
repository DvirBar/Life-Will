const first_name = 'שם'
const last_name = 'שם משפחה'
const birth_date = 'תאריך לידה'
const hebrew_birth_date = 'תאריך עברי'
const person_id = 'ת״ז'
const gender = 'מגדר'
const personInfo = {
    first_name,
    last_name,
    person_id
}

export const statusTypes = {
    separate: 'פרוד',
    widow: 'אלמן',
    single: 'רווק',
    solitary: 'ערירי',
    married: 'נשוי',
    partnership: 'שותפות',
    divorced: 'גרוש'
}

const inheritorsData = {
    ...personInfo,
    type: 'יורש',
    percentage: 'אחוז',
}

export const inheritorsTypes = {
    inheritors: 'יורשים',
    children: 'ילדים',
    spouse: 'בן/בת זוג',
    nonprofit: 'עמותה'
}

const assetsData = {
    description: 'תיאור',
    remarks: 'האם יש הערות בכתב שתרצה להוסיף?',
    inheritors: inheritorsData
}

const type = 'סוג'

const fund_data = {
    fund_name: 'שם הקופה',
    fund_number: 'מספר הקופה'
}

export const answers = {
    yes: 'כן',
    no: 'לא'
}

export const moneyDivision = {
    equal: 'שווה בשווה',
    byDecision: 'לפי מה שאחליט'
}

const percentage = 'אחוז'

export const realEstateTypes = {
    appartment: 'דירה',
    warehouse: 'מחסן',
    parking: 'חניה',
    lands: 'קרקעות',
    building: 'בניין'
}

export const realEstateDetailsFieldTypes = {
    country: 'מדינה',
    city: 'עיר',
    street: 'רחוב',
    house_number: 'מספר',
    block: 'גוש',
    lot: 'חלקה',
    sub_lot: 'תת חלקה',
    size: 'גודל',
}

export const realEstateTypesDetailsMap = (type) => {
    switch (type) {
        case realEstateTypes.appartment:
        case realEstateTypes.warehouse:
        case realEstateTypes.parking:
            return [
                realEstateDetailsFieldTypes.country,
                realEstateDetailsFieldTypes.city,
                realEstateDetailsFieldTypes.street,
                realEstateDetailsFieldTypes.house_number,
                realEstateDetailsFieldTypes.block,
                realEstateDetailsFieldTypes.lot,
                realEstateDetailsFieldTypes.sub_lot
            ]
        case realEstateTypes.lands:
            return [
                realEstateDetailsFieldTypes.country,
                realEstateDetailsFieldTypes.block,
                realEstateDetailsFieldTypes.lot,
                realEstateDetailsFieldTypes.size
            ]
        case realEstateTypes.building:
            return [
                realEstateDetailsFieldTypes.country,
                realEstateDetailsFieldTypes.city,
                realEstateDetailsFieldTypes.street,
                realEstateDetailsFieldTypes.house_number
            ]
        default:
            return []
    }
}

export const vehicleTypes = {
    truck: 'משאית',
    bus: 'אוטובוס',
    vehicle: 'רכב',
    motorcycle: 'אופנוע',
    airplane: 'מטוס',
    boat: 'סירה',
    yacht: 'יאכטה',
    ship: 'אונייה'
}

export const guardianTypes = {
    sibling: 'אחד מהאחים',
    court: 'מינוי לפי בית משפט',
    other: 'אחר'
}

export const giveToFamilyTypesKeys = {
    parents: 'parents',
    siblings: 'siblings',
    friends: 'friends',
    grandChildren: 'grandChildren'
}

export const toolsTypes = {
    silver: 'כלי כסף',
    gold: 'כלי זהב',
    food: 'כלי אוכל',
    judaica: 'יודאיקה',
    other: 'אחר'
}

export const giveToFamilyTypes = {
    [giveToFamilyTypesKeys.parents]: 'הורים',
    [giveToFamilyTypesKeys.siblings]: 'אחים אחיות',
    [giveToFamilyTypesKeys.friends]: 'חברים ומכרים',
    [giveToFamilyTypesKeys.grandChildren]: 'נכדים נכדות'
}

export const inheritanceKeys = {
    real_estate: 'real_estate',
    future_real_estate: 'future_real_estate'
}

export const stepNames = [
    "הזדהות",
    "מצב משפחתי ויורשים",
    "מקרקעין",
    "מטלטלין",
    "כספים",
    "לוויה ורצונות"
]

export const inheritanceKeysStep4 = {
    vehicle: 'vehicle',
    jewelry: 'jewelry',
    tools: 'tools',
    art: 'art',
    musical_instruments: 'musical_instruments',
    unique_collection: 'unique_collection',
    furniture: 'furniture',
    books: 'books',
    clothes: 'clothes',
    appliances: 'appliances',
    sport_equipment: 'sport_equipment',
    pets: 'pets',
    digital_assets: 'digital_assets',
    items: 'items',
    other_inheritance: 'other_inheritance',
    future_items: 'future_items'
}

// TODO: translate enums

const translation = {
    // Step 1
    step1: `שלב א׳ - ${stepNames[0]}`,
    first_name: first_name,
    last_name: last_name,
    birthDate: birth_date,
    hebrewBirthDate: hebrew_birth_date,
    gender: gender,
    edited_by: 'האם אתה עורך לבד את צוואתך?',
    person_id,
    email: 'כתובת מייל',
    phone: 'טלפון נייד',
    address: 'כתובת',
    citizenship: 'אזרחות - האם יש בבעלותך אזרחות נוספת?',
    passport_id: 'מספר דרכון',

    // Step 2
    step2: `שלב ב׳ - ${stepNames[1]}`,
    status: 'סטטוס',
    partner_married_gender: 'אני נשוי ל-',
    partner_spouse_gender: 'אני מנהל זוגיות עם-',
    partner_first_name: first_name,
    partner_last_name: last_name,
    partner_id: person_id,
    ex_partner_gain: 'האם תרצה להקצות לגרושך/גרושתך מהצוואה?',
    ex_partners: {
        gender,
        ...personInfo
    },
    kids: 'ילדים',
    kidNameText: 'שם הילד',
    num_of_kids: 'מספר ילדים',
    kids_data: {
        ...personInfo,
        gender: gender,
        birthDate: birth_date,
        hebrewBirthDate: hebrew_birth_date,
        has_disability: 'מוגבלות',
        guardian_text: 'מי יהיה האפוטרופוס עליו?',
        guardian_data: {
            type: 'סוג',
            ...personInfo
        }
    },
    guardianDetailsText: 'פרטי אפוטרופוס',
    give_to_family: 'האם יש הורים / אחים / חברים או אחרים שתרצה להפריש להם מצוואתך?',
    give_to_family_type: {
        [giveToFamilyTypesKeys.parents]: personInfo,
        [giveToFamilyTypesKeys.siblings]: personInfo,
        [giveToFamilyTypesKeys.friends]: personInfo,
        [giveToFamilyTypesKeys.grandChildren]: personInfo
    },
    // Step 3
    step3: `שלב ג׳ - ${stepNames[2]}`,
    real_estate_title: 'נדלן',
    real_estate: 'האם קיימים ברשותך נכסי נדלן?',
    real_estate_data:
    {
        type: 'סוג',
        own_percentage: {
            question: 'כמה אחוז בבעלותך?',
            answer: 'סכום'
        },
        details: realEstateDetailsFieldTypes,
        ...assetsData
    },
    future_real_estate_title: 'הורשה בעתיד',
    future_real_estate: 'נכס נדלני, בין אם יש לך עכשיו ובין אם יהיה לך בעתיד, ששכחת או לא ציינת למי היית רוצה להוריש אותו?',
    future_real_estate_data: assetsData,

    inheritorsText: 'יורשים',

    // Step 4
    step4: `שלב ד׳ - ${stepNames[3]}`,
    vehicle_title: 'רכב',
    vehicle: 'האם קיים ברשותך כלי תחבורה?',
    vehicle_data:
    {
        // TODO: enum
        type: 'סוג',
        details: {
            license_plate: 'זיהוי',
            manufacturer: 'יצרן',
            model: 'דגם',
            year: 'שנה',
            color: 'צבע',
        },
        ...assetsData
    },
    jewelry_title: 'תכשיטים',
    jewelry: 'האם קיים ברשותך תכשיטים שהיית רוצה להוריש?',
    jewelry_data: assetsData,
    tools_title: 'כלים',
    tools: 'האם קיים ברשותך כלים שהיית רוצה להוריש?',
    tools_data:
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
    other_inheritance_data: {
        type,
        ...assetsData
    },
    future_items_title: 'הורשה בעתיד',
    future_items: 'מטלטלין, בין אם יש לך עכשיו ובין אם יהיה לך בעתיד, ששכחת או לא ציינת למי היית רוצה להוריש אותו?',
    future_items_data: assetsData,

    // Step 5
    step5: `שלב ה׳ - ${stepNames[4]}`,
    money_title: 'כסף',
    money: 'כמה כסף בערך קיים ברשותך או בבנק?',
    money_ils: 'ש״ח',
    bank_accounts_title: 'חשבונות בנק',
    bank_accounts:
    {
        bank_name: 'שם הבנק',
        account_number: 'מספר חשבון',
        branch_number: 'מספר סניף'
    },
    provident_fund: 'האם קיימת ברשותך קופת גמל?',
    provident_fund_title: 'קופת גמל',
    provident_fund_data: fund_data,
    study_fund: 'האם קיימת ברשותך קרן השתלמות?',
    study_fund_title: 'קרן השתלמות',
    study_fund_data: fund_data,
    non_profit_provision: 'האם תרצה להפריש מהירושה שלך לעמותות הפועלות כאן בארץ?',
    non_profit_provision_title: 'הפרשה לעמותה',
    non_profit_provision_data: {
        non_profit_provision_size: 'האם תרצה להפריש לעמותה גדולה או קטנה?',
        non_profit_name: 'שם העמותה',
        non_profit_provision_percentage: 'אחוז',
        non_profit_message: 'תרצה להשאיר הודעה לעמותה?',
        non_profit_message_content: 'תוכן ההודעה'
    },
    money_division: 'איך תרצה לחלק את עיזבונך הכספי בין משפחתך?',
    money_division_inheritors: {
        ...personInfo,
        percentage
    },

    // Step 6
    step6: `שלב ו׳ - ${stepNames[5]}`,
    not_applied_before_spouse: 'תרצה להוסיף סעיף שכל האמור בצוואה לא יחול לפני פטירת אשתך?',
    burial_location: 'איפה תרצה להיקבר?',
    funeral_in_charge: 'תרצה שמישהו יהיה אחראי על טקס ההלוויה?',
    funeral_in_charge_details: personInfo,
    edi_card: 'האם קיים ברשותך כרטיס "אדי" הנותן אפשרות לתרומת איברים מגופך?',
    organ_donation: 'האם תרצה לתרום איברים בעזיבתך?',
    relatives_message: 'האם תרצה לכתוב משהו ליקירך?'
}

export default translation