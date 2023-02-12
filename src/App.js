import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';

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
                <Section theme={theme} />
            </div>
        );
    }
}
