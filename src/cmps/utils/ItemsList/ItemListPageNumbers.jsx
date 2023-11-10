import styled from '@emotion/styled'
import React from 'react'

function ItemListPageNumbers({ selectedIndex, numElements, moveToIndex }) {
    return (
        <StyledItemListPageNumbers>
            {[...Array(numElements)].map((_, index) =>
                <StyledItemListPageNumberItem
                    onClick={() => moveToIndex(index)}
                    isSelected={selectedIndex === index}>
                    <div>{index + 1}</div>
                </StyledItemListPageNumberItem>
            )}
        </StyledItemListPageNumbers>
    )
}

const StyledItemListPageNumbers = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    height: 22px;
`

const StyledItemListPageNumberItem = styled.div`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border: "1px solid #662A68";
    color: ${props => (props.isSelected ? '#fff' : '#662A68')};
    background-color: ${props => (props.isSelected ? '#662A68' : '#fff')};
    cursor: pointer;
    
`

export default ItemListPageNumbers