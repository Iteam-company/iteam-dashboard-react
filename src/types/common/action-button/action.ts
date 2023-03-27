export interface Action {
	title: string;
	onClick: () => void;
	element: JSX.Element;
}