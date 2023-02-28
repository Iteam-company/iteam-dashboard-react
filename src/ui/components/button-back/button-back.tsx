import { useLocation, useNavigate } from 'react-router-dom';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Button } from '@mui/material';
import { CommontRoutes } from '../../../constants/routes/application-routes/common-routes';

export const ButtonBack = () => {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<>
			{location.pathname !== `${CommontRoutes.ROOT_PATH}` ? (
				<Button
					sx={{ textAlign: 'center' }}
					onClick={() => navigate(`${CommontRoutes.ROOT_PATH}`)}>
					<ChevronLeftOutlinedIcon />
					back
				</Button>
			) : (
				<></>
			)}
		</>
	);
};
