import React from 'react';

export default class Braket extends React.Component {
    // eslint-disable-next-line react/no-unused-class-component-methods
    addBraket = (text) => `[ ${text} ]`;

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addBraket: this.addBraket });
    }
}
