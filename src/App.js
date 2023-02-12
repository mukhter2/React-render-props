import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
    return (
        <div>
            <Counter
                render={(counter, increment) => (
                    <ClickCounter counter={counter} increment={increment} />
                )}
            />

            <Counter
                render={(counter, increment) => (
                    <HoverCounter counter={counter} increment={increment} />
                )}
            />
        </div>
    );
}

export default App;
