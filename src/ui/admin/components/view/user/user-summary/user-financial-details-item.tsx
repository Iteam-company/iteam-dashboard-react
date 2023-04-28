import { Box, Theme } from '@mui/material';
import { useFormik } from 'formik';
import { createContext, FC, useState } from 'react';
import { useUpdateUserMutation } from '../../../../../../api/user';
import { useNotifySnackbar } from '../../../../../../hooks/snackbar/use-notify-snackbar';
import { User } from '../../../../../../types/common/api/user';
import { CheckProps } from '../../../../../../types/ui/check-layout-props';
import { Flexbox } from '../../../../../components/common/flex-box';
import { EditModal } from '../../../../../components/common/modals/edit-user/modal';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { checkVariantOfTag } from '../../../../../utils/object-tag-checker';
import { CardWrapper } from './user-card-wrapper';
import { Error as ApiError } from '../../../../../../types/common/api/error';
import { UserUpdateContext } from '../../../../../../types/common/context/user-info';

type Props = {
	data: User;
};

export const userBankInfoContext = createContext<UserUpdateContext | null>(
	null,
);

export const UserFinancialDetailsItem: FC<Props> = ({ data }) => {
	const {
		id,
		individualEntrepreneurBankName,
		individualEntrepreneurIndividualTaxNumber,
		individualEntrepreneurAddress,
		individualEntrepreneurBankCode,
		individualEntrepreneurBeneficiaryBank,
		individualEntrepreneurBankAccounNumber,
		individualEntrepreneurName,
		individualEntrepreneurSwiftCode,
	} = objectFieldChecker<User>(data);

	const { showSnackbar } = useNotifySnackbar();
	const initialValues = {
		id,
		individualEntrepreneurBankName,
		individualEntrepreneurIndividualTaxNumber,
		individualEntrepreneurAddress,
		individualEntrepreneurBankCode,
		individualEntrepreneurBeneficiaryBank,
		individualEntrepreneurBankAccounNumber,
		individualEntrepreneurName,
		individualEntrepreneurSwiftCode,
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [update] = useUpdateUserMutation();

	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const {
				individualEntrepreneurBankName,
				individualEntrepreneurIndividualTaxNumber,
				individualEntrepreneurAddress,
				individualEntrepreneurBankCode,
				individualEntrepreneurBeneficiaryBank,
				individualEntrepreneurBankAccounNumber,
				individualEntrepreneurName,
				individualEntrepreneurSwiftCode,
			} = data;
			try {
				const response = await update({
					id,
					individualEntrepreneurBankName,
					individualEntrepreneurIndividualTaxNumber,
					individualEntrepreneurAddress,
					individualEntrepreneurBankCode,
					individualEntrepreneurBeneficiaryBank,
					individualEntrepreneurBankAccounNumber,
					individualEntrepreneurName,
					individualEntrepreneurSwiftCode,
				});
				handleClose();
				showSnackbar('succesfully updated', 'success');
				formik.resetForm();
			} catch (error) {
				const typedError = error as ApiError;
				showSnackbar(typedError.data.message, 'error');
			}
		},
	});

	const userBankInfo = [
		{
			title: 'Entrepreneur bank name',
			value: individualEntrepreneurBankName,
			sx: (theme: Theme) => ({ color: theme.palette.primary.main }),
			formikValue: 'individualEntrepreneurBankName',
		},
		{
			title: 'Entrepreneur individual tax number',
			value: individualEntrepreneurIndividualTaxNumber,
			formikValue: 'individualEntrepreneurIndividualTaxNumber',
		},
		{
			title: 'Entrepreneur address',
			value: individualEntrepreneurAddress,
			formikValue: 'individualEntrepreneurAddress',
		},
		{
			title: 'Entrepreneur bank code',
			value: individualEntrepreneurBankCode,
			formikValue: 'individualEntrepreneurBankCode',
		},
		{
			title: 'Entrepreneur debeficiaty bank',
			value: individualEntrepreneurBeneficiaryBank,
			formikValue: 'individualEntrepreneurBeneficiaryBank',
		},
		{
			title: 'Entrepreneur bank account number',
			value: individualEntrepreneurBankAccounNumber,
			formikValue: 'individualEntrepreneurBankAccounNumber',
		},
		{
			title: 'Entrepreneur name',
			value: individualEntrepreneurName,
			formikValue: 'individualEntrepreneurName',
		},
		{
			title: 'Entrepreneur swift code ',
			value: individualEntrepreneurSwiftCode,
			formikValue: 'individualEntrepreneurSwiftCode',
		},
	];
	return (
		<userBankInfoContext.Provider value={{ modalArray: userBankInfo, formik }}>
			<CardWrapper
				title='Financial info'
				modal={<EditModal />}
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					{userBankInfo.map((item, index) => (
						<Flexbox sx={{ gridGap: '20px' }} key={`${item}-${index}`}>
							<Box>{item.title}:</Box>
							{checkVariantOfTag(item as CheckProps)}
						</Flexbox>
					))}
				</Box>
			</CardWrapper>
		</userBankInfoContext.Provider>
	);
};
