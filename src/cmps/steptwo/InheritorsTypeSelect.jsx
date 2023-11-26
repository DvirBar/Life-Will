import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material'
import { getIn } from 'formik';
import styled from '@emotion/styled'
import { defaultInheritorData } from '../../store/context';
import ItemsList from "../utils/ItemsList/ItemsList";
import { InheritorDetails } from './InheritorDetails';

import { giveToFamilyTypes } from '../../store/translation';


export function InheritorsTypeSelect({ name, keyValues, setFieldItem, formikValues }) {
	const [selectOption, setSelectedOption] = useState('');
	const label = '';
	const labelId = `${name}LabelSelect`;
	const defaultInheritorDataWithId = { uuid: crypto.randomUUID(), ...defaultInheritorData };

	const onSelectInheritor = (e) => {
		debugger;
		const key = e.target.value;
		const val = getIn(formikValues, `give_to_family_type.${key}`);
		if (val === null || val === undefined) {
			setFieldItem(`give_to_family_type.${key}`, []);
		}
		setSelectedOption(e.target.value);
	}
	return (
		<StyledColumn>
			<StyledRow>
				<Typography variant="subtitle1">אני רוצה להפריש מהצוואה ל-</Typography>
				<Box sx={{ minWidth: 120 }}>
					<FormControl sx={{ minWidth: 120 }}>
						<InputLabel id={name}>{label}</InputLabel>
						<Select
							id={name}
							labelId={labelId}
							name={name}
							label={label}
							onChange={onSelectInheritor}
							value={selectOption}
						>
							{Object.keys(keyValues).map((key, index) => {
								return <MenuItem key={key} value={key}>{keyValues[key]}</MenuItem>
							})}
						</Select>
					</FormControl>
				</Box>
			</StyledRow>
			{selectOption && <ItemsList
				name={`give_to_family_type.${selectOption}`}
				values={formikValues}
				title={giveToFamilyTypes[selectOption]}
				defaultValue={defaultInheritorDataWithId}
				renderItem={(dataItem, itemName) => <InheritorDetails dataItem={dataItem} itemName={itemName} />} />}
		</StyledColumn>

	)
}

const StyledColumn = styled.div`
	display:flex;
	flex-direction:column;
	padding-bottom:2rem;
	gap:1rem;
`
const StyledRow = styled.div`
	display:flex;
	flex-direction:row;
	padding-bottom:2rem;
	gap:1rem;
`