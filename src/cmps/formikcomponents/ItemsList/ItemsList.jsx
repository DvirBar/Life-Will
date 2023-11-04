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
                        <Button onClick={() => arrayHelpers.push(defaultValue)} variant="contained">
                            הוספה
                        </Button>
                        <ItemListNavigation
                            title={title}
                            index={selectedItemIndex}
                            numElements={items.length}
                            moveNextIndex={moveNextItem}
                            movePrevIndex={movePrevItem}
                        />
                        <div></div>
                    </StyledListHeader>

                    {selectedItem &&
                        <>
                            <ItemListPageNumbers
                                moveToIndex={moveToIndex}
                                selectedIndex={selectedItemIndex}
                                numElements={items.length}
                            />
                            <StyledItemsList>
                                <Item key={selectedItemIndex} onDelete={() => arrayHelpers.remove(selectedItemIndex)}>
                                    {renderItem(selectedItem, nameWithIndex)}
                                </Item>
                            </StyledItemsList>
                        </>

                    }

                </StyledItemListWrapper>
            } />
    )
}

const StyledItemListWrapper = styled.div`
    margin-bottom: 20px;
    width: 100%;
`

const StyledListHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledItemsList = styled.div`
    display: flex;
    flex-direction: column;
`


export default ItemsList