import { useCallback, useRef, useState } from 'react';

export function useDebouncedState<T>(initialValue: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

	const timer = useRef<NodeJS.Timeout | undefined>();

	const setNewValue = useCallback((value: T) => {
		clearTimeout(timer.current);
		timer.current = setTimeout(() => setDebouncedValue(value), delay);
	}, [setDebouncedValue]);

	return [debouncedValue, setNewValue] as [T, (newValue: T) => void];
}
