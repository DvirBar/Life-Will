const first_name = 'שם'
const last_name = 'שם משפחה'
const birth_date = 'תאריך לידה'
const hebrew_birth_date = 'תאריך לידה עברי'
const id = 'תעודת זהות'
const gender = 'מגדר'
const personInfo = {
    first_name,
    last_name,
    id
}
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

const fund_data = {
    fund_name: 'שם הקופה',
    fund_number: 'מספר הקופה'
}

const answers = {
    yes: 'כן',
    no: 'לא'
}

const percentage = 'אחוז'

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
        parents: personInfo,
        siblings: personInfo,
        friends: personInfo,
        grandchildren: personInfo
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
    provident_fund_data: fund_data,
    study_fund: '?האם קיימת ברשותך קרן השתלמות',
    study_fund_data: fund_data,
    non_profit_provision: 'האם תרצה להפריש מהירושה שלך לעמותות הפועלות כאן בארץ?',
    non_profit_provision_data: {
        non_profit_provision_size: 'האם תרצה להפריש לעמותה גדולה או קטנה?',
        non_profit_name: 'שם העמותה',
        non_profit_provision_percentage: 'אחוז',
        non_profit_message: 'תרצה להשאיר הודעה לעמותה?',
        non_profit_message_content: 'תוכן ההודעה'
    },
    money_devision: 'איך תרצה לחלק את עיזבונך הכספי בין משפחתך?',
    money_devision_inheritors: {
        ...personInfo,
        percentage
    },
    // Step 6
    not_applied_before_spouse: 'תרצה להוסיף סעיף שכל האמור בצוואה לא יחול לפני פטירת אשתך?',
    burial_location: 'איפה תרצה להיקבר?',
    funeral_in_charge: 'תרצה שמישהו יהיה אחראי על טקס ההלוויה?',
    funeral_in_charge_details: personInfo,
    edi_card: 'האם קיים ברשותך כרטיס "אדי" הנותן אפשרות לתרומת איברים מגופך?',
    organ_donation: 'האם תרצה לתרום איברים בעזיבתך?',
    relatives_message: 'האם תרצה לכתוב משהו ליקירך?'
}