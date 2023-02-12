import React from 'react';

export default class HoverCounter extends React.Component {
    render() {
        const { counter, increment } = this.props;
        return (
            <div>
                {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
                <h1 onMouseOver={increment}>hovered {counter} times</h1>
            </div>
        );
    }
}
