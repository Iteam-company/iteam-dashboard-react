import { Box, Button, Modal } from '@mui/material';
import { FC, Fragment, useContext } from 'react';
import { style } from '../../../../../styles/modal-style';
import { Flexbox } from '../../flex-box';
import { LoadingButton } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import { Input } from '../../input';
import { context } from '../../../../admin/components/view/user/user-summary/user-info-item';
import { TextareaAutosize } from '@mui/base';

type Props = {
	open?: boolean;
	handleOpen?: () => void;
	handleClose?: () => void;
	isLoading?: boolean;
	text?: string;
	element?: JSX.Element;
	handleSubmit?: () => void;
	experience?: boolean;
	query?: string;
	handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export const EditModal: FC<Props> = ({
	open,
	handleClose,
	isLoading = false,
	text = 'Submit',
	element,
	handleSubmit,
	experience,
	handleChange,
	query,
}) => {
	const values = useContext(context);
	const submit = values ? values.formik.handleSubmit : null;
	return (
		<>
			<Modal
				open={open || false}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					{experience ? (
						<TextareaAutosize
							minRows='10'
							value={query}
							onChange={handleChange}></TextareaAutosize>
					) : null}
					{element && element}
					{values?.modalArray
						? values.modalArray.map((item, index) => (
							<Fragment key={`${item}_${index}`}>
								<Input
									name={item.title}
									formikValue={item.formikValue}
									formik={values.formik}
									label={item.title}
								/>
							</Fragment>
						  ))
						: null}
					<Flexbox
						sx={{ gridGap: '20px' }}
						justifyContent={'center'}
						alignItems={'center'}>
						<LoadingButton
							variant='contained'
							color='primary'
							type='submit'
							onClick={submit || handleSubmit}
							loading={isLoading}>
							{text}
						</LoadingButton>
						<Button
							variant='contained'
							color='primary'
							type='submit'
							startIcon={<CloseIcon />}
							onClick={handleClose}>
							Close
						</Button>
					</Flexbox>
				</Box>
			</Modal>
		</>
	);
};
