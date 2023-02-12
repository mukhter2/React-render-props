import React from 'react';

export default class Counter extends React.Component {
    state = {
        counter: 0,
    };

    // eslint-disable-next-line react/no-unused-class-component-methods
    increment = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    render() {
        const { children } = this.props;
        const { counter } = this.state;
        return children(counter, this.increment);
    }
}
