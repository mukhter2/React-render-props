import React from 'react';

export default class Emoji extends React.Component {
    // eslint-disable-next-line react/no-unused-class-component-methods
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji} `;

    render(override) {
        let text = 'I am a component';
        if (override) text = override;
        return <div>{text}</div>;
    }
}
