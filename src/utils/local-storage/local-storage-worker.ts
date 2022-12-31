import { KeysOfLocalStorage } from '../../constants/utils/local-storage/keys-of-local-storage';

export class LocalStorageWorker {
	// we make constructor prive there
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() {}
	static writeToLocalStorage(
		key: KeysOfLocalStorage,
		value: string | object | number,
	) {
		switch (typeof value) {
			case 'object':
				localStorage.setItem(key, JSON.stringify(value));
				break;
			case 'number':
				localStorage.setItem(key, value.toString());
				break;
			case 'string':
				localStorage.setItem(key, value);
				break;

			default:
				throw new Error('Unexpected type of value');
		}
	}
	static readFromLocalStorage(key: KeysOfLocalStorage) {
		return localStorage.getItem(key);
	}

	static removeItem(key: KeysOfLocalStorage) {
		localStorage.removeItem(key);
	}
}
