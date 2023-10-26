import { answers, giveToFamilyTypesKeys, guardianTypes, inheritorsTypes, moneyDivision, realEstateTypes, toolsTypes, vehicleTypes } from "./translation";


const sampleInheritors = [
    {
        type: inheritorsTypes.children,
        first_name: 'ילד',
        last_name: 'ישראלי',
        person_id: '222222222',
        percentage: "30%"
    },
    {
        type: inheritorsTypes.spouse,
        first_name: 'ישראלה',
        last_name: 'ישראלי',
        person_id: '111111111',
        percentage: "60%"
    },
    {
        type: inheritorsTypes.nonprofit,
        first_name: 'עמותה כלשהי',
        percentage: "10%"
    }
]

const kids_data = [
    {
        person_id: '444444444',
        gender: 'זכר',
        first_name: 'ילד1',
        last_name: 'ישראלי',
        birthDate: '01/01/2000',
        hebrewBirthDate: 'כ״ג טבת תש״ס',
        has_disability: 'לא',
        guardian: null
    },
    {
        person_id: '555555555',
        gender: 'נקבה',
        first_name: 'ילד2',
        last_name: 'ישראלי',
        birthDate: '01/01/2017',
        hebrewBirthDate: 'ג׳ טבת תשע״ז',
        has_disability: 'לא',
        guardian_data: {
            type: guardianTypes.other,
            first_name: 'אפוטרופוס',
            last_name: 'אפוטרופוס',
            person_id: '666666666'
        }
    },
    {
        person_id: '777777777',
        gender: 'זכר',
        first_name: 'ילד3',
        last_name: 'ישראלי',
        birthDate: '01/01/2002',
        hebrewBirthDate: 'י״ז טבת תשס״ב',
        has_disability: 'כן',
        guardian_data: {
            type: guardianTypes.other,
            first_name: 'אפוטרופוס',
            last_name: 'אפוטרופוס',
            person_id: '666666666'
        }
    }
]

const sampleNoDescription = {
    remarks: 'אלו הערות בכתב שנוספו',
    inheritors: sampleInheritors
}

const sampleData = {
    description: 'כאן כתוב תיאור',
    ...sampleNoDescription
}

