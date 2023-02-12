import React from 'react';

export default function ClickCounter({ counter, increment }) {
    return (
        <div>
            <button type="button" onClick={increment}>
                click {counter} times
            </button>
        </div>
    );
}
