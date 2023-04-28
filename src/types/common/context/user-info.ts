import { UserProps } from '../../admin/edit-user';

export interface UserUpdateContext {
	modalArray: UserProps[] | null;
	formik: any;
}
