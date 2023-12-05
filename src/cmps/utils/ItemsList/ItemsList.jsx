import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import { FieldArray, getIn, useField, useFormikContext } from 'formik'
import React, { useState } from 'react'
import Item from "./Item"
import ItemListNavigation from './ItemListNavigation'
import ItemListPageNumbers from './ItemListPageNumbers'
import Error from '../Error'
import { v4 as uuidv4 } from "uuid"
import { Add } from '@mui/icons-material'

const FIELD_META_INDEX = 1

function ItemsList({ name, title, itemTitle, defaultValue, renderItem, hideAddButton }) {
    const { values } = useFormikContext()
    const items = getIn(values, name) || []
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

    const nameWithIndex = `${name}[${selectedItemIndex}]`
    const selectedItem = getIn(values, nameWithIndex)


    const isError = !selectedItem && meta.touched && meta.error

    // TODO: if someone chooses a type, fills its repective fields and then changes it to another types - these fields will still be filled

    return (
        <>
            <Typography variant="h2">{title}</Typography>
            <FieldArray
                name={name}
                render={arrayHelpers =>
                    <StyledItemListWrapper isError={isError}>
                        <StyledListHeader>
                            <AddItemWrapper>
                                {!hideAddButton &&
                                    <Button variant="outlined" onClick={() => arrayHelpers.push({
                                        uuid: uuidv4(),
                                        ...defaultValue
                                    })}>
                                        <Add />
                                        <Typography variant="subtitle1">הוספה</Typography>
                                    </Button>
                                }
                            </AddItemWrapper>

                            <StyledHeaderNavigationWrapper>
                                <ItemListNavigation
                                    title={itemTitle}
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
                            </StyledHeaderNavigationWrapper>
                            <DummyDiv />
                        </StyledListHeader>


                        {items.length === 0 &&
                            <StyledNoData>
                                <Typography variant="subtitle1">אין נתונים עדיין.</Typography>
                            </StyledNoData>
                        }

                        {selectedItem &&
                            <StyledItemsList>
                                <Item key={selectedItemIndex} onDelete={() => arrayHelpers.remove(selectedItemIndex)}>
                                    {renderItem(selectedItem, nameWithIndex)}
                                </Item>
                            </StyledItemsList>
                        }
                        <Error isError={isError}>{meta.error}</Error>
                    </StyledItemListWrapper>
                } />
        </>

    )
}

const StyledItemListWrapper = styled("div")(({ theme, isError }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1rem 0",
    width: "100%",
    border: `2px solid ${isError ? theme.palette.error.light : "transparent"}`,
    padding: "0.5rem",
    borderRadius: "5px",
    gap: "1rem"
}))

const StyledListHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

const StyledHeaderNavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    flex: 1;
`

const StyledItemsList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const AddItemWrapper = styled.div`
    flex: 1;
`

const DummyDiv = styled.div`
    flex: 1;
`

const StyledNoData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #eee;
    border-radius: 10px;
    width: 100%;
`


export default ItemsList