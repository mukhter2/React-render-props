import React from 'react';

export default class ClickCounter extends React.Component {
    render() {
        const { counter, increment } = this.props;
        return (
            <div>
                <button type="button" onClick={increment}>
                    click {counter} times
                </button>
            </div>
        );
    }
}
