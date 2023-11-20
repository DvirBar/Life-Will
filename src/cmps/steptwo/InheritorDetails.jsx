import translation from '../../store/translation'
import FormikRadioGroup from '../formikcomponents/FormikRadioGroup'
import FormikTextField from '../formikcomponents/FormikTextField'
import styled from '@emotion/styled'

export const InheritorDetails = ({ itemName }) => {
	return (
		<StyledChildColumn>
			<FormikRadioGroup
				name={`${itemName}.gender`}
				options={[{ value: "זכר", label: "זכר" }, { value: "נקבה", label: "נקבה" }]} />
			<StyledChildRow>
				<FormikTextField
					name={`${itemName}.first_name`}
					label={translation.kids_data.first_name} />
				<FormikTextField
					name={`${itemName}.last_name`}
					label={translation.kids_data.last_name} />
				<FormikTextField
					name={`${itemName}.person_id`}
					label={translation.kids_data.person_id} />

			</StyledChildRow>
		</StyledChildColumn>
	);
}

const StyledChildColumn = styled.div`
	display:flex;
	flex-direction:column;
	align-content:left;
`

const StyledChildRow = styled.div`
	padding-top:1rem;
	display:flex;
	flex-direction:row;
	justify-content:left;
	gap:1.6rem;
	&>*{
		min-width:9rem;
		max-width:180px;
	}
`