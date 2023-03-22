import { useNavigate } from 'react-router-dom';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Button } from '@mui/material';
import { FC } from 'react';
import { CommontRoutes } from '../../../../../constants/common/routes/common-routes';

type Props = {
	linkToPage?: string;
};

export const ButtonBack: FC<Props> = ({
	linkToPage = `${CommontRoutes.ROOT_PATH}`,
}) => {
	const navigate = useNavigate();
	return (
		<Button onClick={() => navigate(linkToPage)}>
			<ChevronLeftOutlinedIcon />
			back
		</Button>
	);
};
