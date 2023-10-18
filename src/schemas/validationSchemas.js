import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
	first_name: Yup.string().required('Required'),
	last_name: Yup.string().required('Required'),
	//email: Yup.string().email('Invalid email').required('Required'),
});