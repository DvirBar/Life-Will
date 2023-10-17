import React, { createContext, useState } from "react";


export const SiteContext = createContext(null);


const SiteProvider = ({ children }) => {
    const [data, setData] = useState({
        first_name: 'asd',
        last_name: 'asd',
        edited_by: 'כן',
        email: 'yarindayan11@gmail.com',
        birthDate: '03/23/2000',
        // birthDate: Date.now(),
        gender: 'other',
        person_id: '',
        citizenship: 'לא',
        passport_id: '',
        phone: '0534270777',
        address: '',
        status: 'רווק',
        partner_gender: '',
        partner_first_name: '',
        partner_last_name: '',
        partner_id: '',
        ex_partner_gain: 'לא',
        kids: 'לא',
        num_of_kids: 0,
        kids_data: [{
            id: '',
            first_name: '',
            last_name: '',
        }],
        real_estate_data: [{
            type: '',
            country: '',
            city: '',
            street: '',
            house_number: '',
            block: '',
            lot: '',
            size: '',
            ground_description: '',
            type_percent: 0,
            share_percent: 0,
            general_description: '',
            inheritor_type: '',
            inheritor: []
        }],
        vehicle_data: [{
            type: '',
            license_plate: '',
            manufacturer: '',
            model: '',
            year: '',
            color: '',
            description: '',
            size: '',
            ground_description: '',
            type_percent: 0,
            share_percent: 0,
            vehicle_is_desc: 'לא',
            general_description: '',
            inheritor_type: '',
            inheritor: []
        }],
        jewelry_data: [{
            description: '',
            share_percent: 0,
            general_description: '',
            jewelry_is_desc: 'לא',
            inheritor_type: '',
            inheritor: []
        }],
        tool_data: [{
            description: '',
            share_percent: 0,
            general_description: '',
            tool_is_desc: 'לא',
            inheritor_type: '',
            inheritor: []
        }],
        art_data: [{
            description: '',
            share_percent: 0,
            general_description: '',
            art_is_desc: 'לא',
            inheritor_type: '',
            inheritor: []
        }],
        give_to_family: 'לא',
        give_to_family_type: '',
        vehicle: 'לא',
        jewelry: 'לא',
        tool: 'לא',
        art: 'לא',
        real_estate: 'לא',
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