import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
    return (
        <div>
            <Counter>
                {(counter, increment) => <ClickCounter counter={counter} increment={increment} />}
            </Counter>
            <Counter>
                {(counter, increment) => <HoverCounter counter={counter} increment={increment} />}
            </Counter>
        </div>
    );
}

export default App;
