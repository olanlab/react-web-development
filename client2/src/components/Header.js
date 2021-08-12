import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ date: new Date() });  //เมือมีการเรียก setState จะไปเรียก render ต่อ
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()} </div>;
  }
}

export default Header;
