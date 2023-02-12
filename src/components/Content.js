import { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    console.log('content rendered');
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, increment) => (
                    <HoverCounter
                        counter={counter}
                        increment={increment}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}
