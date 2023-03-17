import { Button } from '@mui/material';
import { FC, useState } from 'react';
import { useAppSelector } from '../../../../../hooks/store/use-app-selector-hook';
import { selectUser } from '../../../../../store/slices/auth-slice';
import { UserCv } from '../../cv/user-cv';

type Props = {
	text?: string;
};

export const ButtonFileUpload: FC<Props> = ({ text = 'Add Cv' }) => {
	const [file, setFile] = useState<File | null>(null);
	const user = useAppSelector(selectUser);

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setFile(event.target.files[0]);
		}

		return;
	};

	function handleUploadClick() {
		if (user && file) {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('userId', user.id.toString());
		}

		return;
	}
	return (
		<>
			{file || user?.cv ? (
				<>
					<UserCv user={user} />
					<Button
						variant='contained'
						component='label'
						onClick={handleUploadClick}>
						upload cv
					</Button>
				</>
			) : (
				<Button variant='contained' component='label'>
					choose cv
					<input
						hidden
						accept='.pdf,.doc,.docx,.txt'
						type='file'
						onChange={(e) => handleFileUpload(e)}
					/>
				</Button>
			)}
		</>
	);
};
