import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { FieldArray } from 'formik'
import React from 'react'
import Item from "./Item"

function ItemsList({ name, values, onAppend, itemRender }) {
    return (
        <div>
            <FieldArray
                name={name}
                render={arrayHelpers =>
                    <div>
                        {values[name]?.map((item, index) =>
                            <Item onDelete={() => arrayHelpers.remove(index)}>
                                {/* <itemRender  */}
                            </Item>
                        )}
                    </div>
                } />
            <Button onClick={onAppend} variant='outlined'>
                הוספה
            </Button>
        </div>
    )
}


export default ItemsList