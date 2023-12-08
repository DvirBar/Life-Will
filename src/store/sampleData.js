import { answers, giveToFamilyTypesKeys, guardianTypes, inheritorsTypes, moneyDivision, realEstateTypes, toolsTypes, vehicleTypes } from "./translation";


const sampleInheritors = [
    {
        type: inheritorsTypes.children,
        first_name: 'ילד',
        last_name: 'ישראלי',
        person_id: '222222222',
        percent: "30",
        uuid: "7C8EACC6-BD77-4C0A-9042-31C3F26483BB"
    },
    {
        type: inheritorsTypes.spouse,
        first_name: 'ישראלה',
        last_name: 'ישראלי',
        person_id: '111111111',
        percent: "60",
        uuid: "36CAD714-E0B8-481B-AF44-C52040DBAB25"
    },
    {
        type: inheritorsTypes.nonprofit,
        first_name: 'עמותה כלשהי',
        percent: "10",
        uuid: "C45415D4-0CE3-4433-BB61-551620564A78"
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
        uuid: "C52A1200-C560-40E2-9063-30E68F1E9FF1",
        guardian: {}
    },
    {
        person_id: '555555555',
        gender: 'נקבה',
        first_name: 'ילד2',
        last_name: 'ישראלי',
        birthDate: '01/01/2017',
        hebrewBirthDate: 'ג׳ טבת תשע״ז',
        has_disability: 'לא',
        uuid: "7CB3A66C-E0F0-40CB-A5A9-C467DA41DA76",
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
        uuid: "1AA7D2E9-69BA-4045-BCDE-9FC78FAB2DD1",
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

const hebrewBirthDate = {
    day: 'א׳',
    month: 'תשרי',
    year: 'תשפ״א'
}

const data = {
    // Step 1
    first_name: 'ישראל',
    last_name: 'ישראלי',
    birthDate: '01/01/1900',
    // TODO: Should probably be enum
    hebrewBirthDate,
    // TODO: Add field
    gender: 'זכר',
    edited_by: answers.yes,
    // TODO: Add field
    person_id: '123456789',
    email: 'example@gmail.com',
    phone: '000-0000000',
    citizenship: answers.yes,
    passport_id: '123456789',
    // TODO: change address object in pdf
    address: {
        text: "כתובת",
        street: 'הרב קלישר',
        houseNum: '18',
        city: 'חיפה'
    },
    // Step 2
    status: '',
    // TODO: Fix in PDF
    // TODO: Fix general inheritors
    partner: {
        first_name: 'ישראל',
        last_name: 'ישראלי',
        person_id: '111111111',
        gender: 'נקבה',
        uuid: '6EF5A9FF-7B57-4DA1-BF7A-FC6F2E194C86'
    },
    // TODO: CLARIFY - if status is married we should also show ex partners (not just when divorced) 
    has_ex_partner: answers.yes,
    ex_partner_gain: answers.yes,
    ex_partners: [
        {
            first_name: 'שרה',
            last_name: 'כהן',
            person_id: '222222222',
            gender: 'נקבה',
            uuid: "4E3E2E20-A012-4D5F-AE91-233783610938"
        },
        {
            first_name: 'רבקה',
            last_name: 'לוי',
            person_id: '333333333',
            gender: 'נקבה',
            uuid: "FBBBB778-AF96-4119-AF16-E1DDCD7D1F7F"
        }
    ],
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
                person_id: '222222222',
                uuid: "C322C718-C046-4F40-8500-96B70503DAE0"
            }
        ],
        [giveToFamilyTypesKeys.siblings]: [
            {
                gender: 'נקבה',
                first_name: 'אחות',
                last_name: 'ישראלי',
                person_id: '222222222',
                uuid: "C07B3CD4-4F5C-4E6A-A629-9D774588E36F"
            }
        ],
        [giveToFamilyTypesKeys.friends]: [
            {
                gender: 'זכר',
                first_name: 'חבר',
                last_name: 'ישראלי',
                person_id: '222222222',
                uuid: "8FB0B563-6DA1-4709-A547-A46B23F7D670"

            }
        ],
        [giveToFamilyTypesKeys.grandChildren]: [
            {
                gender: 'נקבה',
                first_name: 'נכדה',
                last_name: 'ישראלי',
                person_id: '222222222',
                uuid: "461C8F0C-A3E0-4BB9-BE85-829477B02FC8"
            }
        ]
    },

    // Step 3
    // TODO: enum
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
    // TODO: Fix key
    tool: answers.yes,
    tool_data: [{
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
    // TODO: check that it's an object and not an array
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
            percent: '30'
        },
        {
            ...kids_data[1],
            percent: '30'
        },
        {
            ...kids_data[2],
            percent: '30'
        },
        {
            first_name: 'ישראלה',
            last_name: 'ישראלי',
            person_id: '111111111',
            percent: '10',
            uuid: '6EF5A9FF-7B57-4DA1-BF7A-FC6F2E194C86',
        },
    ], // TODO: Was here!
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


const data1 = {
    // Step 1
    first_name: 'ישראל',
    last_name: 'ישראלי',
    birthDate: '01/01/1900',
    // TODO: Should probably be enum
    hebrewBirthDate,
    gender: 'זכר',
    edited_by: answers.yes,
    // TODO: Add field
    person_id: '123456789',
    email: 'example@gmail.com',
    phone: '000-0000000',
    address: '',
    citizenship: answers.yes,
    passport_id: '123456789',
    // Step 2
    // TODO: should probably be enum
    status: '',
    partner_gender: 'אישה',
    partner_first_name: null,
    partner_last_name: null,
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
            uuid: '6EF5A9FF-7B57-4DA1-BF7A-FC6F2E194C86',
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