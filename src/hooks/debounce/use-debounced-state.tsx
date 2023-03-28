import { useState } from 'react';

export function useDebouncedState<T>(initialValue: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

	let timer: NodeJS.Timeout | undefined;

	const setNewValue = (value: T) => {
		clearTimeout(timer);
		timer = setTimeout(() => setDebouncedValue(value), delay);
	};

	return [debouncedValue, setNewValue];
}
