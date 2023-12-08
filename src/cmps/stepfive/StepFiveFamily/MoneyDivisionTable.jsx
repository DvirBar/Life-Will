import React, { useState } from 'react'
import InheritorsList from '../../utils/itemInheritors/InheritorsList'
import { getIn, useFormikContext } from 'formik'
import { moneyDivision, statusTypes } from '../../../store/translation'

const mapArrToObj = (arr) => {
    const newObj = {}
    for (const arrItem of arr) {
        newObj[arrItem.uuid] = arrItem
    }

    return newObj
}

function MoneyDivisionTable() {
    const name = "money_division_inheritors"
    const { values, setFieldValue } = useFormikContext()
    const [relativesSynced, setRelativesSynced] = useState(false)

    // TODO: Coying all data might be useless (uuid is enough)
    if (!relativesSynced) {
        const newInheritors = []
        const inheritorsArr = getIn(values, name)
        const inheritorsObj = mapArrToObj(inheritorsArr)

        const relativesArr = getIn(values, "kids_data")

        if ((values.status === statusTypes.partnership || values.status === statusTypes.married)) {
            relativesArr.push(getIn(values, "partner"))
        }
        const relativesObj = mapArrToObj(relativesArr)

        for (const inheritorUUID in inheritorsObj) {
            if (relativesObj[inheritorUUID]) {
                newInheritors.push({
                    ...relativesObj[inheritorUUID],
                    percent: inheritorsObj[inheritorUUID].percent
                })
            }
        }

        for (const relativeUUID in relativesObj) {
            if (!inheritorsObj[relativeUUID]) {
                newInheritors.push({
                    ...relativesObj[relativeUUID],
                    percent: ""
                })
            }
        }

        setFieldValue(name, newInheritors)
        setRelativesSynced(true)
    }

    if (values.money_division !== moneyDivision.byDecision) {
        return <></>
    }

    const inheritorString = (inheritor) => {
        return `${inheritor.first_name} ${inheritor.last_name}`
    }

    return (
        <InheritorsList
            name={name}
            inheritorString={inheritorString}
        />
    )
}

export default MoneyDivisionTable