import React from 'react';

// how to do best practices for components and using them
import { Counter, MyOwnClicker } from '../components/MyOwnClicker';
import { Clock, MyRealTimeClock } from '../components/Clock';
import Form from '../components/Form';

const Playground = () => {
    return (
        <>
            <MyOwnClicker />
            <Counter />
            <Clock />
            <MyRealTimeClock />
            <Form />
        </>
    );
}

export default Playground;