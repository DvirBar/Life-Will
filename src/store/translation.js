const first_name = 'שם'
const last_name = 'שם משפחה'
const birth_date = 'תאריך לידה'
const hebrew_birth_date = 'תאריך לידה עברי'
const id = 'תעודת זהות'
const gender = 'מגדר'
const inheritorsData = {
    type: 'יורש',
    percentage: 'אחוז',
    remarks: 'הערות'
}

const assetsData = {
    description: 'תיאור',
    inheritors: inheritorsData
}

const type = 'סוג'

// TODO: translate enums

const translation = {
    // Step 1
    first_name: first_name,
    last_name: last_name,
    birthDate: birth_date,
    hebrewBirthDate: hebrew_birth_date,
    gender: gender,
    edited_by: 'האם אתה עורך לבד את צוואתך?',
    person_id: id,
    email: 'כתובת מייל',
    phone: 'פלאפון',
    address: 'כתובת',
    citizenship: 'אזרחות - האם יש בבעלותך אזרחות נוספת?',
    passport_id: 'מספר דרכון',
    // Step 2
    status: 'סטטוס',
    partner_married_gender: 'אני נשוי ל-',
    partner_spouse_gender: 'אני מנהל זוגיות עם-',
    partner_first_name: first_name,
    partner_last_name: last_name,
    partner_id: id,
    ex_partner_gain: 'האם תרגצה להקצות לגרושך/גרושתך מהצוואה?',
    ex_partner_first_name: first_name,
    ex_partner_last_name: last_name,
    kids: 'ילדים',
    num_of_kids: 'מספר ילדים',
    kids_data: {
        id: id,
        gender: gender,
        first_name: first_name,
        last_name: last_name,
        birthDate: birth_date,
        hebrewBirthDate: hebrew_birth_date,
        has_disability: 'ילד עם מוגבלות',
        guardian: 'מי יהיה האפוטרופוס עליו?'
    },
    give_to_family: 'האם יש הורים / אחים / חברים או אחרים שתרצה להפריש להם מצוואתך?',
    give_to_family_type: {
        parents: {
            first_name,
            last_name,
            id
        },
        siblings: {
            first_name,
            last_name,
            id
        },
        friends: {
            first_name,
            last_name,
            id
        },
        grandchildren: {
            first_name,
            last_name,
            id
        }
    },
    // Step 3
    real_estate_title: 'נדלן',
    real_estate: 'האם קיימים ברשותך נכסי נדלן?',
    real_estate_data:
    {
        type: 'סוג הנכס נדלן',
        own_percentage: 'כמה אחוז בבעלותך?',
        country: 'מדינה',
        city: 'עיר',
        street: 'רחוב',
        house_number: 'מספר בית',
        block: 'מספר גוש',
        lot: 'מספר חלקה',
        sub_lot: 'מספר תת חלקה',
        size: 'גודל',
        ...assetsData
    },
    vehicle_title: 'רכב',
    vehicle: 'האם קיים ברשותך כלי תחבורה?',
    vehicle_data:
    {
        // TODO: enum
        type: 'סוג',
        license_plate: 'מספר זיהוי',
        manufacturer: 'יצרן',
        model: 'דגם',
        year: 'שנה',
        color: 'צבע',
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
    other_inheritance_data: {
        type,
        ...assetsData
    },

    // Step 5
    money_title: 'כסף',
    money: 'כמה כסף בערך קיים ברשותך או בבנק?',
    bank_accounts_title: 'חשבונות בנק',
    bank_accounts:
    {
        bank_name: 'שם הבנק',
        account_number: 'מספר חשבון',
        branch_number: 'מספר סניף'
    },

    provident_fund: 'האם קיימת ברשותך קופת גמל?',
    provident_fund_data: {
        fund_name: 'שם הקופה',
        fund_number: 'מספר הקופה'
    },
    study_fund: 'האם קיימת ברשותך קרן השתלמות',
    study_fund_data: {
        fund_name: '',
        fund_number: ''
    },
    non_profit_provision: 'לא',
    non_profit_provision_data: [
        {
            // TODO: enum
            non_profit_provision_size: '',
            // TODO: CLARIFY: should one specify a specific non_profit?
            non_profit_name: '',
            non_profit_provision_percentage: '',
            non_profit_message: 'לא',
            non_profit_message_content: ''
        }
    ],
    // TODO: enum - either equal or by decision
    money_devision: '',
    // TODO: CLARIFY - if equal is chosen, do we still need to specify?
    money_devision_inheritors: [
        {
            first_name: '',
            last_name: '',
            // TODO: CLARIFY - what details?
            details: '',
            percentage: ''
        }
    ],
    // Step 6
    not_applied_before_spouse: '',
    burial_location: '',
    funeral_in_charge: '',
    funeral_in_charge_details: {
        first_name: '',
        last_name: '',
        id: ''
    },
    edi_card: '',
    organ_donation: '',
    // TODO: CLARIFY - can they write something for multiple people?
    relatives_message: ''
}