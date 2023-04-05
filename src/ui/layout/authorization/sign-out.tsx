import { Box } from '@mui/material';
import { FC } from 'react';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useSignOutMutation } from '../../../api/auth';
import { useAppDispatch } from '../../../hooks/store/use-app-dispatch-hook';
import { removeCredentials } from '../../../store/slices/auth-slice';
type Props = {
	icon?: JSX.Element;
};

export const SignOut: FC<Props> = ({ icon = <LogoutOutlinedIcon /> }) => {
	const [logOut] = useSignOutMutation();
	const dispatch = useAppDispatch();

	const handleLogout = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
		} finally {
			dispatch(removeCredentials());
		}
	};
	return <Box onClick={handleLogout}>{icon}</Box>;
};
