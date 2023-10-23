import React from 'react'
import Table from '../../Table'
import Subtitle from '../../Subtitle'
import translation from '../../../../store/translation'
import TableHeader from '../../TableHeader'
import RowHeader from '../../RowHeader'
import TableRow from '../../TableRow'
import TableCell from '../../TableCell'
import data from '../../../../store/sampleData'

function Step2Guardians() {
    const needGuardians = () => {
        for (let kid of data.kids_data) {
            if (kid.guardian_data) {
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
                    kid.guardian_data &&
                    <TableRow>
                        <TableCell>{kid.guardian_data.type}</TableCell>
                        <TableCell>{kid.first_name + " " + kid.last_name}</TableCell>
                        <TableCell>{kid.guardian_data.first_name}</TableCell>
                        <TableCell>{kid.guardian_data.last_name}</TableCell>
                        <TableCell>{kid.guardian_data.person_id}</TableCell>
                    </TableRow>
                )}
            </Table>
        </>

    )
}

export default Step2Guardians