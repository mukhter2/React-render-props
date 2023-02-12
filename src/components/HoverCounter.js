import React from 'react';

export default function HoverCounter({ counter, increment }) {
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
            <h1 onMouseOver={increment}>hovered {counter} times</h1>
        </div>
    );
}
