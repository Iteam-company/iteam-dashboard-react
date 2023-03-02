import { useNavigate } from 'react-router-dom';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Button } from '@mui/material';
import { CommontRoutes } from '../../../../constants/common/routes/common-routes';

export const ButtonBack = () => {
	const navigate = useNavigate();
	return (
		<Button
			sx={{ textAlign: 'center' }}
			onClick={() => navigate(`${CommontRoutes.ROOT_PATH}`)}>
			<ChevronLeftOutlinedIcon />
			back
		</Button>
	);
};
