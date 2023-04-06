export interface CheckProps {
	title: string;
	value: string | null | number;
	component?: React.ElementType<any>;
	href?: string;
	sx?: object;
}
