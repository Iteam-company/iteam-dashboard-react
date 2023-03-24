import { FC } from 'react';
import { Flexbox } from '../../../../../styles/flex-box';
type Props = {
	ButtonEdit?: JSX.Element;
	ButtonDelete?: JSX.Element;
};

export const UserTableSettings: FC<Props> = ({ ButtonEdit, ButtonDelete }) => {
	return (
		<Flexbox justifyContent={'center'}>
			{ButtonEdit}
			{ButtonDelete}
		</Flexbox>
	);
};
