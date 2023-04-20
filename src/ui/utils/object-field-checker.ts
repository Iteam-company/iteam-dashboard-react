export const objectFieldChecker = <T>(data: T): T => {
	const result: T = {} as T;

	for (const key in data) {
		if (Array.isArray(data[key])) {
			const arrayResult = (data[key] as []).map((item: Partial<T>) =>
				objectFieldChecker(item),
			);
			result[key] = arrayResult as (typeof data)[typeof key];
		} else {
			result[key] = (data[key] || 'N/A') as (typeof data)[typeof key];
		}
	}

	return result as T;
};
