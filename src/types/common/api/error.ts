export interface Error {
	data: {
		message: string;
		statusCode: number;
	};
	status: number;
}
