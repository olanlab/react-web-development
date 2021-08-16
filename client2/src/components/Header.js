import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    console.log("constructor");
  }

  componentDidMount() {
    // console.log('componentDidMount')
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {
    // console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    // console.log('componentWillUnmount')
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() }); //เมือมีการเรียก setState จะไปเรียก render ต่อ
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              <img src="/images/logo/logo.png" alt="" />
              เฮลตี้ คาเฟ่
            </h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
