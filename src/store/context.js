import React, { createContext, useState } from "react";

export const SiteContext = createContext(null);

const SiteProvider = ({ children }) => {
    const [data, setData] = useState({
        // Step 1
        first_name: '',
        last_name: '',
        birthDate: '',
        // TODO: Should probably be enum
        hebrewBirthDate: "",
        gender: 'other',
        edited_by: 'כן',
        // TODO: Add field
        person_id: '',
        email: '',
        phone: '',
        address: '',
        citizenship: 'לא',
        passport_id: '',
        // Step 2
        // TODO: should probably be enum
        status: '',
        partner_gender: '',
        partner_first_name: '',
        partner_last_name: '',
        partner_id: '',
        ex_partner_gain: 'לא',
        ex_partner_first_name: '',
        ex_partner_last_name: '',
        // TODO: enum
        kids: '',
        num_of_kids: '',
        kids_data: [
            {
                person_id: '',
                gender: '',
                first_name: '',
                last_name: '',
                birthDate: '',
                hebrewBirthDate: '',
                has_disability: '',
                guardian: ''
            }
        ],
        give_to_family: 'לא',
        // TODO: make it multi option
        // TODO: enum
        give_to_family_type: {
            parents: [],
            siblings: [],
            friends: [],
            grandchildren: []
        },
        // Step 3
        // TODO: enum
        real_estate: 'לא',
        real_estate_data: [
            {
                // TODO: enum
                type: '',
                own_percentage: '',
                country: '',
                city: '',
                street: '',
                house_number: '',
                block: '',
                lot: '',
                sub_lot: '',
                size: '',
                description: '',
                inheritors: [
                    {
                        // TODO: enum
                        type: '',
                        percentage: '',
                        remarks: ''
                    }
                ]
            }
        ],
        vehicle: 'לא',
        vehicle_data: [
            {
                // TODO: enum
                type: '',
                license_plate: '',
                manufacturer: '',
                model: '',
                year: '',
                color: '',
                description: '',
                inheritors: [
                    {
                        // TODO: enum
                        type: '',
                        percentage: '',
                        remarks: ''
                    }
                ]
            }
        ],
        jewelry: 'לא',
        jewelry_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        tool: 'לא',
        tool_data: [
            {
                // TODO: enum
                type: '',
                description: '',
                inheritors: []
            }
        ],
        art: 'לא',
        art_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        musical_instruments: 'לא',
        musical_instruments_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        unique_collection: 'לא',
        unique_collection_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        furniture: 'לא',
        furniture_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        books: 'לא',
        books_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        clothes: 'לא',
        clothes_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        appliances: 'לא',
        appliances_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        sport_equipment: 'לא',
        sport_equipment_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        pets: 'לא',
        pets_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        digital_assets: 'לא',
        digital_assets_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        items: 'לא',
        items_data: [
            {
                description: '',
                inheritors: []
            }
        ],
        other_inheritance: 'לא',
        other_inheritance_data: [
            {
                // TODO: enum
                type: '',
                description: '',
                inheritors: []
            }
        ],

        // Step 5
        money: '',
        bank_accounts: [
            {
                bank_name: '',
                account_number: '',
                branch_number: ''
            }
        ],
        provident_fund: 'לא',
        provident_fund_data: [
            {
                fund_name: '',
                fund_number: ''
            }
        ],
        study_fund: 'לא',
        study_fund_data: [
            {
                fund_name: '',
                fund_number: ''
            }
        ],
        non_profit_provision: 'לא',
        non_profit_provision_data: [
            {
                // TODO: enum
                non_profit_provision_size: '',
                non_profit_name: '',
                non_profit_provision_percentage: '',
                non_profit_message: 'לא',
                non_profit_message_content: ''
            }
        ],
        // TODO: enum - either equal or by decision
        money_devision: '',
        money_devision_inheritors: [
            {
                first_name: '',
                last_name: '',
                person_id: '',
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
            person_id: ''
        },
        edi_card: '',
        organ_donation: '',
        relatives_message: ''
    })

    const [selectedStage, setSelectedStage] = useState(0)
    const [selectedStep, setSelectedStep] = useState(0)

    const moveNextStep = (isFinalStep = false) => {
        setSelectedStep(currStep => {
            if (isFinalStep) {
                return 0
            }

            return currStep + 1
        })

        if (isFinalStep) {
            setSelectedStage(currStage => currStage + 1)
        }
    }

    const movePrevStep = () => {
        setSelectedStep(currStep => {
            if (currStep > 0) {
                return currStep - 1
            }
        })

        setSelectedStage(currStage => {
            if (currStage > 0) {
                return currStage + 1
            }
        })
    }

    const selectStage = (stage) => {
        setSelectedStage(stage)
        setSelectedStep(0)
    }

    const value = {
        data,
        selectedStage,
        selectedStep,
        selectStage,
        moveNextStep,
        movePrevStep
    }

    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;