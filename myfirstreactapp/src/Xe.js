import React from "react";

class Xe extends React.Component {
  constructor(props) {
    console.log("Xe constructor: ", props);
    super(props);
    this.state = {
      color: props.color,
      value: props.value,
    };
    console.log("this in constructor: ", this);
    // this.shoot = this.shoot.bind(this);
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps');
  //   return { color: props.color };
  // }

  shoot() {
    alert("Great Shot!");
    console.log("shoot this = ", this);
  }

  shoot2 = (a) => {
    // console.log("shoot2 this = ", this);
    console.log("shoot2 a = ", a);
  };

  render() {
    // console.log("Xe class: ", this.props.color);
    // this.state = { color: this.props.color, value: this.props.value };
    // console.log("render");

    const shoot = (
      <h3
        onClick={this.shoot.bind(this, "Karmar A")}
        style={{ color: this.state.color, cursor: "pointer" }}
      >
        Hi, {this.state.value} !
      </h3>
    );

    const shoot2 = (
      <h3
        onClick={() => {
          this.shoot2("Karmar B");
        }}
        style={{ color: this.state.color, cursor: "pointer" }}
      >
        Hi, {this.state.value} !
      </h3>
    );

    return shoot;
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   setTimeout(() => {
  //     this.setState({color: "yellow"});
  //     console.log('componentDidMount đã thay đổi thành màu vàng');
  //   }, 3000)
  // }
}

export default Xe;
