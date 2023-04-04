export const objectFieldChecker = <T>(data: T): T => {
	const result: T = {} as T;
	for (const key in data) {
		result[key] = (data[key] || 'N/A') as (typeof data)[typeof key];
	}
	return result as T;
};
