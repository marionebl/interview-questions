import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactLift } from './react-lift';

function main() {
    const element = document.createElement('div');
    document.body.appendChild(element);

    ReactDOM.render(<ReactLift/>, element);
}

main();