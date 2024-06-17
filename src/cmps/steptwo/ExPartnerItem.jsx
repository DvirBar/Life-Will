import styled from '@emotion/styled'
import React, { useContext } from 'react'
import ChooseGender from '../utils/ChooseGender'
import FormikTextField from '../formikcomponents/FormikTextField'
import { SiteContext } from '../../store/context'

function ExPartnerItem({ nameWithIndex }) {
    const {
        translation
    } = useContext(SiteContext)

    return (
        <StyledExPartnerItem>
            <ChooseGender name={`${nameWithIndex}.gender`} />
            <FormikTextField
                name={`${nameWithIndex}.first_name`}
                label={translation.ex_partners.first_name}
            />
            <FormikTextField
                name={`${nameWithIndex}.last_name`}
                label={translation.ex_partners.last_name}
            />
            <FormikTextField
                numeric
                maxLength={9}
                name={`${nameWithIndex}.person_id`}
                label={translation.ex_partners.person_id}
            />
        </StyledExPartnerItem>
    )
}

const StyledExPartnerItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
`

export default ExPartnerItem