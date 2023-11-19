import styled from '@emotion/styled'
import React from 'react'

function BaseLayout({ children }) {
    return (
        <StyledBaseLayout>
            {children}
        </StyledBaseLayout>
    )
}

const StyledBaseLayout = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: flex-start;
`

export default BaseLayout