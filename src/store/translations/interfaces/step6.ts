import { PersonalInfo } from "./globals";

export interface Step6Gender {
    organ_donation: string
    relatives_message: string
}

export interface Step6 extends Step6Gender {
    title: string,
    // TODO: it's not always "אשתך"
    not_applied_before_spouse: string
    burial_location: string
    funeral_in_charge: string
    funeral_in_charge_details: PersonalInfo
    edi_card: string
    relatives_message_content: string
}