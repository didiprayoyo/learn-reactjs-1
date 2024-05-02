import React, { useState, Component } from 'react';

// Class Component
class MyOwnClicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // edisi genap (double click)
        return nextState.count % 2 === 0;
    }

    handleClick = () => {
        if (this.state.count >= 9) { // HATI2: saat klik ke 9 masuknya ke else, baru recent state.count jadi 9
            this.setState({ count: this.state.count + 1, congrats: "Congrats! You've reached 10 clicks..." })
        } else {
            this.setState({ count: this.state.count + 1 });
        }
        // this.setState((count) => count + 1);
    };

    handleResetClick = () => {
        // penasaran isinya apa aja yaa
        console.log(this.state, this.props);
        this.setState({ count: 0, congrats: null })
        // this.setState((count) => count = 0);
    };

    render () {
        return (
            <div>
                <h1>You clicked {this.state.count} {this.state.count == 0 ? "time" : "times"}. {this.state.congrats || ""}</h1>
                <button onClick={this.handleClick}>(Double) Click me (even edition)</button>
                <button onClick={this.handleResetClick}>Reset to 0</button>
            </div>
        )
    };
};

// Functional Component + flexible Hook
const Counter = () => {
    const [click, setClick] = useState(0);
    const [count, setCount] = useState(0);
    const minimal = -10;
    const maksimal = 10;

    const handleClick = () => {
        setClick((prevClick) => prevClick + 1);
    };
    const handleResetClick = () => {
        setClick(0);
    };

    // kek form, bisa difilter aja berdasarkan name
    const handleDecrementingCount = () => {
        if (count <= minimal) setCount(minimal); // or do nothing
        else setCount((prevCount) => prevCount-1);
    };
    const handleIncrementingCount = () => {
        if (count >= maksimal) setCount(maksimal); // or do nothing
        else setCount((prevCount) => prevCount+1);
    };
    const handleResetCount = () => setCount(0);

    return (
        <div>
            <h1>You clicked {click} {click == 0 ? "time" : "times"}</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleResetClick}>Reset to 0</button>

            <p>Ini counter. Minimal -10, maksimal 10</p>
            <h1>Counter: {count}</h1>
            <button onClick={handleDecrementingCount}>decrementing</button>
            <button onClick={handleResetCount}> reset to 0</button>
            <button onClick={handleIncrementingCount}>incrementing</button>

        </div>
    );
}

export { Counter, MyOwnClicker};