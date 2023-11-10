import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { FieldArray } from 'formik'
import React, { useState } from 'react'
import Item from "./Item"
import ItemListNavigation from './ItemListNavigation'
import ItemListPageNumbers from './ItemListPageNumbers'

function ItemsList({ name, title, values, defaultValue, renderItem }) {
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

    const selectedItem = values[name][selectedItemIndex]
    const nameWithIndex = `${name}[${selectedItemIndex}]`
    return (
        <FieldArray
            name={name}
            render={arrayHelpers =>
                <StyledItemListWrapper>
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
                </StyledItemListWrapper>
            } />
    )
}

const StyledItemListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`

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
`


export default ItemsList