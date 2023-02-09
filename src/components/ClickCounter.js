import withCounter from './HOC/withCounter';

function ClickCounter(props) {
    const { counter, increment } = props;
    return (
        <div>
            <button type="button" onClick={increment}>
                click {counter} times
            </button>
        </div>
    );
}
export default withCounter(ClickCounter);
