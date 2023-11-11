import { useEffect, useState } from 'react';
import { TextField } from '@mui/material'
import styled from '@emotion/styled'

export const AddressItems = ({ setFieldValue, name }) => {

	const [city, setCity] = useState('');
	const [address, setAddress] = useState('');
	const [houseNum, setHouseNum] = useState('');

	useEffect(() => {
		if (city !== '' && address !== '') {
			const combinedString = `${address} ${houseNum}, ${city}`;
			setFieldValue(name, combinedString);
		}

	}, [city, address, houseNum]);

	return (
		<StyledAddressContainer>
			<TextField
				value={city}
				onChange={(e) => setCity(e.target.value)}
				label="עיר"
				variant="outlined"
				size='small'
			/>
			<TextField
				value={address}
				onChange={(e) => setAddress(e.target.value)}
				label="רחוב"
				variant="outlined"
				size='small'
			/>
			<TextField
				value={houseNum}
				onChange={(e) => setHouseNum(e.target.value)}
				label="מספר"
				variant="outlined"
				size='small'
			/>
		</StyledAddressContainer>
	)

}


const StyledAddressContainer = styled.div`
	display:flex;
	flex-direction:row;
	justify-content:center;
	gap:1rem;
`
