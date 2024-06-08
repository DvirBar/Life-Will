import { ExtendedPersonalInfo, PersonalInfo } from "./globals"

interface Partner extends PersonalInfo {
    married_gender: string
    spouse_gender: string
}

interface ExPartner extends PersonalInfo {
    title: string 
    gender: string
}

interface Step2Gender {
    partner: Partner
    has_ex_partner: string
    ex_partner_gain: string
    give_to_family: string,
}

interface GuardianData extends PersonalInfo {
    type: string
}

interface KidsData extends ExtendedPersonalInfo {
    has_disability: string
    guardian_text: string,
    guardian_data: GuardianData
}

enum GiveToFamilyTypesKeys {
    parents,
    siblings,
    friends,
    grandChildren
}

interface Step2 extends Step2Gender {
    title: string
    status: string,
    ex_partner: string,
    ex_partners: ExPartner,
    kids: string,
    kidNameText: string,
    num_of_kids: string,
    kids_data: KidsData
    guardianDetailsText: string,
    give_to_family: string,
    give_to_family_type: {
        [GiveToFamilyTypesKeys.parents]: PersonalInfo,
        [GiveToFamilyTypesKeys.siblings]: PersonalInfo,
        [GiveToFamilyTypesKeys.friends]: PersonalInfo,
        [GiveToFamilyTypesKeys.grandChildren]: PersonalInfo
    },
}