import React from 'react'
import Block from './Block'
import BlockInfo from './BlockInfo'
import QuestionBlock from './QuestionBlock'
import translation, { inheritorsTypes } from '../../store/translation'
import Table from './Table'
import RowHeader from './RowHeader'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableCell from './TableCell'
import Divider from './Divider'
import Subtitle from './Subtitle'

function ItemInheritance({ item, itemKey, index, numItems }) {
    const itemDetails = item.details ? Object.keys(item.details) : null
    const itemTitle = translation[`${itemKey}_title`]

    return (
        <Block>
            {itemTitle && numItems > 1 &&
                <BlockInfo>{`${itemTitle} ${numItems}/${index + 1}`}</BlockInfo>
            }

            <QuestionBlock question={translation[`${itemKey}_data`].type} answer={item.type} />
            <QuestionBlock question={translation[`${itemKey}_data`].own_percentage} answer={item.own_percentage} />
            {itemDetails &&
                <Table>
                    <RowHeader>
                        {Object.keys(translation[`${itemKey}_data`].details).forEach(key =>
                            <TableHeader>{translation[`${itemKey}_data`].details[key]}</TableHeader>
                        )}
                    </RowHeader>
                    <TableRow>
                        {itemDetails.forEach(key =>
                            <TableCell>{item.details[key]}</TableCell>
                        )}
                    </TableRow>
                </Table>
            }

            {item.description?.length > 0 &&
                <QuestionBlock question={translation[`${itemKey}_data`].description} answer={item.description} newLine={true} />
            }
            <Divider />
            <Subtitle>{translation.inheritorsText}</Subtitle>
            <Table>
                <RowHeader>
                    <TableHeader size={30}></TableHeader>
                    <TableHeader>{translation[`${itemKey}_data`].inheritors.type}</TableHeader>
                    <TableHeader>{translation[`${itemKey}_data`].inheritors.first_name}</TableHeader>
                    <TableHeader>{translation[`${itemKey}_data`].inheritors.last_name}</TableHeader>
                    <TableHeader>{translation[`${itemKey}_data`].inheritors.person_id}</TableHeader>
                    <TableHeader>{translation[`${itemKey}_data`].inheritors.percentage}</TableHeader>
                </RowHeader>
                {item.inheritors.map((inheritor, index) =>
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
            {item.remarks.length > 0 &&
                <QuestionBlock question={translation[`${itemKey}_data`].remarks} answer={item.remarks} newLine={true} />
            }
        </Block>

    )
}

export default ItemInheritance