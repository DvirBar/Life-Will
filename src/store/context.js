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

export const defaultRealEstateData = {
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
				gender: ''
			}
		],
		// TODO: enum
		kids: '',
		num_of_kids: '',
		kids_data: [
			{
				...personInfo,
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
			[giveToFamilyTypesKeys.parents]: [],
			[giveToFamilyTypesKeys.siblings]: [],
			[giveToFamilyTypesKeys.friends]: [],
			[giveToFamilyTypesKeys.grandChildren]: []
		},

		// Step 3
		// TODO: enum
		real_estate: answers.no,
		real_estate_data: [
		],
		future_real_estate_data: itemNoDescription,

		// Step 4
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
				...itemData
			}
		],
		jewelry: 'לא',
		jewelry_data: [itemData],
		tool: 'לא',
		tool_data: [
			{
				// TODO: enum
				type: '',
				...itemData
			}
		],
		art: 'לא',
		art_data: [itemData],
		musical_instruments: 'לא',
		musical_instruments_data: [itemData],
		unique_collection: 'לא',
		unique_collection_data: [itemData],
		furniture: 'לא',
		furniture_data: [itemData],
		books: 'לא',
		books_data: [itemData],
		clothes: 'לא',
		clothes_data: [itemData],
		appliances: 'לא',
		appliances_data: [itemData],
		sport_equipment: 'לא',
		sport_equipment_data: [itemData],
		pets: 'לא',
		pets_data: [itemData],
		digital_assets: 'לא',
		digital_assets_data: [itemData],
		items: 'לא',
		items_data: [itemData],
		other_inheritance: 'לא',
		other_inheritance_data: [itemData],
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

	let inheritors = null

	// TODO: in inheritors - what about ex partners?
	const getInheritors = () => {
		inheritors = [
			...(data.kids_data.map(kid => ({
				first_name: kid.first_name,
				last_name: kid.last_name,
				person_id: kid.person_id,
				type: inheritorsTypes.children
			}))),
			{
				first_name: data.partner_first_name,
				last_name: data.partner_last_name,
				person_id: data.partner_id,
				type: inheritorsTypes.spouse,
			},
			...(data.ex_partners.map(ex => ({
				first_name: ex.first_name,
				last_name: ex.last_name,
				person_id: ex.person_id,
				type: inheritorsTypes.inheritors
			}))),
		]

		for (const key of Object.keys(data.give_to_family_type)) {
			const currentTypeItem = data.give_to_family_type[key]
			for (const item of currentTypeItem) {
				inheritors.push({
					first_name: item.first_name,
					last_name: item.last_name,
					person_id: item.person_id,
					type: inheritorsTypes.inheritors
				})
			}
		}

		return inheritors
	}

	const value = {
		data,
		setData,
		selectedStage,
		selectedStep,
		selectStage,
		moveNextStep,
		movePrevStep,
		getInheritors
	}

	return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;