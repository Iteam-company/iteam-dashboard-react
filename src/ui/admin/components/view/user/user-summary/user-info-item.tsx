import { Box, Theme } from '@mui/material';
import { createContext, FC, useState } from 'react';
import { User } from '../../../../../../types/common/api/user';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { checkVariantOfTag } from '../../../../../utils/object-tag-checker';
import { Flexbox } from '../../../../../components/common/flex-box';
import { CheckProps } from '../../../../../../types/ui/check-layout-props';
import { UserCardWrapper } from './user-card-wrapper';
import { EditModal } from '../../../../../components/common/modals/edit-user/modal';
import { useUpdateUserMutation } from '../../../../../../api/user';
import { useFormik } from 'formik';
import { Error as ApiError } from '../../../../../../types/common/api/error';
import { useNotifySnackbar } from '../../../../../../hooks/snackbar/use-notify-snackbar';
import { UserInfoContext } from '../../../../../../types/common/context/user-info';
import { UserProps } from '../../../../../../types/admin/edit-user';
import { userInfoCustomValidationSchema } from '../../../../utils/custom-validation.ts/user-info';

type Props = {
	data: User;
};

export const context = createContext<UserInfoContext | null>(null);
export const UserInfoItem: FC<Props> = ({ data }) => {
	const {
		name,
		surname,
		birthday,
		startDate,
		endDate,
		endReason,
		address,
		language,
		positionDescription,
		status,
		email,
		phone,
		id,
	} = objectFieldChecker<User>(data);
	const { showSnackbar } = useNotifySnackbar();

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [update] = useUpdateUserMutation();
	const userProps: UserProps[] = [
		{
			title: 'Full name',
			value: `${name} ${surname}`,
			sx: (theme: Theme) => ({ color: theme.palette.primary.main }),
		},
		{
			title: 'employee position',
			formikValue: 'positionDescription',
			value: positionDescription,
		},
		{
			title: 'phone number',
			formikValue: 'phone',
			value: phone,
		},
		{
			title: 'email',
			value: email,
			sx: (theme: Theme) => ({ color: theme.palette.primary.main }),
		},

		{
			title: 'status',
			value: status,
		},
		{
			title: 'Birthday',
			value: birthday,
			formikValue: 'birthday',
		},
		{
			title: 'Start date',
			value: startDate,
			formikValue: 'startDate',
		},
		{
			title: 'End date',
			value: endDate,
			formikValue: 'endDate',
		},
		{
			title: 'End reason',
			value: endReason,
			formikValue: 'endReason',
		},
		{
			title: 'Address',
			value: address,
			formikValue: 'address',
		},
		{
			title: 'Language',
			value: language,
			formikValue: 'language',
		},
	];
	////cut unusable object
	const modalArray = userProps.filter(
		(el: UserProps) =>
			el.title !== 'Full name' && el.title !== 'status' && el.title !== 'email',
	);
	modalArray.unshift(
		{ title: 'Name', value: name, formikValue: 'name' },
		{ title: 'Surname', value: surname, formikValue: 'surname' },
	);
	const initialValues = {
		name,
		surname,
		phone,
		startDate,
		endReason,
		address,
		language,
		positionDescription,
		endDate,
		birthday,
		id,
	};

	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const {
				name,
				surname,
				phone,
				startDate,
				endReason,
				endDate,
				address,
				language,
				positionDescription,
				birthday,
				id,
			} = data;
			try {
				const response = await update({
					id,
					name,
					surname,
					startDate,
					phone,
					endDate,
					endReason,
					address,
					language,
					birthday,
					positionDescription,
				});

				handleClose();
				formik.resetForm();
			} catch (error) {
				const typedError = error as ApiError;
				showSnackbar(typedError.data.message, 'error');
			}
		},
		validationSchema: userInfoCustomValidationSchema,
	});

	return (
		<context.Provider value={{ modalArray, formik }}>
			<UserCardWrapper
				modal={<EditModal />}
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}>
				<Box sx={{ display: 'flex', gridGap: '15%' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}>
						<Box
							component='img'
							alt='user-avatar'
							src={'https://via.placeholder.com/200'}
						/>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						{userProps.map((element, index) => (
							<Flexbox sx={{ gridGap: '16px' }} key={`${element}-${index}`}>
								<Box>{element.title}</Box>
								{checkVariantOfTag(element as CheckProps)}
							</Flexbox>
						))}
					</Box>
				</Box>
			</UserCardWrapper>
		</context.Provider>
	);
};
