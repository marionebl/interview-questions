export interface Fn {
    (arg?: unknown, ...rest: unknown[]): Promise<unknown>;
}

export function throttle<T extends Fn>(fn: T, concurrency: number): Fn {
    return fn;
}