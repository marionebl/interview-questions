// uncomment for JavaScript version
// import { throttle } from './throttle.js';
import { throttle } from './throttle.ts';
const dodger = require('./dodger');

test('handles noop function', async () => {
    const spy = jest.fn(async () => {});
    const fn = throttle(spy, 1);

    await fn();

    expect(spy).toHaveBeenCalled();
});


test('passes input parameters', async () => {
    const spy = jest.fn(async () => {});
    const fn = throttle(spy, 1);
    const input = {};

    await fn(input);

    expect(spy).toHaveBeenCalledWith(input);
});

test('limits concurrency', async () => {
    const pool = [dodger(() => 1), dodger(() => 2), dodger(() => 3)];
    let pointer = 0;

    const spy = jest.fn(async () => {
        const result = pool[pointer];
        pointer++;
        return result;
    });

    const fn = throttle(spy, 1);

    const e1 = fn();
    const e2 = fn();

    pool[0].resolve();
    expect(spy).toHaveBeenCalledTimes(1);
    await e1;

    pool[1].resolve();
    expect(spy).toHaveBeenCalledTimes(2);
    await e2;
});

test('runs tasks eagerly', async () => {
    const pool = [dodger(() => 1), dodger(() => 2), dodger(() => 3)];
    let pointer = 0;

    const spy = jest.fn(async () => {
        const result = pool[pointer];
        pointer++;
        return result;
    });

    const fn = throttle(spy, 3);

    fn();
    fn();
    fn();

    expect(spy).toHaveBeenCalledTimes(3);
});

test('limits to set concurrency', async () => {
    const pool = [dodger(() => 1), dodger(() => 2), dodger(() => 3), dodger(() => 4), dodger(() => 5)];
    let pointer = 0;

    const spy = jest.fn(async () => {
        const result = pool[pointer];
        pointer++;
        return result;
    });

    const fn = throttle(spy, 3);

    const ex1 = fn();
    const ex2 = fn();
    const ex3 = fn();
    const ex4 = fn();
    const ex5 = fn();

    expect(spy).toHaveBeenCalledTimes(3);

    pool[0].resolve();
    pool[1].resolve();
    await ex1;
    await ex2;

    expect(spy).toHaveBeenCalledTimes(5);
});