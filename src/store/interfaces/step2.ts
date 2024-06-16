import { ExtendedPersonalInfo, PersonalInfo, TransData } from "./globals"

interface Partner extends PersonalInfo {
    married_gender: string
    spouse_gender: string
}

interface ExPartner extends PersonalInfo {
    title: string 
    gender: string
}

interface GuardianData extends PersonalInfo {
    type: string
}

interface KidsData extends ExtendedPersonalInfo {
    has_disability: string
    guardian_text: string,
    guardian_data: GuardianData
}

export enum GiveToFamilyTypesKeys {
    parents,
    siblings,
    friends,
    grandChildren
}

export interface Step2 {
    title: string
    status: string
    has_ex_partner: string
    ex_partner: string
    ex_partners: ExPartner
    kids: string,
    kidNameText: string,
    num_of_kids: string,
    kids_data: TransData<KidsData>
    guardianDetailsText: string,
    give_to_family_type: {
        [GiveToFamilyTypesKeys.parents]: PersonalInfo,
        [GiveToFamilyTypesKeys.siblings]: PersonalInfo,
        [GiveToFamilyTypesKeys.friends]: PersonalInfo,
        [GiveToFamilyTypesKeys.grandChildren]: PersonalInfo
    },
}

export interface Step2Gender extends Step2{
    partner: Partner
    ex_partner_gain: string
    give_to_family: string
}