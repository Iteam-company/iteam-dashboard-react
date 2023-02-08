import { InitialFormValue } from "./formik-sign-in";

export interface initialSignUpValue extends InitialFormValue {
	name: string;
	surname: string;
}
