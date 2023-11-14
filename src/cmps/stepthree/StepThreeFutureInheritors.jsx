import React from 'react'
import styled from '@emotion/styled'
import FutureInheritedItem from '../utils/InheritedItem/FutureInheritedItem'

function StepThreeFutureInheritors() {
    // TODO: can it be empty?
    return (
        <FutureInheritedItem name="future_real_estate" />
    )
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default StepThreeFutureInheritors