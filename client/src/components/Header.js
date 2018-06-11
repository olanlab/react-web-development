import React, { Component } from "react";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // this.state = {date : new Date()};
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

export default Header;