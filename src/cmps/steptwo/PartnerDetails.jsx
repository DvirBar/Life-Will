import { Field } from 'formik'
import translation from '../../store/translation';
import FormikRadioGroup from '../formikcomponents/FormikRadioGroup';
import FormikTextField from '../formikcomponents/FormikTextField';
import styled from '@emotion/styled';

export const PartnerDetails = (props) => {
	return (
		<>
			<Field
				render={() => {
					return (
						<>
							<FormikRadioGroup
								name={"partner_gender"}
								options={[{ value: "גבר", label: "גבר" }, { value: "אישה", label: "אישה" }]} />
							<StyledPartnerContainer>
								<FormikTextField name="partner_first_name" placeholder={`${translation.partner_first_name}`} />
								<FormikTextField name="partner_last_name" placeholder={`${translation.partner_last_name}`} />
								<FormikTextField name="partner_id" placeholder={`${translation.partner_id}`} />
							</StyledPartnerContainer>

						</>
					);
				}}
			/>
		</>
	);
}

const StyledPartnerContainer = styled.div`
	padding:1rem 0;
	display:flex;
	flex-direction:row;
	justify-content:left;
	gap:1rem;
	&>*{
		max-width:150px;
	}
`
