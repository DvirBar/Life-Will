import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useContext } from 'react'
import { SiteContext } from '../../../store/context'
import styled from '@emotion/styled'
import { FieldArray, useField } from 'formik'

function ChooseInheritors({ name, inheritorString }) {
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

    // TODO: improve perfomance

    return (
        <StyledInheritorsModalContent>
            <StyledInheritorsListContainer>
                {getInheritors().map((inheritor, index) =>
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
            </StyledInheritorsListContainer>
        </StyledInheritorsModalContent>

    )
}

const StyledInheritorsModalContent = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid #aaa;
    flex: 1;
`

const StyledInheritorsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 0.5rem;
    margin: 1rem 0;
`

const StyledInheritorsListItem = styled.div`
    padding: 0.2rem;
`

export default ChooseInheritors