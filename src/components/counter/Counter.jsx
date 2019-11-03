import React, { Component } from 'react';
import PropsType from 'prop-types'
import './Counter.css'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    render() {
        return (
            <div className="Counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count">{this.state.counter}</span>
                <div><button className="ResetButton" onClick={this.reset}>Reset</button></div>
            </div>
        );
    }
    increment(by) {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            });
    }
    decrement(by) {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            });
    }
    reset() {
        this.setState({
            counter: 0
        });
    }
}

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    render() {
        return (
            <div className="CounterButton">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
                {/* <span className="count">{this.state.counter}</span> */}
            </div>
        );
    }
    increment() {
        this.setState({
            counter: this.state.counter + this.props.by
        });
        this.props.incrementMethod(this.props.by)
    }
    decrement() {
        this.setState(prevState => {
            return { counter: this.state.counter - this.props.by }
        });
        this.props.decrementMethod(this.props.by)
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropsType.number
}
export default Counter