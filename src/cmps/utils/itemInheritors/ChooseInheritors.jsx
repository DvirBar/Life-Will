import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { SiteContext, defaultItemInheritor } from '../../../store/context'
import styled from '@emotion/styled'
import { FieldArray, useField } from 'formik'
import ModalBox from '../../layout/ModalBox'
import NonProfitsList from './nonProfits/NonProfitsList'
import FindNonProfits from './nonProfits/FindNonProfits'
import { inheritorsTypes } from '../../../store/translation'

function ChooseInheritors({ name, inheritorString, isOpen, handleClose }) {
    const {
        getInheritors,
    } = useContext(SiteContext)

    const [field] = useField(name)

    const findInheritorIndex = (uuid) => {
        const itemInheritors = field.value
        for (let i = 0; i < itemInheritors.length; i++) {
            if (itemInheritors[i].uuid === uuid) {
                return i
            }
        }

        return -1
    }

    const isChecked = (uuid) => {
        const index = findInheritorIndex(uuid)

        return index > -1
    }

    const onChange = (arrayHelpers, inheritor) => {
        const index = findInheritorIndex(inheritor.uuid)

        if (index > -1) {
            arrayHelpers.remove(index)
        } else {
            const itemInheritor = {
                uuid: inheritor.uuid,
                percent: ''
            }

            arrayHelpers.push(itemInheritor)
        }
    }

    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const inheritors = getInheritors()

    const addNonProfit = (arrayHelpers, nonProfitName, nonProfitId) => {
        arrayHelpers.push({
            ...defaultItemInheritor,
            type: inheritorsTypes.nonprofit,
            first_name: nonProfitName,
            person_id: nonProfitId,
            percent: ""
        })
    }
    return (
        <StyledInheritorsModalContent
            open={isOpen}
            handleClose={handleClose}
            title="בחירת יורשים"
        >
            <StyledFindNonProfits isOpen={isSearchOpen}>
                <FindNonProfits
                    name={name}
                    isOpen={isSearchOpen}
                    handleClose={() => setIsSearchOpen(false)}
                    displayBackButton
                    addNonProfit={addNonProfit}
                />
            </StyledFindNonProfits>
            <StyledInheritorsListContainer>
                {Object.keys(inheritors).map((inheritorType, index) => {
                    if (inheritors[inheritorType]?.length > 0) {
                        // TODO: fix key warning
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
                                                            checked={isChecked(inheritor.uuid)}
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
            <StyledEndButton
                onClick={handleClose}
                variant="contained"
                color="secondary"
            >
                <StyledFinishButtonText vairant="subtitle1">סיום</StyledFinishButtonText>
            </StyledEndButton>
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

const StyledFindNonProfits = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 1rem;
    width: 100%;
    top: 0rem;
    right: 0rem;
    z-index: 4;
    background-color: #fff;
    width: 100%;
    visibility: ${({ isOpen }) => isOpen ? "visible" : "hidden"};
    height:  100%;
    padding: 1rem;
    border-radius: 10px;
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: all 200ms ease-in-out;
`

const StyledFinishButtonText = styled(Typography)`
    font-weight: bold;
`

export default ChooseInheritors