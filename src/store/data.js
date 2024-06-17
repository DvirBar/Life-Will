import { answers, giveToFamilyTypesKeys, realEstateTypes } from "./translation"

export const personInfo = {
    first_name: '',
    last_name: '',
    person_id: '',
}

const itemNoDescription = {
    remarks: '',
    inheritors: []
}

const itemData = {
    description: '',
    ...itemNoDescription
}

const hebrewBirthDate = {
    day: '',
    month: '',
    year: ''
}

export const defaults = {
    guardian: {
        ...personInfo,
        type: ''
    },
    real_estate: {
        type: '',
        own_percentage: '',
        details: {
            country: '',
            city: '',
            street: '',
            house_number: '',
            block: '',
            lot: '',
            sub_lot: '',
            size: '',
            description: '',
        },
        ...itemNoDescription
    },
    future_real_estate_data: itemNoDescription,
    vehicle: {
        type: '',
        details: {
            license_plate: '',
            manufacturer: '',
            model: '',
            year: '',
            color: '',
        },
        ...itemData
    },
    jewelry: itemData,
    tool: {
        type: '',
        ...itemData
    },
    art: itemData,
    musical_instruments: itemData,
    unique_collection: itemData,
    furniture: itemData,
    books: itemData,
    clothes: itemData,
    appliances: itemData,
    sport_equipment: itemData,
    pets: itemData,
    digital_assets: itemData,
    items: itemData,
    other_inheritance: itemData,
    bank_accounts: {
        bank_name: '',
        account_number: '',
        branch_number: ''
    },
    provident_funds: {
        fund_name: '',
        fund_number: ''
    },
    study_funds: {
        fund_name: '',
        fund_number: ''
    },
    nonProfitProvision: {
        non_profit_name: '',
        non_profit_provision_percentage: '',
        non_profit_message: answers.no,
        non_profit_message_content: ''
    },
    personInfo: {
        gender: '',
        ...personInfo
    },
}

export const defaultItemInheritor = {
    ...personInfo,
    percent: ''
}

export const defaultRealEstateData = {
    type: '',
    own_percentage: '',
    details: {
        country: '',
        city: '',
        street: '',
        house_number: '',
        block: '',
        lot: '',
        sub_lot: '',
        size: '',
    },
    ...itemData
}

export const defaultChildData = {
    person_id: '',
    gender: '',
    first_name: '',
    last_name: '',
    birthDate: '',
    hebrewBirthDate,
    has_disability: 'לא',
    guardian: {
        ...defaults.guardian
    }
}

export const defaultInheritorData = {
    ...personInfo,
}


export const data = {
    // Step 1
    first_name: '',
    last_name: '',
    birthDate: '',
    hebrewBirthDate,
    gender: '',
    edited_by: '',
    person_id: '',
    email: '',
    phone: '',
    address: {
        street: '',
        houseNum: '',
        city: ''
    },
    citizenship: '',
    passport_id: '',
    // Step 2
    status: '',
    partner: {
        ...personInfo,
        gender: '',
        uuid: '6EF5A9FF-7B57-4DA1-BF7A-FC6F2E194C86'
    },
    // TODO: CLARIFY - if status is married we should also show ex partners (not just when divorced) 
    has_ex_partner: '',
    ex_partner_gain: '',
    ex_partners: [],
    kids: answers.yes,
    num_of_kids: '',
    kids_data: [],
    give_to_family: 'לא',
    give_to_family_type: {
        [giveToFamilyTypesKeys.parents]: [],
        [giveToFamilyTypesKeys.siblings]: [],
        [giveToFamilyTypesKeys.friends]: [],
        [giveToFamilyTypesKeys.grandChildren]: []
    },

    // Step 3
    // TODO: enum
    real_estate: answers.no,
    real_estate_data: [
        {
            type: realEstateTypes.appartment,
            own_percentage: '',
            details: {
                country: '',
                city: '',
                street: '',
                house_number: '',
                block: '',
                lot: '',
                sub_lot: '',
                size: '',
            },
            inheritors: [
                {
                    uuid: "",
                    percent: ""
                }
            ]

        }
    ],
    future_real_estate_data: [defaults.future_real_estate_data],

    // Step 4
    vehicle: answers.no,
    vehicle_data: [],
    jewelry: answers.no,
    jewelry_data: [],
    tool: answers.no,
    tool_data: [],
    art: answers.no,
    art_data: [],
    musical_instruments: answers.no,
    musical_instruments_data: [],
    unique_collection: answers.no,
    unique_collection_data: [],
    furniture: answers.no,
    furniture_data: [],
    books: answers.no,
    books_data: [],
    clothes: answers.no,
    clothes_data: [],
    appliances: answers.no,
    appliances_data: [],
    sport_equipment: answers.no,
    sport_equipment_data: [],
    pets: answers.no,
    pets_data: [],
    digital_assets: answers.no,
    digital_assets_data: [],
    items: answers.no,
    items_data: [],
    other_inheritance: answers.no,
    other_inheritance_data: [],
    future_items_data: [itemNoDescription],

    // Step 5
    money: '',
    bank_accounts: [],
    provident_funds: '',
    provident_funds_data: [],
    study_funds: '',
    study_funds_data: [],
    non_profit_provision: '',
    non_profit_provision_data: [],
    // TODO: enum - either equal or by decision
    money_division: '',
    money_division_inheritors: [],
    // Step 6
    not_applied_before_spouse: answers.no,
    burial_location: '',
    funeral_in_charge: answers.no,
    funeral_in_charge_details: {
        first_name: '',
        last_name: '',
        person_id: ''
    },
    edi_card: answers.no,
    organ_donation: answers.no,
    relatives_message: answers.no,
    relatives_message_content: ''
}