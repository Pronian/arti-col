class DebouncedState<T> {
	#value = $state<T>() as T;
	#timeout: ReturnType<typeof setTimeout> | undefined;
	#debounceTime: number;

	constructor(value: T, debounceTime = 1000) {
		this.#value = value;
		this.#debounceTime = debounceTime;
	}

	get value() {
		return this.#value;
	}

	set value(value: T) {
		clearTimeout(this.#timeout);
		this.#timeout = setTimeout(() => {
			this.#value = value;
		}, this.#debounceTime);
	}
}

/**
 * Creates a boxed signal that debounces the value changes.
 * @param initialValue - the initial value of the signal
 * @param debounceTime - the time to wait before updating the signal
 * @returns a boxed signal that debounces the value changes
 */
export function debouncedState<T>(initialValue: T, debounceTime = 1000) {
	return new DebouncedState(initialValue, debounceTime);
}
