import React from 'react';
import { defaultRealEstateData } from '../../store/context';
import translation, { answers } from '../../store/translation';
import YesNoRadio from '../formikcomponents/YesNoRadio';
import ItemsList from '../utils/ItemsList/ItemsList';
import RealEstateItem from './RealEstateItem';
import RealEstateSchema from './validation/realEstateValidation';
import FormWrapper from '../utils/FormWrapper';


export default function StepThree() {
	return (
		<FormWrapper
			validationSchema={RealEstateSchema}
			renderItem={(values) => {
				return (
					<>
						<YesNoRadio name="real_estate" question={translation.real_estate} />
						{values.real_estate === answers.yes &&
							<ItemsList
								name="real_estate_data"
								values={values}
								title={translation.real_estate_title}
								defaultValue={defaultRealEstateData}
								renderItem={(dataItem, itemName) => <RealEstateItem dataItem={dataItem} itemName={itemName} />} />
						}
					</>
				)
			}}
		>

		</FormWrapper>

	)
}
