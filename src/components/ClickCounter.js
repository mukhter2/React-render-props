import React from 'react';

export default class ClickCounter extends React.Component {
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
                <button type="button" onClick={this.increment}>
                    click {counter} times
                </button>
            </div>
        );
    }
}
