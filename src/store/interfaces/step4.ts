import { AssetsData, TransData } from "./globals"

export interface VehicleDetails {
    license_plate: string
    manufacturer: string
    model: string
    year: string
    color: string
}


export interface VehicleData extends AssetsData {
    type: string
    details: VehicleDetails
}

export interface AssestsDataWithType extends AssetsData {
    type: string
}

export interface Step4 {
    title: string,
    vehicle_title: string,
    vehicle: string,
    vehicle_data: TransData<VehicleData>
    jewelry_title: string
    jewelry: string
    jewelry_data: TransData<AssetsData>
    tool_title: string
    tool: string
    tool_data: TransData<AssestsDataWithType>
    art_title: string
    art: string
    art_data: TransData<AssetsData>

    musical_instruments_title: string
    musical_instruments: string
    musical_instruments_data: TransData<AssetsData>
    unique_collection_title: string
    unique_collection: string
    unique_collection_data: TransData<AssetsData>

    furniture_title: string
    furniture: string
    furniture_data: TransData<AssetsData>

    books_title: string
    books: string
    books_data: TransData<AssetsData>

    clothes_title: string
    clothes: string
    clothes_data: TransData<AssetsData>

    appliances_title: string
    appliances: string
    appliances_data: TransData<AssetsData>

    sport_equipment_title: string
    sport_equipment: string
    sport_equipment_data: TransData<AssetsData>

    pets_title: string
    pets: string
    pets_data: TransData<AssetsData>

    digital_assets_title: string,
    digital_assets: string,
    digital_assets_data: TransData<AssetsData>,

    items_title: string,
    items: string,
    items_data: TransData<AssetsData>,

    other_inheritance_title: string,
    other_inheritance: string,
    other_inheritance_data: TransData<AssestsDataWithType>,
    future_items_title: string,
    future_items: string,
    future_items_data: TransData<AssetsData>,
}