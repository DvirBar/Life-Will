import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { FieldArray, getIn, useFormikContext } from 'formik'
import React from 'react'
import NonProfitListContent from './NonProfitListContent'
import { inheritorsTypes } from '../../../../store/translation'
import SearchNonProfitsButton from './SearchNonProfitsButton'

function NonProfitsList({ name, openSearch }) {
    const { values } = useFormikContext()
    const inheritors = getIn(values, name)
    console.log(inheritors);
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
                <SearchNonProfitsButton openSearch={openSearch} />
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