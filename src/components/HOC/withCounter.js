import React from 'react';

const withCounter = (MainComponent) => {
    class NewComponent extends React.Component {
        state = {
            counter: 0,
        };

        increment = () => {
            this.setState((prevState) => ({
                counter: prevState.counter + 1,
            }));
        };

        render() {
            const { counter } = this.state;
            return <MainComponent counter={counter} increment={this.increment} />;
        }
    }
    return NewComponent;
};
export default withCounter;
