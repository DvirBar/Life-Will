import styled from '@emotion/styled'
import FormikTextField from '../formikcomponents/FormikTextField';
import { Typography } from '@mui/material';
import { SiteContext } from '../../store/context';
import { useContext } from 'react';

const AddressDetails = () => {
	const addressName = "address"

    const {
        translation
    } = useContext(SiteContext)

	return (
		<StyledAddressWrapper>
			<Typography variant="subtitle1">{translation.address.text}</Typography>
			<StyledAddressContainer>
				<FormikTextField
					name={`${addressName}.city`}
					label={translation.address.city}
				/>
				<FormikTextField
					name={`${addressName}.street`}
					label={translation.address.street}
				/>
				<FormikTextField
					name={`${addressName}.houseNum`}
					label={translation.address.houseNum}
				/>
			</StyledAddressContainer>
		</StyledAddressWrapper>
	)
}

const StyledAddressWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 1rem;
`

const StyledAddressContainer = styled.div`
	display:flex;
	flex-direction:row;
	justify-content:center;
	gap:1rem;
`

export default AddressDetails
