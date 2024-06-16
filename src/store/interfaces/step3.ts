import { ItemNoDecription, AssetsData, TransData } from "./globals"

export interface RealEstateDetailsFieldTypes {
    country: string
    city: string
    street: string
    house_number: string
    block: string
    lot: string
    sub_lot: string
    size: string
    description: string
}

interface RealEstateData extends ItemNoDecription {
    type: string
    own_percentage: string
    details: RealEstateDetailsFieldTypes
}


export interface Step3 {
    title: string
    real_estate_title: string
    real_estate: string
    real_estate_data: TransData<RealEstateData>
    future_real_estate_title: string
    future_real_estate: string
    future_real_estate_data: TransData<AssetsData>
    inheritorsText: string
}