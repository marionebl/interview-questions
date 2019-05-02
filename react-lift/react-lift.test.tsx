import * as React from 'react';
import * as RTL from 'react-testing-library';
import { ReactLift } from './react-lift';

afterEach(() => {
    RTL.cleanup();
});

test('renders [data-testid="output"] element', () => {
    const container = RTL.render(<ReactLift/>);
    expect(container.queryByTestId('output')).not.toBeNull();
});

test('renders [data-testid="input"] element', () => {
    const container = RTL.render(<ReactLift/>);
    expect(container.queryByTestId('input')).not.toBeNull();
});

test.skip('renders count into [data-testid="input"] on click', () => {
    const container = RTL.render(<ReactLift/>);
    const input = container.queryByTestId('input');
    const output = container.queryByTestId('input-client-x');

    input.click();
    expect(output.innerHTML).toBe("1");

    input.click();
    expect(output.innerHTML).toBe("2");
});

test.skip('renders clientX into [data-testid="output"] on click', () => {
    const container = RTL.render(<ReactLift/>);
    const input = container.queryByTestId('input');
    const output = container.queryByTestId('output');

    input.click();
    expect(output.innerHTML).toBe("1");

    input.click();
    expect(output.innerHTML).toBe("2");
});
