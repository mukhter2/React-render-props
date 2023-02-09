export default function Text({ addEmoji, addBraket }) {
    let text = 'I am JS PL';
    console.log(text);
    if (addEmoji) {
        text = addEmoji(text, '<3');
    }
    console.log(text);
    if (addBraket) {
        text = addBraket(text);
    }
    console.log(addBraket, ' is printing');
    console.log(text);
    return <div>{text}</div>;
}
