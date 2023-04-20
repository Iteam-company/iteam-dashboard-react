import { Theme } from "@mui/material";

export interface UserProps {
	title: string;
	value: string | number | null;
	formikValue?: string;
	sx?: (param: Theme) => object;
}
