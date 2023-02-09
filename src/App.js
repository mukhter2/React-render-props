import Braket from './components/composition/Braket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';

function App() {
    return (
        <Emoji>
            {({ addEmoji }) => (
                <Braket>
                    {({ addBraket }) => <Text addEmoji={addEmoji} addBraket={addBraket} />}
                </Braket>
            )}
        </Emoji>
    );
}

export default App;
