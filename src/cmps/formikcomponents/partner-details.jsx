import { Field } from 'formik'
import translation from '../../store/translation';


export const PartnerDetails = (props) => {
	return (
		<>
			<Field
				render={({ field, form, meta }) => {
					return (
						<div className={props.className}>
							<Field name="partner_first_name" placeholder={`${translation.partner_first_name}`} />
							<Field name="partner_last_name" placeholder={`${translation.partner_last_name}`} />
							<Field name="partner_id" type="number" placeholder={`${translation.partner_id}`} />
						</div>

					);
				}}
			/>
		</>
	);
}

