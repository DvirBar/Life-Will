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
import data from '../../../store/sampleData'
import { View } from '@react-pdf/renderer'

function Step3FutureRealEstate() {
    return (
        <View>
            <Subtitle>{translation.future_real_estate}</Subtitle>
            <Block>
                <Table>
                    <RowHeader>
                        <TableHeader size={30}></TableHeader>
                        <TableHeader>{translation.future_real_estate_data.inheritors.type}</TableHeader>
                        <TableHeader>{translation.future_real_estate_data.inheritors.first_name}</TableHeader>
                        <TableHeader>{translation.future_real_estate_data.inheritors.last_name}</TableHeader>
                        <TableHeader>{translation.future_real_estate_data.inheritors.person_id}</TableHeader>
                        <TableHeader>{translation.future_real_estate_data.inheritors.percentage}</TableHeader>
                    </RowHeader>
                    {data.future_real_estate_data.inheritors.map((inheritor, index) =>
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
                {data.future_real_estate_data.remarks.length > 0 &&
                    <QuestionBlock question={translation.future_real_estate_data.remarks} answer={data.future_real_estate_data.remarks.remarks} newLine={true} />
                }
            </Block>
        </View>

    )
}

export default Step3FutureRealEstate