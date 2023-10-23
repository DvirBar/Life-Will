import React from 'react'
import translation, { inheritorsTypes } from '../../../store/translation'
import QuestionBlock from '../QuestionBlock'
import Subtitle from '../Subtitle'
import Table from '../Table'
import Block from '../Block'
import RowHeader from '../RowHeader'
import TableHeader from '../TableHeader'
import TableCell from '../TableCell'
import TableRow from '../TableRow'
import Divider from '../Divider'
import BlockInfo from '../BlockInfo'

function Step3RealEstate({ reItem, index, numItems }) {
    return (
        <Block>
            <BlockInfo>{`${translation.real_estate_title} ${numItems}/${index + 1}`}</BlockInfo>
            <QuestionBlock question={translation.real_estate_data.type} answer={reItem.type} />
            <QuestionBlock question={translation.real_estate_data.own_percentage} answer={reItem.own_percentage} />
            <Table>
                <RowHeader>
                    <TableHeader>{translation.real_estate_data.country}</TableHeader>
                    <TableHeader>{translation.real_estate_data.city}</TableHeader>
                    <TableHeader>{translation.real_estate_data.street}</TableHeader>
                    <TableHeader>{translation.real_estate_data.house_number}</TableHeader>
                    <TableHeader>{translation.real_estate_data.block}</TableHeader>
                    <TableHeader>{translation.real_estate_data.lot}</TableHeader>
                    <TableHeader>{translation.real_estate_data.sub_lot}</TableHeader>
                    <TableHeader>{translation.real_estate_data.size}</TableHeader>
                </RowHeader>
                <TableRow>
                    <TableCell>{reItem.country}</TableCell>
                    <TableCell>{reItem.city}</TableCell>
                    <TableCell>{reItem.street}</TableCell>
                    <TableCell>{reItem.house_number}</TableCell>
                    <TableCell>{reItem.block}</TableCell>
                    <TableCell>{reItem.lot}</TableCell>
                    <TableCell>{reItem.sub_lot}</TableCell>
                    <TableCell>{reItem.size}</TableCell>
                </TableRow>
            </Table>
            {reItem.description.length > 0 &&
                <QuestionBlock question={translation.real_estate_data.description} answer={reItem.description} newLine={true} />
            }
            <Divider />
            <Subtitle>{translation.inheritorsText}</Subtitle>
            <Table>
                <RowHeader>
                    <TableHeader size={30}></TableHeader>
                    <TableHeader>{translation.real_estate_data.inheritors.type}</TableHeader>
                    <TableHeader>{translation.real_estate_data.inheritors.first_name}</TableHeader>
                    <TableHeader>{translation.real_estate_data.inheritors.last_name}</TableHeader>
                    <TableHeader>{translation.real_estate_data.inheritors.person_id}</TableHeader>
                    <TableHeader>{translation.real_estate_data.inheritors.percentage}</TableHeader>
                </RowHeader>
                {reItem.inheritors.map((inheritor, index) =>
                    <TableRow>
                        <TableHeader size={30}>{index + 1}</TableHeader>
                        <TableHeader>{inheritor.type}</TableHeader>
                        <TableHeader>{inheritor.first_name}</TableHeader>
                        <TableHeader>{inheritor.type !== inheritorsTypes.nonprofit ? inheritor.last_name : '-'}</TableHeader>
                        <TableHeader>{inheritor.type !== inheritorsTypes.nonprofit ? inheritor.person_id : '-'}</TableHeader>
                        <TableHeader>{inheritor.percentage}</TableHeader>
                    </TableRow>
                )}
            </Table>
            {reItem.remarks.length > 0 &&
                <QuestionBlock question={translation.real_estate_data.remarks} answer={reItem.remarks} newLine={true} />
            }

        </Block>
    )
}

export default Step3RealEstate