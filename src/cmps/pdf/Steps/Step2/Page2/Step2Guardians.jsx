import React from 'react'
import Table from '../../../Table'
import Subtitle from '../../../Subtitle'
import translation, { answers } from '../../../../../store/translation'
import TableHeader from '../../../TableHeader'
import RowHeader from '../../../RowHeader'
import TableRow from '../../../TableRow'
import TableCell from '../../../TableCell'
import { globalData as data } from '../../../../../store/context'
import { getAge } from '../../../../utils/getAge'

function Step2Guardians() {
    const needGuardian = (kid) => {
        return (getAge(kid.birthDate) < 18 || kid.has_disability === answers.yes)
    }
    const needGuardians = () => {
        for (let kid of data.kids_data) {
            if (needGuardian(kid)) {
                return true
            }
        }

        return false
    }

    if (!needGuardians()) {
        return <></>
    }



    return (
        <>
            <Subtitle>{translation.guardianDetailsText}</Subtitle>
            <Table>
                <RowHeader>
                    <TableHeader>{translation.kids_data.guardian_data.type}</TableHeader>
                    <TableHeader>{translation.kidNameText}</TableHeader>
                    <TableHeader>{translation.kids_data.guardian_data.first_name}</TableHeader>
                    <TableHeader>{translation.kids_data.guardian_data.last_name}</TableHeader>
                    <TableHeader>{translation.kids_data.guardian_data.person_id}</TableHeader>
                </RowHeader>
                {data.kids_data.map(kid =>
                    needGuardian(kid) &&
                    <TableRow>
                        <TableCell>{kid.guardian.type}</TableCell>
                        <TableCell>{kid.first_name + " " + kid.last_name}</TableCell>
                        <TableCell>{kid.guardian.first_name}</TableCell>
                        <TableCell>{kid.guardian.last_name}</TableCell>
                        <TableCell>{kid.guardian.person_id}</TableCell>
                    </TableRow>
                )}
            </Table>
        </>

    )
}

export default Step2Guardians