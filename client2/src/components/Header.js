import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    
    console.log('constructor')
  }

  componentDidMount(){
    // console.log('componentDidMount')
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate(){
    // console.log('componentDidUpdate')

  }
  componentWillUnmount(){
    // console.log('componentWillUnmount')
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });  //เมือมีการเรียก setState จะไปเรียก render ต่อ
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()} </div>;
  }
}

export default Header;
