class AssertionError extends Error {}

export function assertExists<T>(val: T | undefined, message?: string): asserts val is T {
    if (val === undefined) throw new AssertionError(message);
}

export function assertNotNull<T>(val: T | null, message?: string): asserts val is T {
    if (val === null) throw new AssertionError(message);
}
