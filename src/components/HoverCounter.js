import React from 'react';

export default function HoverCounter({ counter, increment, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000', color: '#fff' } : null;
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
            <h1 onMouseOver={increment} style={style}>
                hovered {counter} times
            </h1>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
}
