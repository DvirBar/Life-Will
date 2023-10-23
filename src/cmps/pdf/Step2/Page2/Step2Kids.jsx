import React from 'react'
import QuestionBlock from '../../QuestionBlock'
import translation, { answers } from '../../../../store/translation'
import data from '../../../../store/sampleData'
import Table from '../../Table'
import RowHeader from '../../RowHeader'
import TableHeader from '../../TableHeader'
import TableRow from '../../TableRow'
import TableCell from '../../TableCell'

function Step2Kids() {
    return (
        <>
            <QuestionBlock question={translation.kids} answer={data.kids} />
            {data.kids === answers.yes &&
                <>
                    <QuestionBlock question={translation.num_of_kids} answer={data.num_of_kids} />
                    <Table>
                        <RowHeader>
                            <TableHeader size={30}></TableHeader>
                            <TableHeader size={30}>
                                {translation.kids_data.gender}
                            </TableHeader>
                            <TableHeader>
                                {translation.kids_data.first_name}
                            </TableHeader>
                            <TableHeader>
                                {translation.kids_data.last_name}
                            </TableHeader>
                            <TableHeader>
                                {translation.kids_data.person_id}
                            </TableHeader>
                            <TableHeader>
                                {translation.kids_data.birthDate}
                            </TableHeader>
                            <TableHeader>
                                {translation.kids_data.hebrewBirthDate}
                            </TableHeader>
                            <TableHeader>
                                {translation.kids_data.has_disability}
                            </TableHeader>
                        </RowHeader>
                        {data.kids_data.map((kid, index) =>
                            <TableRow>
                                <TableCell size={30}>{index + 1}</TableCell>
                                <TableCell size={30}>{kid.gender}</TableCell>
                                <TableCell>{kid.first_name}</TableCell>
                                <TableCell>{kid.last_name}</TableCell>
                                <TableCell>{kid.person_id}</TableCell>
                                <TableCell>{kid.birthDate}</TableCell>
                                <TableCell>{kid.hebrewBirthDate}</TableCell>
                                <TableCell>{kid.has_disability}</TableCell>
                            </TableRow>
                        )}
                    </Table>
                </>
            }
        </>
    )
}

export default Step2Kids