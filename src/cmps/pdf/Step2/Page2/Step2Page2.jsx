import React from 'react'
import DocPage from '../../DocPage'
import QuestionBlock from '../../QuestionBlock'
import translation, { answers, giveToFamilyTypes, giveToFamilyTypesKeys } from '../../../../store/translation'
import data from '../../../../store/sampleData'
import Subtitle from '../../Subtitle'
import Table from '../../Table'
import RowHeader from '../../RowHeader'
import TableHeader from '../../TableHeader'
import TableRow from '../../TableRow'
import TableCell from '../../TableCell'

function GiveToFamilyTable({ type }) {
    if (data.give_to_family_type[type].length === 0) {
        return <></>
    }

    return (
        <>
            <Subtitle>{giveToFamilyTypes[type]}</Subtitle>
            <Table>
                <RowHeader>
                    <TableHeader>{translation.give_to_family_type[type].first_name}</TableHeader>
                    <TableHeader>{translation.give_to_family_type[type].last_name}</TableHeader>
                    <TableHeader>{translation.give_to_family_type[type].person_id}</TableHeader>
                </RowHeader>
                {data.give_to_family_type[type].map(familyType =>
                    <TableRow>
                        <TableCell>{familyType.first_name}</TableCell>
                        <TableCell>{familyType.last_name}</TableCell>
                        <TableCell>{familyType.person_id}</TableCell>
                    </TableRow>
                )}
            </Table>
        </>
    )
}

function Step2Page2() {
    console.log(data.give_to_family_type[giveToFamilyTypesKeys.grandChildren]);
    return (
        <DocPage>
            <QuestionBlock question={translation.give_to_family} answer={data.give_to_family} />
            {data.give_to_family === answers.yes &&
                <>
                    <GiveToFamilyTable type={giveToFamilyTypesKeys.parents} />
                    <GiveToFamilyTable type={giveToFamilyTypesKeys.siblings} />
                    <GiveToFamilyTable type={giveToFamilyTypesKeys.friends} />
                    <GiveToFamilyTable type={giveToFamilyTypesKeys.grandChildren} />
                </>
            }
        </DocPage>
    )
}

export default Step2Page2