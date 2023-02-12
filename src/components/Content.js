import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content({ theme }) {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, increment) => (
                    <HoverCounter counter={counter} increment={increment} theme={theme} />
                )}
            </Counter>
        </div>
    );
}
