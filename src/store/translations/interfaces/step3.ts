import { ItemNoDecription, AssetsData } from "./globals"

enum RealEstateDetailsFieldTypes {
    country,
    city,
    street,
    house_number,
    block,
    lot,
    sub_lot,
    size,
    description
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
    real_estate_data: RealEstateData | RealEstateData[]
    future_real_estate_title: string
    future_real_estate: string
    future_real_estate_data: AssetsData | AssetsData[]
    inheritorsText: string
}