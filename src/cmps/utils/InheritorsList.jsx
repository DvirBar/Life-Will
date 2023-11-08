import React from 'react'
import translation, { inheritorsTypes } from '../../store/translation'

function InheritorsList({ key, values }) {
    const itemDataKey = `${key}_data`
    const itemTranslation = translation[itemDataKey]
    const itemData = values[itemDataKey]

    return (
        <table>
            <tr>
                <th></th>
                <th>{itemTranslation.inheritors.type}</th>
                <th>{itemTranslation.inheritors.first_name}</th>
                <th>{itemTranslation.inheritors.last_name}</th>
                <th>{itemTranslation.inheritors.person_id}</th>
                <th>{itemTranslation.inheritors.percentage}</th>
            </tr>
            {itemData.inheritors.map((inheritor, index) =>
                <tr>
                    <td>{index + 1}</td>
                    <td>{inheritor.type}</td>
                    <td>{inheritor.first_name}</td>
                    <td>{inheritor.type !== inheritorsTypes.nonprofit ? inheritor.last_name : '-'}</td>
                    <td>{inheritor.type !== inheritorsTypes.nonprofit ? inheritor.person_id : '-'}</td>
                    <td>{inheritor.percentage}</td>
                </tr>
            )}
        </table>
    )
}

export default InheritorsList