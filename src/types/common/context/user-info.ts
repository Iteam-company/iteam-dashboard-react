import { UserProps } from '../../admin/edit-user';

export interface UserInfoContext {
	modalArray: UserProps[] | null;
	formik: any;
}
