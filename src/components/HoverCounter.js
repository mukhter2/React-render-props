import withCounter from './HOC/withCounter';

function HoverCounter(props) {
    const { counter, increment } = props;
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
            <h1 onMouseOver={increment}>hovered {counter} times</h1>
        </div>
    );
}
export default withCounter(HoverCounter);
