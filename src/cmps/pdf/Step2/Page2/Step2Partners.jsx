import React from 'react'
import DocPage from '../../DocPage'
import Title from '../../Title'
import translation, { answers, statusTypes } from '../../../../store/translation'
import QuestionBlock from '../../QuestionBlock'
import data from '../../../../store/sampleData'
import Block from '../../Block'
import SubBlock from '../../SubBlock'
import Table from '../../Table'
import RowHeader from '../../RowHeader'
import TableHeader from '../../TableHeader'
import { StyleSheet, Text, View } from '@react-pdf/renderer'
import TableRow from '../../TableRow'
import TableCell from '../../TableCell'

const styles = StyleSheet.create({
    view: {
        display: "flex",
        flexDirection: "column"
    }
})

function Step2Partners() {
    return (
        <>
            <QuestionBlock question={translation.status} answer={data.status} />
            {data.status === statusTypes.married &&
                <Block>
                    <QuestionBlock question={translation.partner_married_gender} answer={data.partner_gender} />
                    <SubBlock>
                        <QuestionBlock question={translation.partner_first_name} answer={data.partner_first_name} />
                        <QuestionBlock question={translation.partner_last_name} answer={data.partner_last_name} />
                        <QuestionBlock question={translation.person_id} answer={data.person_id} />
                    </SubBlock>
                </Block>
            }

            <QuestionBlock question={translation.ex_partner_gain} answer={data.ex_partner_gain} />
            {data.ex_partner_gain === answers.yes &&
                <Table>
                    <RowHeader>
                        <TableHeader size={30}>
                        </TableHeader>
                        <TableHeader>
                            {translation.ex_partners.gender}
                        </TableHeader>
                        <TableHeader>
                            {translation.ex_partners.first_name}
                        </TableHeader>
                        <TableHeader>
                            {translation.ex_partners.last_name}
                        </TableHeader>
                        <TableHeader>
                            {translation.ex_partners.person_id}
                        </TableHeader>
                    </RowHeader>
                    {data.ex_partners.map((ex, index) =>
                        <TableRow>
                            <TableCell size={30}>
                                {index + 1}
                            </TableCell>
                            <TableCell>
                                {ex.gender}
                            </TableCell>
                            <TableCell>
                                {ex.first_name}
                            </TableCell>
                            <TableCell>
                                {ex.last_name}
                            </TableCell>
                            <TableCell>
                                {ex.person_id}
                            </TableCell>
                        </TableRow>
                    )}
                </Table>
            }
        </>
    )
}

export default Step2Partners
