
import { PersonalInfo, TransData } from "./globals"

export interface BankAccount {
    bank_name: 'שם הבנק',
    account_number: 'מספר חשבון',
    branch_number: 'מספר סניף'
}

export interface ProvidentFund {
    fund_name: string
    fund_number: string
}

export interface StudyFund {
    fund_name: string
    fund_number: string
}

export interface NonProfitProvisionData {
    non_profit_name: string
    non_profit_provision_percentage: string
    non_profit_message_content: string
}
    
export interface NonProfitProvisionDataGender extends NonProfitProvisionData{
    non_profit_provision_size: string,
    non_profit_message: string,
}

export interface MoneyDivisionInheritors extends PersonalInfo {
    percentage: string
}

export interface Step5 {
    title: string
    money_title: string
    money: string
    money_ils: string
    bank_accounts_title: string
    bank_accounts: TransData<BankAccount>
    provident_funds: string
    provident_funds_title: string
    provident_funds_data: TransData<ProvidentFund>
    study_funds: string
    study_funds_title: string
    study_funds_data: TransData<StudyFund>
    non_profit_provision_title: string
    non_profit_provision_data: NonProfitProvisionData
    money_division_inheritors: TransData<MoneyDivisionInheritors>,
}

export interface Step5Gender extends Step5 {
    non_profit_provision: string,
    money_division: string,
    non_profit_provision_data: NonProfitProvisionDataGender
}