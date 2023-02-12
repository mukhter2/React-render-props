import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';

export default class App extends React.Component {
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;
        return (
            <div>
                <Counter>
                    {(counter, increment) => (
                        <ClickCounter counter={counter} increment={increment} />
                    )}
                </Counter>
                {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
                <ThemeContext.Provider value={{ theme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