const data = {
    // Step 1
    first_name: 'ישראל',
    last_name: 'ישראלי',
    birthDate: '01/01/1900',
    // TODO: Should probably be enum
    hebrewBirthDate: "א׳ בשבט תר״ס",
    gender: 'זכר',
    edited_by: answers.yes,
    // TODO: Add field
    person_id: '123456789',
    email: 'example@gmail.com',
    phone: '000-0000000',
    address: 'רחוב 1, תל אביב',
    citizenship: answers.yes,
    passport_id: '123456789',
    // Step 2
    // TODO: should probably be enum
    status: 'נשוי',
    partner_gender: 'אישה',
    partner_first_name: 'ישראלה',
    partner_last_name: 'ישראלי',
    partner_id: '111111111',
    ex_partner_gain: answers.yes,
    ex_partners: [
        {
            first_name: 'שרה',
            last_name: 'כהן',
            person_id: '222222222',
            gender: 'נקבה'
        },
        {
            first_name: 'רבקה',
            last_name: 'לוי',
            person_id: '333333333',
            gender: 'נקבה'
        }
    ],
    // TODO: enum
    kids: answers.yes,
    num_of_kids: '3',
    kids_data,
    give_to_family: answers.yes,
    // TODO: make it multi option
    // TODO: enum
    give_to_family_type: {
        [giveToFamilyTypesKeys.parents]: [
            {
                gender: 'זכר',
                first_name: 'הורה',
                last_name: 'ישראלי',
                person_id: '222222222'
            }
        ],
        [giveToFamilyTypesKeys.siblings]: [
            {
                gender: 'נקבה',
                first_name: 'אחות',
                last_name: 'ישראלי',
                person_id: '222222222'
            }
        ],
        [giveToFamilyTypesKeys.friends]: [
            {
                gender: 'זכר',
                first_name: 'חבר',
                last_name: 'ישראלי',
                person_id: '222222222'
            }
        ],
        [giveToFamilyTypesKeys.grandChildren]: [
            {
                gender: 'נקבה',
                first_name: 'נכדה',
                last_name: 'ישראלי',
                person_id: '222222222'
            }
        ]
    },
    // Step 3
    real_estate: answers.yes,
    real_estate_data: [
        {
            type: realEstateTypes.appartment,
            own_percentage: '70%',
            details: {
                country: 'ישראל',
                city: 'תל אביב',
                street: 'רחוב1',
                house_number: '20',
                block: '7',
                lot: '2',
                sub_lot: '1',
                size: '',
            },
            ...sampleData
        },
        {
            type: realEstateTypes.building,
            own_percentage: '100%',
            details: {
                country: 'ישראל',
                city: 'תל אביב',
                street: 'רחוב1',
                house_number: '20',
            },
            ...sampleData
        },
    ],
    future_real_estate_data: [sampleNoDescription],

    // Step 4
    vehicle: answers.yes,
    vehicle_data: [
        {
            type: vehicleTypes.airplane,
            details: {
                license_plate: '4X-CDR',
                manufacturer: 'ססנה',
                model: '172',
                year: '1997',
                color: 'כחול',
            },
            ...sampleData
        },
        {
            type: vehicleTypes.vehicle,
            details: {
                license_plate: '1111111',
                manufacturer: 'סוסיתא',
                model: 'רום כרמל',
                year: '1981',
                color: 'ירוק',
            },
            ...sampleData
        }
    ],
    jewelry: answers.yes,
    jewelry_data: [sampleData],
    tools: answers.yes,
    tools_data: [{
        type: toolsTypes.other,
        ...sampleData
    }],
    art: answers.no,
    art_data: [],
    musical_instruments: answers.yes,
    musical_instruments_data: [sampleData],
    unique_collection: answers.no,
    unique_collection_data: [],
    furniture: answers.yes,
    furniture_data: [sampleData],
    books: answers.no,
    books_data: [],
    clothes: answers.yes,
    clothes_data: [sampleData],
    appliances: answers.yes,
    appliances_data: [sampleData],
    sport_equipment: answers.no,
    sport_equipment_data: [],
    pets: answers.yes,
    pets_data: [sampleData],
    digital_assets: answers.no,
    digital_assets_data: [],
    items: answers.yes,
    items_data: [sampleData],
    other_inheritance: answers.no,
    other_inheritance_data: [],
    future_items_data: [sampleNoDescription],

    // Step 5
    money: '1000000',
    bank_accounts: [
        {
            bank_name: 'בנק הפועלים',
            account_number: '11111111',
            branch_number: '100'
        }
    ],
    provident_fund: answers.yes,
    provident_fund_data: [
        {
            fund_name: 'קופת גמל',
            fund_number: '1111'
        }
    ],
    study_fund: answers.yes,
    study_fund_data: [
        {
            fund_name: 'קרן השתלמות',
            fund_number: '2222'
        }
    ],
    non_profit_provision: answers.yes,
    non_profit_provision_data: [
        {
            // TODO: enum
            non_profit_name: 'המכון הלאומי לשיקום',
            non_profit_provision_percentage: '10%',
            non_profit_message: answers.yes,
            non_profit_message_content: 'הודעה שהושארה לעמותה'
        }
    ],
    // TODO: enum - either equal or by decision
    money_division: moneyDivision.byDecision,
    money_division_inheritors: [
        {
            ...kids_data[0],
            percentage: '30%'
        },
        {
            ...kids_data[1],
            percentage: '30%'
        },
        {
            ...kids_data[2],
            percentage: '30%'
        },
        {
            first_name: 'ישראלה',
            last_name: 'ישראלי',
            person_id: '111111111',
            percentage: '10%'
        },
    ],

    // Step 6
    not_applied_before_spouse: answers.no,
    burial_location: 'טקסט פתוח על מקום הקבורה',
    funeral_in_charge: answers.yes,
    funeral_in_charge_details: sampleInheritors[1],
    edi_card: answers.yes,
    organ_donation: answers.yes,
    relatives_message: answers.yes,
    relatives_message_content: 'זה תוכן ההודעה שנכתב ליקירים'
}

export default data