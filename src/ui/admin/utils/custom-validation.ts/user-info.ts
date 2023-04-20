import { isPhoneNumber } from 'class-validator';
import * as Yup from 'yup';

export const userInfoCustomValidationSchema = Yup.object().shape({
	name: Yup.string().min(2).max(30),
	surname: Yup.string().min(2).max(30),
	phone: Yup.string().test('phone', 'Invalid phone number', (value) => {
		return isPhoneNumber(value as string, 'UA') || false;
	}),
	endDate: Yup.date().typeError('Invalid Date!').nullable().notRequired(),
	startDate: Yup.date().typeError('Invalid Date!').nullable().notRequired(),
});
