import { PersonalInfo } from "./globals";

export interface Step6 {
    title: string,
    funeral_in_charge_details: PersonalInfo
    edi_card: string
    relatives_message_content: string
}

export interface Step6Gender extends Step6 {
    // TODO: it's not always "אשתך"
    not_applied_before_spouse: string
    organ_donation: string
    burial_location: string
    relatives_message: string
    funeral_in_charge: string
}
