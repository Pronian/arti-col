import { writable } from 'svelte/store';

/**
 * Creates a writable store that debounces updates.
 * @param initialValue The initial value of the store.
 * @param debounceTime The time in milliseconds to debounce updates.
 * @returns A writable store that debounces updates.
 */
export function createDebouncedStore<T>(initialValue: T, debounceTime = 1000) {
	let timeout: ReturnType<typeof setTimeout>;
	let rawValue: T = initialValue;
	const { subscribe, set } = writable(initialValue);

	function updateValue(value: T) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			set(value);
			rawValue = value;
		}, debounceTime);
	}

	return {
		subscribe,
		set: updateValue,
		get() {
			return rawValue;
		},
	};
}
