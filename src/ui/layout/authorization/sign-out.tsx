import { Box } from '@mui/material';
import { FC } from 'react';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useSignOutMutation } from '../../../api/auth';
import { useAppDispatch } from '../../../hooks/store/use-app-dispatch-hook';
import { useAppSelector } from '../../../hooks/store/use-app-selector-hook';
import { removeCredentials } from '../../../store/slices/auth-slice';
type Props = {
	icon?: JSX.Element;
};

export const SignOut: FC<Props> = ({ icon = <LogoutOutlinedIcon /> }) => {
	// const [logOut] = useSignOutMutation();

	// const handleLogout = async () => {
	// 	try {
	// 		await logOut(null);
	// 		console.log('hello')
	// 	} catch (err) {
	// 		console.log(err, 'bye');
	// 	}

	// };
	const dispatch = useAppDispatch();
	const handleLogout = () => dispatch(removeCredentials());
	return <Box onClick={handleLogout}>{icon}</Box>;
};
