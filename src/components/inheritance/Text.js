import Emoji from './Emoji';

export default class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const addText = this.addEmoji('Hello', '<3');
        return super.render(addText);
    }
}
