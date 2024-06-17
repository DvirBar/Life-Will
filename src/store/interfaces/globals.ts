export interface PersonalInfo {
    first_name: string
    last_name: string
    person_id: string
}

export interface ExtendedPersonalInfo extends PersonalInfo {
    gender: string
    birthDate: string
    hebrewBirthDate: string
}

export interface InheritorsData extends PersonalInfo {
    type: string
    percentage: string
}

export interface ItemNoDecription {
    remarks: string
    inheritors: InheritorsData
}

export interface AssetsData extends ItemNoDecription {
    description: string
}

export interface StatusTypes {
    separate: string,
    widow: string,
    single: string,
    solitary: string,
    married: string,
    partnership: string,
    divorced: string
}

export type TransData<T> = T | T[]
