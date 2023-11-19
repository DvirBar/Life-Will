import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import { FieldArray, useField, useFormikContext } from 'formik'
import React, { useState } from 'react'
import Item from "./Item"
import ItemListNavigation from './ItemListNavigation'
import ItemListPageNumbers from './ItemListPageNumbers'
import Error from '../Error'

const FIELD_META_INDEX = 1

function ItemsList({ name, title, defaultValue, renderItem }) {
    const { values } = useFormikContext()

    const items = values[name] || []
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)

    const moveNextItem = () => {
        setSelectedItemIndex(curIndex => {
            if (curIndex + 1 < items.length) {
                return curIndex + 1
            }

            return curIndex
        })
    }

    const movePrevItem = () => {
        if (selectedItemIndex > 0) {
            setSelectedItemIndex(curIndex => curIndex - 1)
        }
    }

    const moveToIndex = nextIndex => {
        if (nextIndex >= 0 && nextIndex < items.length) {
            setSelectedItemIndex(nextIndex)
        }
    }

    const meta = useField(name)[FIELD_META_INDEX]


    const selectedItem = values[name][selectedItemIndex]
    const nameWithIndex = `${name}[${selectedItemIndex}]`

    const isError = !selectedItem && meta.touched && meta.error

    // TODO: if someone chooses a type, fills its repective fields and then changes it to another types - these fields will still be filled

    return (
        <FieldArray
            name={name}
            render={arrayHelpers =>
                <StyledItemListWrapper isError={isError}>
                    <StyledListHeader>
                        <ItemListNavigation
                            title={title}
                            index={selectedItemIndex}
                            numElements={items.length}
                            moveNextIndex={moveNextItem}
                            movePrevIndex={movePrevItem}
                        />
                        <ItemListPageNumbers
                            moveToIndex={moveToIndex}
                            selectedIndex={selectedItemIndex}
                            numElements={items.length}
                        />
                    </StyledListHeader>

                    {selectedItem &&
                        <StyledItemsList>
                            <Item key={selectedItemIndex} onDelete={() => arrayHelpers.remove(selectedItemIndex)}>
                                {renderItem(selectedItem, nameWithIndex)}
                            </Item>
                        </StyledItemsList>
                    }
                    <AddItemButton variant="outlined" onClick={() => arrayHelpers.push(defaultValue)}>
                        + הוספה
                    </AddItemButton>
                    <Error isError={isError}>{meta.error}</Error>
                </StyledItemListWrapper>
            } />
    )
}

const StyledItemListWrapper = styled("div")(({ theme, isError }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
    width: "100%",
    border: `2px solid ${isError ? theme.palette.error.light : "transparent"}`,
    padding: "0.5rem",
    borderRadius: "5px"
}))

const StyledError = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.light,
    fontSize: "0.85rem",
    fontWeight: 600,
    alignSelf: "flex-start",
}))


const StyledListHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledItemsList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const AddItemButton = styled(Button)`
    width: 100%;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
`


export default ItemsList