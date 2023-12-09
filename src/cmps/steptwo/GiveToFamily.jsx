import { useFormikContext } from 'formik'
import React from 'react'
import translation, { answers, giveToFamilyTypes, giveToFamilyTypesKeys } from '../../store/translation'
import styled from '@emotion/styled'
import ItemsList from '../utils/ItemsList/ItemsList'
import { personInfo } from '../../store/data'
import FormikTextField from '../formikcomponents/FormikTextField'

function GiveToFamilyItem({ name }) {
    return (
        <StyledGiveToFamilyItem>
            <FormikTextField
                name={`${name}.first_name`}
                label={translation.first_name}
            />
            <FormikTextField
                name={`${name}.last_name`}
                label={translation.last_name}
            />
            <FormikTextField
                numeric
                maxLength={9}
                name={`${name}.person_id`}
                label={translation.person_id}
            />
        </StyledGiveToFamilyItem>

    )
}

function GiveToFamily() {
    const { values } = useFormikContext()

    if (values.give_to_family !== answers.yes) {
        return <></>
    }
    return (
        <StyledGiveToFamily>
            <ItemsList
                name={`give_to_family_type.${giveToFamilyTypesKeys.parents}`}
                title={giveToFamilyTypes[giveToFamilyTypesKeys.parents]}
                itemTitle={giveToFamilyTypes[giveToFamilyTypesKeys.parents]}
                defaultValue={personInfo}
                renderItem={(_dataItem, itemName) => <GiveToFamilyItem name={itemName} />} />

            <ItemsList
                name={`give_to_family_type.${giveToFamilyTypesKeys.siblings}`}
                title={giveToFamilyTypes[giveToFamilyTypesKeys.siblings]}
                itemTitle={giveToFamilyTypes[giveToFamilyTypesKeys.siblings]}
                defaultValue={personInfo}
                renderItem={(_dataItem, itemName) => <GiveToFamilyItem name={itemName} />} />

            <ItemsList
                name={`give_to_family_type.${giveToFamilyTypesKeys.friends}`}
                title={giveToFamilyTypes[giveToFamilyTypesKeys.friends]}
                itemTitle={giveToFamilyTypes[giveToFamilyTypesKeys.friends]}
                defaultValue={personInfo}
                renderItem={(_dataItem, itemName) => <GiveToFamilyItem name={itemName} />} />

            <ItemsList
                name={`give_to_family_type.${giveToFamilyTypesKeys.grandChildren}`}
                title={giveToFamilyTypes[giveToFamilyTypesKeys.grandChildren]}
                itemTitle={giveToFamilyTypes[giveToFamilyTypesKeys.grandChildren]}
                defaultValue={personInfo}
                renderItem={(_dataItem, itemName) => <GiveToFamilyItem name={itemName} />} />
        </StyledGiveToFamily>
    )
}

const StyledGiveToFamily = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const StyledGiveToFamilyItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
`

export default GiveToFamily