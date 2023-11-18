import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import NonProfitItem from './NonProfitItem';

function NonProfitListContent({ inheritors, arrayHelpers }) {
    console.log(inheritors.length);
    if (inheritors.length === 0) {
        return (
            <StyledEmptyList>
                <Typography variant="subtitle1">
                    אין עמותות ברשימה
                </Typography>
            </StyledEmptyList>
        )

    }

    return (
        <div>
            {inheritors?.map((inheritor) =>
                <NonProfitItem
                    key={inheritor.person_id}
                    name={inheritor.first_name}
                    id={inheritor.person_id}
                    index={inheritor.origIndex}
                    arrayHelpers={arrayHelpers}
                />
            )}
        </div>
    )
}

const StyledEmptyList = styled.div`
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
`

export default NonProfitListContent