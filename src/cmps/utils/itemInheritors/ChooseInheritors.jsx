import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { SiteContext } from '../../../store/context'
import styled from '@emotion/styled'
import { FieldArray, useField } from 'formik'
import ModalBox from '../../layout/ModalBox'
import NonProfitsList from './NonProfitsList'
import FindNonProfits from './FindNonProfits'

function ChooseInheritors({ name, inheritorString, isOpen, handleClose }) {
    const {
        getInheritors,
    } = useContext(SiteContext)

    const [field] = useField(name)

    const findInheritorIndex = id => {
        const inheritors = field.value
        for (let i = 0; i < inheritors.length; i++) {
            const inheritor = inheritors[i]
            if (inheritor.person_id === id) {
                return i
            }
        }

        return -1
    }

    const isChecked = id => {
        const index = findInheritorIndex(id)

        return index > -1
    }

    const onChange = (arrayHelpers, inheritor) => {
        const index = findInheritorIndex(inheritor.person_id)

        if (index > -1) {
            arrayHelpers.remove(index)
        } else {
            arrayHelpers.push({ ...inheritor, percent: "0" })
        }
    }

    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const inheritors = getInheritors()

    return (
        <StyledInheritorsModalContent
            open={isOpen}
            handleClose={handleClose}
        >
            <FindNonProfits
                isOpen={isSearchOpen}
                handleClose={() => setIsSearchOpen(false)}
            />
            <StyledInheritorsListContainer>
                {Object.keys(inheritors).map((inheritorType) => {
                    if (inheritors[inheritorType]?.length > 0) {
                        return (
                            <>
                                <Typography variant="subtitle1">{inheritorType}</Typography>
                                <StyledTypeInheritorsListContainer>
                                    {inheritors[inheritorType]?.map((inheritor, index) =>
                                        <StyledInheritorsListItem key={index}>
                                            <FieldArray
                                                name={name}
                                                render={(arrayHelpers) => (
                                                    <FormControlLabel
                                                        control={<Checkbox
                                                            checked={isChecked(inheritor.person_id)}
                                                            onChange={() => onChange(arrayHelpers, inheritor)}
                                                        />}
                                                        label={inheritorString(inheritor)}
                                                    />
                                                )} />

                                        </StyledInheritorsListItem>
                                    )}
                                </StyledTypeInheritorsListContainer>
                            </>
                        )
                    }
                    return <></>
                }
                )}
                <NonProfitsList openSearch={() => setIsSearchOpen(true)} />
            </StyledInheritorsListContainer>
            <StyledEndButton onClick={handleClose} variant="contained">סיום</StyledEndButton>
        </StyledInheritorsModalContent>
    )
}

const StyledInheritorsModalContent = styled(ModalBox)`
    display: flex;
    flex-direction: column;
    border-right: 1px solid #aaa;
    align-items: center;
    justify-content: center;
`

const StyledInheritorsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    margin: 1rem 0;
`

const StyledInheritorsListItem = styled.div`
    padding: 0.2rem;
`

const StyledTypeInheritorsListContainer = styled.div`
    padding: 0 1rem;
`

const StyledEndButton = styled(Button)`
    width: 100%;
`

export default ChooseInheritors