import React from 'react';

export default class HoverCounter extends React.Component {
    state = {
        counter: 0,
    };

    increment = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    render() {
        const { counter } = this.state;
        return (
            <div>
                {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
                <h1 onMouseOver={this.increment}>hovered {counter} times</h1>
            </div>
        );
    }
}
