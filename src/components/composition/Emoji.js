import React from 'react';

export default class Emoji extends React.Component {
    // eslint-disable-next-line react/no-unused-class-component-methods
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji} `;

    render() {
        console.log(this.addEmoji);
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addEmoji: this.addEmoji });
    }
}
