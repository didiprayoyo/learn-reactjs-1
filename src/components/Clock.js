// reactjs day4
import React, { Component, useState, useEffect } from 'react';

class MyRealTimeClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    }
  }

  componentDidMount() {
    const intervalTimer = setInterval(() => {
      // this.componentDidUpdate();
      this.setState({ currentTime: new Date() }); // tick() refresh
    }, 1000);
    this.setState({ intervalTimer })
  };

  // // biasanya berdasarkan onClick, onChange, onButton, etc.
  // componentDidUpdate(prevProps, prevState) {
  //   this.setState({ currentTime: new Date() })
  // };

  componentWillUnmount() {
    clearInterval(this.intervalTimer);
  };

  render() {
    const { currentTime } = this.state;
    return (
      <div>
        <h1>Current time: {currentTime.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

// using useEffect for functional component
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // tanpa ini (willUnmount to clearUp) bisa, tapi ga best practice?
    return () => {
      clearInterval(interval);
    };
  }, []); // some conditions for update in side effect

  return (
    <div>
      <h1>Current Time: {currentTime.toLocaleTimeString()}</h1>
    </div>
  );
};

export { Clock, MyRealTimeClock }; // kalau byk tanpa pake default, apa sebenernya default?
// export default MyRealTimeClock;