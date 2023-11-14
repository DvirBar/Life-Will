import React from 'react'
import { Typography } from '@mui/material'
import FormikButtonSelect from '../../formikcomponents/FormikButtonSelect'
import translation, { itemTypes } from '../../../store/translation'
import ButtonSelectItem from '../../formikcomponents/buttonSelect/ButtonSelectItem'
import hasField from './hasField'

function ItemType({ name, itemDataName, itemName }) {
    const itemTypesOfItem = itemTypes[name]

    if (!hasField("type", name))
        return <></>

    return (
        <>
            <Typography variant="subtitle1">סוג</Typography>
            <FormikButtonSelect
                name={`${itemName}.type`}
                label={translation[itemDataName].type}
            >
                {itemTypesOfItem && Object.keys(itemTypesOfItem).map((key) =>
                    <ButtonSelectItem
                        key={itemTypesOfItem[key]}
                        value={itemTypesOfItem[key]}
                    >
                        {itemTypesOfItem[key]}
                    </ButtonSelectItem>
                )}
            </FormikButtonSelect>
        </>
    )
}

export default ItemType