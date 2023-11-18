import React, { createContext, useState } from "react";
import { answers, giveToFamilyTypesKeys, inheritorsTypes } from "./translation";

export const SiteContext = createContext(null);
// TODO: Add types of non profits

const personInfo = {
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

const SiteProvider = ({ children }) => {
	const [data, setData] = useState({
		// Step 1
		first_name: '',
		last_name: '',
		birthDate: '',
		// TODO: Should probably be enum
		hebrewBirthDate,
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
		// TODO: CLARIFY - if status is married we should also show ex partners (not just when divorced) 
		ex_partner_gain: 'לא',
		ex_partners: [
			{
				...personInfo,
				first_name: 'גרוש',
				last_name: 'גרוש',
				person_id: '0000000000',
				gender: ''
			}
		],
		// TODO: enum
		kids: '',
		num_of_kids: '',
		kids_data: [
			{
				...personInfo,
				first_name: 'ילד',
				last_name: 'ילד',
				person_id: '12333333333',
				gender: '',
				birthDate: '',
				hebrewBirthDate,
				has_disability: '',
				guardian_data: null
			}
		],
		give_to_family: 'לא',
		// TODO: make it multi option
		// TODO: enum
		give_to_family_type: {
			[giveToFamilyTypesKeys.parents]: [
				{
					gender: 'זכר',
					first_name: 'הורה',
					last_name: 'ישראלי',
					person_id: '222222223',
				}
			],
			[giveToFamilyTypesKeys.siblings]: [
				{
					gender: 'נקבה',
					first_name: 'אחות',
					last_name: 'ישראלי',
					person_id: '222222222',
				}
			],
			[giveToFamilyTypesKeys.friends]: [
				{
					gender: 'זכר',
					first_name: 'חבר',
					last_name: 'ישראלי',
					person_id: '222222224',
				}
			],
			[giveToFamilyTypesKeys.grandChildren]: [
				{
					gender: 'נקבה',
					first_name: 'נכדה',
					last_name: 'ישראלי',
					person_id: '222222225',
				}
			]
		},

		// Step 3
		// TODO: enum
		real_estate: answers.no,
		real_estate_data: [],
		future_real_estate_data: defaults.future_real_estate_data,

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
		future_items_data: itemNoDescription,

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
				non_profit_name: '',
				non_profit_provision_percentage: '',
				non_profit_message: 'לא',
				non_profit_message_content: ''
			}
		],
		// TODO: enum - either equal or by decision
		money_division: '',
		money_division_inheritors: [
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
		relatives_message: '',
		relatives_message_content: 'הודעה שנכתבה ליקירים'
	})

	const [selectedStage, setSelectedStage] = useState(2)
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

	const movePrevStep = (isFirstStep) => {
		setSelectedStage(currStage => {
			if (currStage > 0) {
				return currStage - 1
			}
		})

		setSelectedStep(currStep => {
			if (currStep > 0) {
				return currStep + 1
			}
		})
	}

	const selectStage = (stage) => {
		setSelectedStage(stage)
		setSelectedStep(0)
	}

	const inheritors = {}

	// TODO: in inheritors - what about ex partners?
	const getInheritors = (inputValues) => {
		const values = inputValues || data
		if (values.partner_first_name?.length > 0) {
			inheritors[inheritorsTypes.spouse] = [{
				first_name: values.partner_first_name,
				last_name: values.partner_last_name,
				person_id: values.partner_id,
				type: inheritorsTypes.spouse,
			}]
		}

		inheritors[inheritorsTypes.children] = [
			...(values.kids_data.map(kid => ({
				first_name: kid.first_name,
				last_name: kid.last_name,
				person_id: kid.person_id,
				type: inheritorsTypes.children
			})))
		]
		inheritors[inheritorsTypes.inheritors] = [
			...(values.ex_partners.map(ex => ({
				first_name: ex.first_name,
				last_name: ex.last_name,
				person_id: ex.person_id,
				type: inheritorsTypes.inheritors
			}))),
		]

		for (const key of Object.keys(values.give_to_family_type)) {
			const currentTypeItem = values.give_to_family_type[key]
			for (const item of currentTypeItem) {
				inheritors[inheritorsTypes.inheritors].push({
					first_name: item.first_name,
					last_name: item.last_name,
					person_id: item.person_id,
					type: inheritorsTypes.inheritors
				})
			}
		}

		return inheritors
	}

	const submitForm = (values, isFinalStep) => {
		setData(values)
		moveNextStep(isFinalStep);
	}

	const value = {
		data,
		setData,
		selectedStage,
		selectedStep,
		selectStage,
		moveNextStep,
		movePrevStep,
		getInheritors,
		submitForm
	}

	return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;