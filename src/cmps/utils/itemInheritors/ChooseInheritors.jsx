import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { SiteContext, defaultItemInheritor } from '../../../store/context'
import styled from '@emotion/styled'
import { FieldArray, useField } from 'formik'
import ModalBox from '../../layout/ModalBox'
import NonProfitsList from './nonProfits/NonProfitsList'
import FindNonProfits from './nonProfits/FindNonProfits'

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
            const inheritorItem = {
                ...defaultItemInheritor,
                ...inheritor
            }

            arrayHelpers.push(inheritorItem)
        }
    }

    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const inheritors = getInheritors()

    return (
        <StyledInheritorsModalContent
            open={isOpen}
            handleClose={handleClose}
            title="בחירת יורשים"
        >
            <FindNonProfits
                name={name}
                isOpen={isSearchOpen}
                handleClose={() => setIsSearchOpen(false)}
            />
            <StyledInheritorsListContainer>
                {Object.keys(inheritors).map((inheritorType) => {
                    if (inheritors[inheritorType]?.length > 0) {
                        return (
                            <>
                                <Typography variant="h2">{inheritorType}</Typography>
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
                <NonProfitsList name={name} openSearch={() => setIsSearchOpen(true)} />
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
    border: 3px solid #ccc;
    border-radius: 10px;
`

const StyledEndButton = styled(Button)`
    width: 100%;
`

export default ChooseInheritors