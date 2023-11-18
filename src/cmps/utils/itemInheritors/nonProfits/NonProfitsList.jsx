import styled from '@emotion/styled'
import { Search } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { FieldArray, getIn, useFormikContext } from 'formik'
import React from 'react'
import NonProfitListContent from './NonProfitListContent'
import { inheritorsTypes } from '../../../../store/translation'

function NonProfitsList({ name, openSearch }) {
    const { values } = useFormikContext()
    const inheritors = getIn(values, name)

    const nonProfitInheritors = inheritors?.map((item, index) => ({
        ...item,
        origIndex: index
    })).filter(inheritor => inheritor.type === inheritorsTypes.nonprofit)

    return (
        <StyledNonProfitsList>
            <Typography variant="h2">
                עמותות
            </Typography>
            <StyledTypeInheritorsListContainer>
                <FieldArray
                    name={name}
                    render={(arrayHelpers) => (
                        <NonProfitListContent
                            inheritors={nonProfitInheritors}
                            arrayHelpers={arrayHelpers}
                        />
                    )} />
                <Button onClick={openSearch} variant="contained">
                    <Search />&nbsp;
                    <Typography variant="subtitle1">
                        חיפוש עמותה
                    </Typography>
                </Button>
            </StyledTypeInheritorsListContainer>

        </StyledNonProfitsList>
    )
}

const StyledNonProfitsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background-color: #fff;
    height: 100%;
`

const StyledTypeInheritorsListContainer = styled.div`
    padding: 0 1rem;
    border: 3px solid #ccc;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`


export default NonProfitsList