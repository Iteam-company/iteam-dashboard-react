import { useLocation, useNavigate } from 'react-router-dom';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Button } from '@mui/material';
import { Routes } from '../../../constants/routes/routes';

export const ButtonBack = () => {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<>
			{location.pathname !== `${Routes.ROOT_PATH}` ? (
				<Button
					sx={{ textAlign: 'center' }}
					onClick={() => navigate(`${Routes.ROOT_PATH}`)}>
					<ChevronLeftOutlinedIcon />
					back
				</Button>
			) : (
				<></>
			)}
		</>
	);
};
