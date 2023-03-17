import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
	handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
	textСhooseCv?: string;
};
export const ChooseFileButton: FC<Props> = ({
	handleFileUpload,
	textСhooseCv = 'choose cv',
}) => {
	return (
		<Button variant='contained' component='label'>
			{textСhooseCv}
			<input
				hidden
				accept='.pdf,.doc,.docx,.txt'
				type='file'
				onChange={(e) => handleFileUpload(e)}
			/>
		</Button>
	);
};
