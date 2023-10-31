import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { FieldArray } from 'formik'
import React from 'react'
import Item from "./Item"

function ItemsList({ name, title, values, defaultValue, renderItem }) {
    return (
        <FieldArray
            name={name}
            render={arrayHelpers =>
                <StyledItemListWrapper>
                    <StyledItemsList>
                        {values[name]?.map((item, index) =>
                            <Item title={title} index={index} numElements={values[name].length} key={index} onDelete={() => arrayHelpers.remove(index)}>
                                {renderItem(index)}
                            </Item>
                        )}
                    </StyledItemsList>
                    <Button onClick={() => arrayHelpers.push(defaultValue)} variant="contained">
                        הוספה
                    </Button>
                </StyledItemListWrapper>
            } />
    )
}

const StyledItemListWrapper = styled.div`
    margin-bottom: 20px;
`

const StyledItemsList = styled.div`
    display: flex;
    flex-direction: column;
`


export default ItemsList