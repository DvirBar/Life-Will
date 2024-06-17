import translation, { childrenGenderTypes } from '../../store/translation'
import FormikButtonSelect from '../formikcomponents/FormikButtonSelect'
import FormikTextField from '../formikcomponents/FormikTextField'
import styled from '@emotion/styled'
import ButtonSelectItem from '../formikcomponents/buttonSelect/ButtonSelectItem'
import { Typography } from '@mui/material'
import FormikDatePicker from '../formikcomponents/FormikDatePicker'
import HebrewDatePicker from '../formikcomponents/HebrewDatePicker'
import YesNoRadio from '../formikcomponents/YesNoRadio'
import GuardianDetails from './GuardianDetails'
import { useContext } from 'react'
import { SiteContext } from '../../store/context'

const ChildItem = ({ dataItem, itemName }) => {
    const {
        translation
    } = useContext(SiteContext)

    return (
        <StyledChildItem>
            <Typography variant='subtitle1'>{translation.kids_data.gender}</Typography>
            <FormikButtonSelect
                name={`${itemName}.gender`}
            >
                {Object.keys(childrenGenderTypes).map(key =>
                    <ButtonSelectItem
                        key={key}
                        value={childrenGenderTypes[key]}
                    >
                        {childrenGenderTypes[key]}
                    </ButtonSelectItem>
                )}
            </FormikButtonSelect>
            <ItemsRow>
                <FormikTextField
                    name={`${itemName}.first_name`}
                    label={translation.kids_data.first_name} />
                <FormikTextField
                    name={`${itemName}.last_name`}
                    label={translation.kids_data.last_name} />
                <FormikTextField
                    name={`${itemName}.person_id`}
                    label={translation.kids_data.person_id} />
            </ItemsRow>

            <FormikDatePicker
                name={`${itemName}.birthDate`}
                label={translation.kids_data.birthDate} />
            <HebrewDatePicker
                name={`${itemName}.hebrewBirthDate`}
                label={translation.kids_data.hebrewBirthDate}
            />
            <YesNoRadio
                name={`${itemName}.has_disability`}
                question={translation.kids_data.has_disability}
            />
            <GuardianDetails name={`${itemName}.guardian`} kidItem={dataItem} />
        </StyledChildItem>
    )
}

const StyledChildItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

const ItemsRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
`

export default ChildItem