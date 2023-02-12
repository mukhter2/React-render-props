import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, increment) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <HoverCounter counter={counter} increment={increment} theme={theme} />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}
