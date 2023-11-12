import React, { useContext } from 'react';

import { Formik, Form } from "formik";
import { SiteContext, defaultRealEstateData } from '../../store/context';
import translation, { answers } from '../../store/translation';
import YesNoRadio from '../formikcomponents/YesNoRadio';
import ItemsList from '../utils/ItemsList/ItemsList';
import RealEstateItem from './RealEstateItem';
import RealEstateSchema from './validation/realEstateValidation';
import NavigationButtons from '../utils/NavigationButtons';
import FormWrapper from '../utils/FormWrapper';


export default function StepThree() {
	const {
		data,
		submitForm
	} = useContext(SiteContext);

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
